import { motion, useAnimationControls } from "framer-motion";
import FoodCard from "../components/foodCard/foodCard";
import Footer from "../components/footer";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Restaurant } from "./api/types";

export default function Home({
	mainTitle,
	setMainTitle,
}: {
	mainTitle: boolean;
	setMainTitle: any;
}) {
	// Coordinates (coordinates[0] = latitude, coordinates[1] = longitude)
	const [coordinates, setCoordinates] = useState<Number[]>([]);
	// Restaurants
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
	const [currRestaurants, setCurrRestaurants] = useState<Restaurant[]>(
		restaurants.slice(0, 3)
	);
	// Boolean
	const [render, setRender] = useState<boolean>(false);

	//const [details, setDetails] = useState<Restaurant[]>([]);

	// Axios config
	var axios = require("axios");
	var config = {
		method: "get",
		url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates[0]}%2C${coordinates[1]}&radius=5000&type=restaurant&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`,
	};

	// Fetches data from Places API and stores restaurant data.
	useEffect(() => {
		if (coordinates[0] != null) {
			console.log("Latitude is " + coordinates[0]);
			console.log("Longitude is " + coordinates[1]);
			console.log(currRestaurants);
			console.log(restaurants);
			// Calls API
			axios(config)
				.then(function (response: any) {
					// Stores restaurant data
					setRestaurants(response?.data?.results);
				})
				.catch(function (error: any) {
					console.log(error);
				});
		}
	}, [coordinates]);

	useEffect(() => {
		if (restaurants[0] != null) {
			setCurrRestaurants(restaurants.slice(0, 3));
			setRender(true);
			console.log("Rendered");
		}
	}, [restaurants]);

	// On mount, ask for user coordinates
	useEffect(() => {
		if (coordinates[0] == null) {
			// Gets lat and long coordinates
			navigator.geolocation.getCurrentPosition((position) => {
				setCoordinates([
					position.coords.latitude,
					position.coords.longitude,
				]);
			});
		}
	}, []);

	// Handle food card
	const controls = useAnimationControls();

	return (
		<>
			<motion.div
				initial={{ opacity: 1 }}
				animate={mainTitle ? {} : { opacity: 0 }}
			>
				<Image
					draggable="false"
					src="/main.jpg"
					alt="main picture"
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</motion.div>
			{/* <motion.div initial={{ opacity: 1 }} animate={mainTitle ? { opacity: 0 } : { opacity: 1 }}>
        <Image src="/backgroundCard.jpg" alt="background card picture" layout="fill" objectFit="cover" objectPosition="center" />
      </motion.div> */}
			<div className="relative z-10 h-full min-h-full  transition-colors text-white">
				<div className="flex relative items-center justify-center h-full">
					<div className="absolute">
						<div className="flex flex-col items-center justify-center w-full h-full pointer-events-none">
							<div className="flex flex-col w-4/5 font-serif text-6xl font-black text-right">
								<motion.span
									initial={{ opacity: 1, zIndex: 50 }}
									animate={
										mainTitle
											? ""
											: {
													opacity: 0,
													zIndex: 0,
													x: -1000,
													transition: {
														ease: "easeInOut",
														delay: 0,
													},
											  }
									}
								>
									Food
								</motion.span>
								<motion.span
									initial={{ opacity: 1, zIndex: 50 }}
									animate={
										mainTitle
											? ""
											: {
													opacity: 0,
													zIndex: 0,
													x: -1000,
													transition: {
														ease: "easeInOut",
														delay: 0.05,
													},
											  }
									}
								>
									Swipe
								</motion.span>
								<motion.span
									initial={{ opacity: 1, zIndex: 50 }}
									animate={
										mainTitle
											? ""
											: {
													opacity: 0,
													zIndex: 0,
													x: -1000,
													transition: {
														ease: "easeInOut",
														delay: 0.1,
													},
											  }
									}
									className="mt-5 text-xl"
								>
									A food-based website built to expand your
									palette.
								</motion.span>
								<motion.div
									initial={{ opacity: 1, zIndex: 50 }}
									animate={
										mainTitle
											? ""
											: {
													opacity: 0,
													zIndex: 0,
													x: -1000,
													transition: {
														ease: "easeInOut",
														delay: 0.15,
													},
											  }
									}
									className="flex justify-end w-full mt-5"
								>
									<button
										className="flex justify-center p-3 text-lg text-black bg-white rounded-full w-36"
										onClick={() => {
											setMainTitle(false);
										}}
									>
										Begin
									</button>
								</motion.div>
							</div>
						</div>
					</div>
					<div className="absolute w-2/5">
						<motion.div
							initial={{ opacity: 0, zIndex: 0 }}
							animate={
								mainTitle
									? ""
									: {
											opacity: 1,
											zIndex: 50,
											transition: { delay: 0.5 },
									  }
							}
						>
							{render
								? restaurants?.map((restaurant) => (
										<motion.div
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
											initial={{ scale: 1.0 }}
											className="absolute flex justify-center items-center h-full w-full"
										>
											<FoodCard restaurant={restaurant} />
										</motion.div>
								  ))
								: null}
						</motion.div>
					</div>
				</div>
				{mainTitle ? <></> : <Footer />}
			</div>
		</>
	);
}
