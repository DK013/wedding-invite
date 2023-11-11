import React, { useState } from "react";
import { Page, Link, Preloader } from "framework7-react";
import OnImagesLoaded from "react-on-images-loaded";
import ribbon_top from "../images/ribbon_top.png";
import ribbon_bottom from "../images/ribbon_bottom.png";
import top from "../images/top.png";
import bg from "../images/front.png";

const SplashPage = () => {
	const [loading, setLoading] = useState(true);
	const runAfterImagesLoaded = () => {
		setLoading(false);
	};
	return (
		<OnImagesLoaded onLoaded={runAfterImagesLoaded} timeout={10000}>
			<Page name="splash">
				<div className="w-full h-full flex justify-center items-center">
					<img
						src={ribbon_top}
						className="max-w-full absolute left-0 top-0"
					/>
					<img
						src={ribbon_bottom}
						className="max-w-full absolute bottom-0 right-0"
					/>
					<div className="container">
						{loading ? (
							<div className="flex flex-col items-center justify-center h-full w-full">
								<Preloader color="red" />
								<p className="text-white mt-2 tracking-widest">Loading</p>
							</div>
						) : (
							<Link href="/home/" className="pulse-button">
								open
							</Link>
						)}
					</div>
					<img src={top} alt="" className="w-0" />
					<img src={bg} alt="" className="w-0" />
				</div>
			</Page>
		</OnImagesLoaded>
	);
};

export default SplashPage;
