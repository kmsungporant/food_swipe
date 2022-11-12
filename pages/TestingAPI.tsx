import { useEffect, useState } from "react";
import Geocode from "react-geocode";
import Axios from "axios";


export default function () {
    // Address
    const [address, setAddress] = useState("");
    // Coordinates (coordinates[0] = latitude, coordinates[1] = longitude)
    const [coordinates, setCoordinates] = useState<Number[]>([])

    // Prints coordinates when allowed and clicked on button
    useEffect(() => {
        if (coordinates[0] != null) {
            console.log("Latitude is " + coordinates[0]);
            console.log("Longitude is " + coordinates[1]);

            // Fetches data given longitude and latitude
            axios(config).then(function (response: any) {
                console.log(JSON.stringify(response.data, undefined, 4));
            }).catch(function (error: any) {
                console.log(error);
            });
        }
    }, [coordinates]);


    // Fetch Data
    var axios = require('axios')
    var config = {
        method: 'get',
        url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${coordinates[0]}%2C${coordinates[1]}&radius=1000&type=restaurant&key=AIzaSyDr2vMKcb2DPn4-juAPBgCmux6QcjqdG-4`,
    };

    // handle click
    const handleClick = () => {
        // Sets longitude and latitude
        navigator.geolocation.getCurrentPosition((position) => {
            setCoordinates([position.coords.latitude, position.coords.longitude]);
        });
    };

    // Button
    const button = () => {
        return (<button className={"h-[5rem] w-[5rem] bg-white text-black"} onClick={() => {
            handleClick();
        }}>hi</button>);
    }

    return (
        <div className="flex h-full w-full items-center justify-center">
            {button()}
        </div>
    );

}