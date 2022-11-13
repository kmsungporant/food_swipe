import { useEffect, useState } from "react";
import { BsTelephoneFill } from "react-icons/bs";
import { Information } from "../../pages/api/type2";
import { motion, MotionConfig, useAnimationControls } from "framer-motion";
import { TbCurrencyDollar } from "react-icons/tb";
import { Restaurant } from "../../pages/api/types";
import { useRouter } from "next/router";
import { FaLocationArrow, FaMoneyBillAlt } from "react-icons/fa";
import { AiFillStar, AiFillClockCircle } from "react-icons/ai";

export default function FoodCard({ restaurant }: { restaurant: Restaurant }) {
	const router = useRouter();

	const handleUser = () => {
		router.push(`${information?.website}`);
	};

	// Handle food card
	const controls = useAnimationControls();
	const handleDragEnd = (event: any, info: any) => {
		// Swiping right
		if (info?.offset?.x > 200) {
			console.log("swiped");
			controls.start({
				scale: 1.1,
				transition: { duration: 0.2 },
			});
			handleUser();
		}
		// Swiping left
		else if (info?.offset?.x < -200) {
			console.log("left");
			controls.start({
				x: -2000,
				transition: { duration: 0.5 },
				opacity: 0,
				rotate: -70,
			});
		} else {
			controls.start({ x: 0 });
		}
	};

	const [information, setInformation] = useState<Information>();

	var axios2 = require("axios");
	var config2 = {
		method: "get",
		url: `https://maps.googleapis.com/maps/api/place/details/json?place_id=${restaurant?.place_id}&fields=editorial_summary,website,formatted_phone_number&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
	};

	function getImage() {
		return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${
			restaurant.photos![0]?.width
		}&photo_reference=${restaurant?.photos![0]?.photo_reference}&key=${
			process.env.NEXT_PUBLIC_GOOGLE_API_KEY
		}`;
	}

	useEffect(() => {
		axios2(config2)
			.then(function (response: any) {
				setInformation(response?.data?.result);
			})
			.catch(function (error: any) {
				console.log(error);
			});
	}, []);

	return (
		<motion.div
			animate={controls}
			onDragEnd={handleDragEnd}
			drag="x"
			dragConstraints={{
				left: -150,
				right: 150,
			}}
			dragSnapToOrigin={true}
			dragElastic={0.25}
			dragTransition={{
				bounceStiffness: 100,
			}}
			className="flex w-full h-full items-center justify-center"
		>
			<div className="absolute">
				<div className="h-[40rem] font-serif cursor-grab">
					<div className="h-full w-full bg-white text-black flex flex-col rounded-3xl p-3 gap-y-1 ">
						<div className=" w-full h-full">
							<div className="h-1/2 flex relative mb-5 justify-center">
								<div className="flex justify-center h-full items-center overflow-hidden object-fill rounded-3xl">
									<img
										draggable="false"
										height="100%"
										width="100%"
										src={
											restaurant.photos != null
												? getImage()
												: "https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000"
										}
									/>
								</div>
							</div>

							<div className="flex flex-col gap-y-2">
								<span className="h-full  text-3xl font-black w-full text-center">
									{restaurant.name}
								</span>
								<span className="h-[2px] bg-black" />
								<span className="flex flex-row items-center gap-x-1">
									<AiFillClockCircle />
									Operating Hours:
									{restaurant?.opening_hours?.open_now ? (
										<span className="text-green-700 font-black underline">
											Open
										</span>
									) : (
										<span className="text-red-700 font-black underline">
											Closed
										</span>
									)}
								</span>
								<span className="flex flex-row items-center gap-x-1">
									<FaLocationArrow /> {restaurant.vicinity}
								</span>
								<span className="flex items-center flex-row gap-x-1">
									<BsTelephoneFill />{" "}
									{information?.formatted_phone_number}
								</span>
								<span className="flex flex-row items-center gap-x-1">
									<AiFillStar />
									Rating: {restaurant.rating}/5
								</span>
								<span className=" flex flex-row text-green-600 items-center">
									<span className="flex flex-row items-center gap-x-1 text-black">
										<FaMoneyBillAlt />
										Price Range:
									</span>
									{Array(restaurant.price_level).fill(
										<TbCurrencyDollar className="text-lg" />
									)}
								</span>

								<p>
									<span className="text-lg">
										{
											information?.editorial_summary
												?.overview
										}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
