import "./Intro.scss";

import { init } from "ityped";
import { useEffect, useRef } from "react";

const Intro = () => {
	const textRef = useRef();

	useEffect(() => {
		const myText = document.querySelector("#myText");
		init(myText, {
			showCursor: true,
			backDelay: 1500,
			backSpeed: 60,
			strings: ["Developer", "Designer", "Content Creator"],
		});
	}, []);

	return (
		<div className="intro" id="intro">
			<div className="left">
				<div className="imageContainer">
					<img src="assets/man.png" alt="" />
				</div>
			</div>
			<div className="right">
				<div className="wrapper">
					<h2>Hi There, I'm</h2>
					<h1>jhondel Caranay</h1>
					<h3>
						Freelance <span ref={textRef} id="myText"></span>
					</h3>
				</div>

				<a href="#portfolio">
					<img src="assets/down.png" alt="" />
				</a>
			</div>
		</div>
	);
};

export default Intro;
