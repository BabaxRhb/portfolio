import useCarousel from "../../hooks/useCarousel";

interface CarouselBtnProps {
	direction: "prev" | "next";
	onClick: () => void;
}

const CarouselBtn = ({ direction, onClick }: CarouselBtnProps) => {
	const btnStyle = `
		transform -translate-y-1/2
		bg-secondary
		text-text
		p-2
		hover:bg-accent
		rounded-full
		w-10 h-10`
	return <button onClick={onClick} className={btnStyle}>{direction === "prev" ? "<" : ">"}</button>;
}

const CloseBtn = ({ onClick }: { onClick: () => void }) => {
	return (
		<button
			className="
			bg-secondary text-text rounded-full w-8 h-8 flex items-center justify-center hover:bg-accent transition-all"
			onClick={onClick}
		>{"✕"}</button>
	)
}

const Carousel = ({ imgUrl }: { imgUrl: string[] }) => {

	const { currentIndex, isZoomed, handlePrevious, handleNext, setIsZoomed } = useCarousel(imgUrl);

	return (
    <div className="flex gap-1 items-center w-full max-w-3xl mx-auto">
		{ currentIndex > 0 && <CarouselBtn direction="prev" onClick={handlePrevious} />}
		<div className="overflow-hidden relative h-70">
			<div
				className="flex transition-transform duration-500 ease-in-out h-64"
				style={{ transform: `translateX(-${currentIndex * 100}%)` }}
			>
			{
				imgUrl.map((image, index) => (
					<div
						key={index}
						className="min-w-full flex items-center justify-center"
					>
						<img 
							src={image} alt={`Slide ${index}`}
							className="w-auto max-w-full h-full object-contain cursor-pointer hover:scale-105 transition-transform duration-300"
							onClick={() => setIsZoomed(true)} 
						/>
					</div>
			))}
			</div>
		</div>
		{ currentIndex < imgUrl.length - 1 && <CarouselBtn direction="next" onClick={handleNext} /> }
		{
			isZoomed && 
			(
				<div className="
					fixed inset-0 bg-background/30 backdrop-blur-3xl flex items-center justify-center z-50
					overflow-y-auto
					[&::-webkit-scrollbar]:w-2
					[&::-webkit-scrollbar-track]:rounded-full
					[&::-webkit-scrollbar-thumb]:rounded-full
					[&::-webkit-scrollbar-track]:bg-background
					[&::-webkit-scrollbar-thumb]:bg-accent/50
					dark:[&::-webkit-scrollbar-track]:bg-background
					dark:[&::-webkit-scrollbar-thumb]:bg-accent/50
				">
					<div className="flex flex-col gap-1 max-w-4xl max-h-3/4 phone:p-2 p-2 min-h-0" onClick={(e) => e.stopPropagation()}>
						<div className="self-end shrink-0">
							<CloseBtn onClick={() => setIsZoomed(false)} />
						</div>
						<img src={imgUrl[currentIndex]} alt="Zoomed" className="w-full h-full object-contain min-h-0" />
					</div>
				</div>
			)}
    </div>
  );
}

export default Carousel;