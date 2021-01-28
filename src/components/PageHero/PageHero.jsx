import React from "react";
import { Link } from "react-router-dom";

import { Wrapper } from "./PageHeroStyles";

function PageHero({ title }) {
	return (
		<Wrapper>
			<div className="section-center">
				<h3>
					<Link to="/">Home</Link>/ {title}
				</h3>
			</div>
		</Wrapper>
	);
}

export default PageHero;
