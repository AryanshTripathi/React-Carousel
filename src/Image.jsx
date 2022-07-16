import React from "react";

const Image = ({ curImage, isActive }) => {
	return (
		<div
			className={`w-full h-full absolute rounded-xl ${
				isActive ? "slide active" : "slide"
			}`}>
			{isActive && (
				<img
					src={curImage}
					alt="Image 1"
					className="w-full h-full rounded-xl"
				/>
			)}
		</div>
	);
};

export default Image;
