import React from "react";

import { Wrapper } from "./ServicesStyles";

import { services } from "../../utils/constants";

const Services = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<article className="header">
					<h3>
						custom furniture <br />
						built only for you
					</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
						quisquam saepe id reiciendis sunt, repudiandae libero amet rem quia
						quod?
					</p>
				</article>

				<div className="services-center">
					{services.map(({ id, title, icon, text }) => (
						<article className="service" key={id}>
							<span className="icon">{icon}</span>
							<h4>{title}</h4>
							<p>{text}</p>
						</article>
					))}
				</div>
			</div>
		</Wrapper>
	);
};

export default Services;
