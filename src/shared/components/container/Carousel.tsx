import { useState } from "react";

const Carousel = ({ imgUrl }: { imgUrl: string[] }) => {

	const [ currentIndex, setCurrentIndex ] = useState(0);

	const handlePrevious = () => {
		console.log("previous", currentIndex);
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1));
	}

	const handleNext = () => {
		console.log("next", currentIndex);
		setCurrentIndex((prevIndex) => (prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1));
	}

	return (
		<div className="relative w-50 h-50">
			<div
				className={`flex transition ease-out duration-40`}
			>
				<img src={imgUrl[currentIndex]} />
			</div>
			<div className="absolute top-0 h-full w-full justify-between items-center flex text-white phone:px-5 text-lg">
				{ currentIndex > 0 ? (
					<button onClick={handlePrevious} className="bg-primary/30 rounded-full p-2">{"<"}</button>
				) : <div></div> }
				{ currentIndex < imgUrl.length - 1 ? (
					<button onClick={handleNext} className="bg-primary/30 rounded-full p-2">{">"}</button>
				) : <div></div> }
			</div>
		</div>
	)
}

export default Carousel;