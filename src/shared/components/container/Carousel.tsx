import { useState } from "react";

const Carousel = ({ imgUrl }: { imgUrl: string[] }) => {

	const [ currentIndex, setCurrentIndex ] = useState(0);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1));
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1));
	}

	return (
		<div className="w-80 relative">
			<img src={imgUrl[currentIndex]} className="w-full h-80 object-contain bg-transparent"/>
			<div className="absolute top-0 h-full w-full justify-between items-center flex text-white">
				{ currentIndex > 0 ? (
					<button onClick={handlePrevious} className="bg-primary/50 rounded-full p-0.5">{"<"}</button>
				) : <div></div> }
				{ currentIndex < imgUrl.length - 1 ? (
					<button onClick={handleNext} className="bg-primary/50 rounded-full p-0.5">{">"}</button>
				) : <div></div> }
			</div>
		</div>
	)
}

export default Carousel;