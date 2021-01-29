import React from "react";

import { Wrapper } from "./ContactStyles";

const Contact = () => {
	return (
		<Wrapper>
			<div className="section-center">
				<h3>Join our newsletter and get 20% off</h3>
				<div className="content">
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
						veniam repudiandae vel ab id, fuga praesentium nobis natus ipsam
						vero?
					</p>
					<form
						className="contact-form"
						action="https://formspree.io/f/xqkgnrvb"
						method="POST"
					>
						<input
							type="email"
							className="form-input"
							placeholder="enter email"
							name="_replyto"
						/>
						<button type="submit" className="submit-btn">
							subscribe
						</button>
					</form>
				</div>
			</div>
		</Wrapper>
	);
};

export default Contact;
