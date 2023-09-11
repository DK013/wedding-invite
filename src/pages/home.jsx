import React from "react";
import { Page, Block, BlockTitle, Button, f7 } from "framework7-react";
import bg from "../images/front.png";
import music from "../assets/music.mp3"

const HomePage = () => {
	return (
		<Page name="home" className="md:bg-black">
			<div className="flex justify-center items-center h-screen w-screen">
				<img
					src={bg}
					className={`w-full lg:w-auto h-full object-cover absolute top-0 ${
						!f7.device.desktop && "left-0"
					}`}
				/>
				<Block className="w-full bottom-0 h-[30%] absolute flex flex-col justify-center items-center">
					<h1 className="text-white">an invitation from</h1>
					<BlockTitle className="h-[28px] p-1">Kusum & Deep</BlockTitle>
					<h1 className="text-white">23 - 11 - 2023</h1>
					<Button href="/inside/" outline className="py-5 px-16 mt-16 rounded-full">
						view
					</Button>
				</Block>
			</div>
			<audio id="audio" loop autoPlay>
				<source src={music} type="audio/mpeg" />
			</audio>
		</Page>
	);
};
export default HomePage;
