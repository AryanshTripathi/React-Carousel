import React from "react";
import { useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import Footer from "./Footer";
import Image from "./Image";

const Carousel = ({ imageArray }) => {
	const [current, setCurrent] = useState(0);

	return (
		<div className="m-5 w-96 aspect-video relative">
			{imageArray.map((item, index) => (
				<Image key={index} curImage={item} isActive={index === current} />
			))}
			<div
				className="bg-white w-fit rounded-full p-px xs:p-1 sm:p-2 mt-1 absolute left-1 bottom-1/2 hover:bg-slate-300 sm:text-xl cursor-pointer icon"
				onClick={() => {
					setCurrent((prevState) => (prevState == 0 ? 4 : prevState - 1));
				}}>
				<FiChevronLeft />
			</div>
			<div
				className="bg-white w-fit rounded-full p-px xs:p-1 sm:p-2 mt-1 absolute right-1 bottom-1/2 hover:bg-slate-300 sm:text-xl cursor-pointer icon"
				onClick={() => {
					setCurrent((prevState) => (prevState + 1) % 5);
				}}>
				<FiChevronRight />
			</div>
			<Footer current={current} setCurrent={setCurrent} />
		</div>
	);
};

export default Carousel;
