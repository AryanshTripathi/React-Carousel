import React from "react";

const Footer = ({ current, setCurrent }) => {
	const divs = [0, 1, 2, 3, 4];
	return (
		<div className="absolute text-white bottom-1 h-4 w-full mx-auto flex justify-center gap-4">
			{divs.map((item) => (
				<div
					key={item}
					onClick={() => setCurrent(item)}
					className={`w-4 h-4 rounded-full ${
						current == item ? "bg-slate-300" : "bg-slate-500"
					} cursor-pointer hover:bg-red-200`}></div>
			))}
		</div>
	);
};

export default Footer;
