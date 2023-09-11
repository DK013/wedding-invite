import React from "react";
import { Page, Block } from "framework7-react";
import { AddToCalendarButton } from "add-to-calendar-button-react";
import top from "../images/top.png";

const ContentPage = () => {
	return (
		<Page name="content" pageContent={false}>
			<div className="page-content h-full flex justify-center items-center">
				<img src={top} className="w-full absolute top-0 left-0 max-h-full" />
				<Block className="text-center">
					<h1 className="mb-3">
						🌸 You're Invited to a Celebration of Love 🌸
					</h1>
					<p className="my-3">
						In the garden of destiny, two hearts did bloom, <br />
						Kusum and Deep, united under the moon's gentle plume.{" "}
						<br />
						Their love story unfolds, like a sweet serenade, <br />
						Join us in joy as they begin their new escapade.
					</p>
					<p className="my-3">
						As the sun dips below the horizon's embrace, <br />
						They'll exchange vows with radiant grace.{" "}
						<br />
						A promise of forever, they'll tenderly share, <br />
						In a moment so precious, nothing can compare.
					</p>
					<p className="my-3">
						📆 Date: 23rd November <br />
						⏰ Time: Sunset <br />
						🏰 Venue: [Venue]
					</p>
					<p className="my-3">
						With love as their compass and dreams in their eyes,{" "}
						<br />
						They'll journey together, beneath azure skies. <br />
						Let's gather as friends and family so dear, <br />
						To shower them with blessings, love, and cheer.
					</p>
					<p className="my-3">
						Save the date for 23rd of November <br />
						As we prepare for the biginning of forever. <br />
						Your presence is a gift, and it truly means a lot,{" "}
						<br />
						To celebrate a love so rare, tying the perfect knot.
					</p>
					<p className="my-3">
						Dress in your finest, in hues of love's delight, <br />
						As we dance through the evening and into the night.{" "}
						<br />
						Join us, dear friend, in this love-filled endeavor,{" "}
						<br />
						To witness the union of Kusum and Deep forever.
					</p>
					<p className="my-3">
						Your presence will make this day even more grand, <br />
						As we honor the love, hand
						in hand. <br />
						So mark the date and save the hour, <br />
						For a wedding that promises joy in a fragrant flower.
					</p>
					<p className="my-3 text-right">
						With love and warmth,
						<br />
						Kusum & Deep
					</p>
					<div className="flex justify-center items-center">
						<AddToCalendarButton
                            label="Save The Date"
                            buttonStyle="neumorphism"
                            lightMode="light"
							name="Kusum & Deep's Wedding"
							options={["Apple", "Google"]}
							location="Canning"
							startDate="2023-11-23"
							endDate="2023-11-23"
							startTime="20:00"
							endTime="23:59"
							timeZone="Asia/Kolkata"
                            styleLight="--btn-text:purple"></AddToCalendarButton>
					</div>
					{/* <Button className="datebtn mt-5 h-[50px]">
						Save the Date
					</Button> */}
				</Block>
			</div>
		</Page>
	);
};

export default ContentPage;
