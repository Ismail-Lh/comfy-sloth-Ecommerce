import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./HeroStyles";

import heroBcg from "../../assets/hero-bcg.jpeg";
import heroBcg2 from "../../assets/hero-bcg-2.jpeg";

const Hero = () => {
	return (
		<Wrapper className="section-center">
			<div className="content">
				<h1>
					desing your <br /> comfort zone
				</h1>

				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti iure
					quasi odit tenetur unde officiis repudiandae quod deserunt quia eum?
				</p>
				<Link to="/products" className="btn hero-btn">
					shop now
				</Link>
			</div>

			<div className="img-container">
				<img src={heroBcg} alt="nice table" className="main-img" />
				<img src={heroBcg2} alt="person working" className="accent-img" />
			</div>
		</Wrapper>
	);
};

export default Hero;
