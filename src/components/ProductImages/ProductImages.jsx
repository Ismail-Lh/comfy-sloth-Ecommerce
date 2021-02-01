import React, { useState } from "react";

import { Wrapper } from "./ProductImagesStyles";

const ProductImages = ({ images = [{ url: "" }] }) => {
	const [mainImg, setMainImg] = useState(images[0]);

	return (
		<Wrapper>
			<img src={mainImg.url} alt="main image" className="main" />
			<div className="gallery">
				{images.map((img, idx) => (
					<img
						src={img.url}
						alt={img.filename}
						key={idx}
						onClick={() => setMainImg(images[idx])}
						className={`${img.url === mainImg.url && "active"}`}
					/>
				))}
			</div>
		</Wrapper>
	);
};

export default ProductImages;
