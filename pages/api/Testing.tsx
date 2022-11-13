import { useEffect, useState } from "react";
import { Restaurant } from "./types";
import axios from 'axios'

export default function Testing() {

    const [details, setDetails] = useState<String[]>([])

    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=ChIJN1t_tDeuEmsRUsoyG83frY4&fields=name,website,formatted_phone_number&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`;
  
    return (
        <div>
            
        </div>
    );   

}