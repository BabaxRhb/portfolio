import { useState } from "react";

const useCarousel = (imgUrl: string[]) => {
	const [ currentIndex, setCurrentIndex ] = useState(0);
	const [ isZoomed, setIsZoomed ] = useState(false);

	const handlePrevious = () => {
		setCurrentIndex((prevIndex) => (prevIndex === 0 ? imgUrl.length - 1 : prevIndex - 1));
	}

	const handleNext = () => {
		setCurrentIndex((prevIndex) => (prevIndex === imgUrl.length - 1 ? 0 : prevIndex + 1));
	}

	return {
		currentIndex,
		isZoomed,
		handlePrevious,
		handleNext,
		setIsZoomed
	}
}

export default useCarousel;