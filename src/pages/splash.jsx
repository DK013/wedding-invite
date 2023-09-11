import React from "react";
import { Page, Link, } from "framework7-react";
import ribbon_top from "../images/ribbon_top.png";
import ribbon_bottom from "../images/ribbon_bottom.png";

const SplashPage = () => {
	return (
		<Page name="splash">
			<div className="w-full h-full flex justify-center items-center">
				<img src={ribbon_top} className="max-w-full absolute left-0 top-0" />
				<img src={ribbon_bottom} className="max-w-full absolute bottom-0 right-0" />
				<div className="container">
					<Link href="/home/" className="pulse-button">open</Link>
				</div>
			</div>
		</Page>
	);
};

export default SplashPage;
