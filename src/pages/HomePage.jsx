import React from "react";

import { FeaturedProducts, Services, Hero, Contact } from "../components";

const HomePage = props => {
	return (
		<main>
			<Hero />
			<FeaturedProducts />
			<Services />
			<Contact />
		</main>
	);
};

export default HomePage;
