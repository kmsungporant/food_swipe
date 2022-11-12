// Interface type for "NearbySearch" API Call
// export interface NearbySearchResponse {
// 	error_message: string;
// 	html_attributions: string[];
// 	results: Restaurant[];
// 	status: string;
// }

// Interface type for "Resturant" object
export interface Restaurant {
	business_status: string;
	current_opening_hours: {
		open_now: boolean;
		// more??
	};
	delivery: boolean;
	dine_in: boolean;
	editorial_summary: {
		overview: string;
		//more ??
	};
	formatted_address: string;
	formatted_phone_number: string;
	name: string;
	opening_hours: {
		open_now: boolean;
		// more??
	};
	photos: {
		height: number;
		/* Reference used to call reference API for photos */
		photo_reference: string;
		width: number;
	}[];
	price_level: number;
	rating: number;
	user_ratings_total: number;
	website: string;
}
