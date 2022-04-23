import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./Portfolio.scss";

import {
	contentPortfolio,
	designPortfolio,
	featuredPortfolio,
	mobilePortfolio,
	webPortfolio,
} from "../../data";

export const Portfolio = () => {
	const [selected, setSelected] = useState("featured");
	const [data, setData] = useState([]);
	const list = [
		{
			id: "featured",
			title: "Featured",
		},
		{
			id: "web",
			title: "Web App",
		},
		{
			id: "mobile",
			title: "Mobile App",
		},
		{
			id: "design",
			title: "Design",
		},
		{
			id: "content",
			title: "Content",
		},
	];

	useEffect(() => {
		switch (selected) {
			case "featured":
				setData(featuredPortfolio);
				break;
			case "web":
				setData(webPortfolio);
				break;
			case "mobile":
				setData(mobilePortfolio);
				break;
			case "design":
				setData(designPortfolio);
				break;
			case "content":
				setData(contentPortfolio);
				break;
			default:
				setData(featuredPortfolio);
		}
	}, [selected]);

	return (
		<div className="portfolio" id="portfolio">
			<h1>Portfolio</h1>
			<ul>
				{list.map((item) => (
					<PortfolioList
						title={item.id}
						id={item.id}
						active={selected === item.id}
						setSelected={setSelected}
						key={item.id}
					/>
				))}
			</ul>
			<div className="container">
				{data.map((data) => (
					<div className="item" key={data.id}>
						<img src={data.img} alt={data.title} />
						<h3>{data.title}</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default Portfolio;
