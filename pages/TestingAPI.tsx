import { useEffect, useState } from "react";
import { Restaurant } from "./api/types";

// TODO: Work on photo api and implementation of data
export default function () {
	// Coordinates (coordinates[0] = latitude, coordinates[1] = longitude)
	const [coordinates, setCoordinates] = useState<Number[]>([]);
	// Restaurant Data
	const [restaurants, setRestaurants] = useState<Restaurant[]>([]);

	// Axios config
	var axios = require("axios");
	var config = {
		method: "get",
		url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates[0]}%2C${coordinates[1]}&radius=1000&type=restaurant&key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
	};

	// Fetches data from Places API and stores restaurant data.
	useEffect(() => {
		if (coordinates[0] != null) {
			console.log("Latitude is " + coordinates[0]);
			console.log("Longitude is " + coordinates[1]);
			// Calls API
			axios(config)
				.then(function (response: any) {
					// debugging purposes
					console.log(JSON.stringify(response.data, undefined, 4));
					// Stores restaurant data
					setRestaurants(response?.data?.results);
				})
				.catch(function (error: any) {
					console.log(error);
				});
		}
	}, [coordinates]);

	// handle click
	const handleClick = () => {
		// Sets longitude and latitude
		navigator.geolocation.getCurrentPosition((position) => {
			setCoordinates([
				position.coords.latitude,
				position.coords.longitude,
			]);
		});
	};

	// Button
	const button = () => {
		return (
			<button
				className={"h-[5rem] w-[5rem] bg-white text-black"}
				onClick={() => {
					handleClick();
				}}
			>
				hi
			</button>
		);
	};

	return (
		<div className="flex h-full w-full items-center justify-center">
			{button()}
		</div>
	);
}
