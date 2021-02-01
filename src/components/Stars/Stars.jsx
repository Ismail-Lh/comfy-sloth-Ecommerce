import React from "react";

import styled from "styled-components/macro";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";

const Stars = ({ stars, reviews }) => {
	const tempStars = Array.from({ length: 5 }, (_, idx) => {
		const num = idx + 0.5;

		return (
			<span>
				{stars >= idx + 1 ? (
					<BsStarFill />
				) : stars >= num ? (
					<BsStarHalf />
				) : (
					<BsStar />
				)}
			</span>
		);
	});

	return (
		<Wrapper>
			<div className="stars">{tempStars}</div>
			<p className="reviews">({reviews} customer reviews)</p>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	span {
		color: #ffb900;
		font-size: 1rem;
		margin-right: 0.25rem;
	}
	p {
		margin-left: 0.5rem;
		margin-bottom: 0;
	}
	margin-bottom: 0.5rem;
`;

export default Stars;
