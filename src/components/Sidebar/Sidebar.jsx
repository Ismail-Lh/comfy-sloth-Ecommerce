import React from "react";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";

import { useProductsContext } from "../../contexts/products_context";

import logo from "../../assets/logo.svg";
import { SidebarContainer } from "./SidebarStyles";

import { links } from "../../utils/constants";
import { CartButtons } from "..";

function Sidebar() {
	const data = useProductsContext();
	console.log(data);

	const isOpen = false;
	return (
		<SidebarContainer>
			<aside className={`${isOpen ? "sidebar show-sidebar" : "sidebar"}`}>
				<div className="sidebar-header">
					<img src={logo} alt="Comfy Sloth Logo" className="logo" />
					<button type="button" className="close-btn">
						<FaTimes />
					</button>
				</div>

				<ul className="links">
					{links.map(({ id, text, url }) => {
						return (
							<li key={id}>
								<Link to={url}>{text}</Link>
							</li>
						);
					})}
					<li>
						<Link to="/checkout">Checkout</Link>
					</li>
				</ul>
				<CartButtons />
			</aside>
		</SidebarContainer>
	);
}

export default Sidebar;
