import useCarousel from "../../hooks/useCarousel";

interface CarouselBtnProps {
	direction: "prev" | "next";
	onClick: () => void;
}

const CarouselBtn = ({ direction, onClick }: CarouselBtnProps) => {
	const btnStyle = "absolute top-1/2 transform -translate-y-1/2 bg-secondary text-text p-2 hover:bg-accent rounded-full" + (direction === "prev" ? " left-2" : " right-2");
	return <button onClick={onClick} className={btnStyle}>{direction === "prev" ? "<" : ">"}</button>;
}

const Carousel = ({ imgUrl }: { imgUrl: string[] }) => {

	const { currentIndex, isZoomed, handlePrevious, handleNext, setIsZoomed } = useCarousel(imgUrl);

	return (
    <div className="relative w-full max-w-3xl">
		<div className="overflow-hidden relative h-80">
			<div
				className="flex transition-transform duration-500 ease-in-out h-64"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
			{
				imgUrl.map((image, index) => (
					<div
						key={index}
						className="min-w-full"
					><img src={image} alt={`Slide ${index}`} className="w-full h-full object-contain cursor-pointer" onClick={() => setIsZoomed(true)} /></div>
			))}
			</div>
		</div>
		<CarouselBtn direction="prev" onClick={handlePrevious} />
		<CarouselBtn direction="next" onClick={handleNext} />
		{
			isZoomed && 
			(
				<div className="fixed inset-0 bg-background bg-opacity-75 flex items-center justify-center z-50">
					<div className="relative max-w-4xl max-h-screen" onClick={(e) => e.stopPropagation()}>
						<img src={imgUrl[currentIndex]} alt="Zoomed" className="w-full h-full object-contain" />
						<button
							className="absolute top-2 right-2 bg-secondary text-text rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent"
							onClick={() => setIsZoomed(false)}
						>{"✕"}</button>
						<CarouselBtn direction="prev" onClick={handlePrevious} />
						<CarouselBtn direction="next" onClick={handleNext} />
					</div>
				</div>
			)}
    </div>
  );
}

export default Carousel;