import useCarousel from "../../hooks/useCarousel";

interface CarouselBtnProps {
	direction: "prev" | "next";
	onClick: () => void;
}

const CarouselBtn = ({ direction, onClick }: CarouselBtnProps) => {
	const btnStyle = `
		absolute top-1/2
		transform -translate-y-1/2
		bg-secondary
		text-text
		p-2
		hover:bg-accent
		rounded-full
		${direction === "prev" ? " left-2" : " right-2"}`

	return <button onClick={onClick} className={btnStyle}>{direction === "prev" ? "<" : ">"}</button>;
}

const CloseBtn = ({ onClick }: { onClick: () => void }) => {
	return (
		<button
			className="absolute top-0 right-0 bg-secondary text-text rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-all"
			onClick={onClick} >{"✕"}</button>
	)
}

const Carousel = ({ imgUrl }: { imgUrl: string[] }) => {

	const { currentIndex, isZoomed, handlePrevious, handleNext, setIsZoomed } = useCarousel(imgUrl);

	return (
    <div className="relative w-full max-w-3xl mx-auto">
		<div className="overflow-hidden relative h-80">
			<div
				className="flex transition-transform duration-500 ease-in-out h-64"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
			{
				imgUrl.map((image, index) => (
					<div
						key={index}
						className="min-w-full hover:scale-105 transition-transform duration-300"
					>
						<img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain cursor-pointer" onClick={() => setIsZoomed(true)} />
					</div>
			))}
			</div>
		</div>
		{ currentIndex > 0 && <CarouselBtn direction="prev" onClick={handlePrevious} />}
		{ currentIndex < imgUrl.length - 1 && <CarouselBtn direction="next" onClick={handleNext} /> }
		{
			isZoomed && 
			(
				<div className="fixed inset-0 bg-background/30 backdrop-blur-3xl flex items-center justify-center z-50 overflow-y-auto">
					<div className="relative max-w-4xl max-h-3/4" onClick={(e) => e.stopPropagation()}>
						<img src={imgUrl[currentIndex]} alt="Zoomed" className="w-full h-full object-contain" />
						<CloseBtn onClick={() => setIsZoomed(false)} />
					</div>
				</div>
			)}
    </div>
  );
}

export default Carousel;