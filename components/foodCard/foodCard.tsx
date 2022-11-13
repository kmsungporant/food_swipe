import { BiDollar } from "react-icons/bi"

export default function FoodCard({ restaurant }: { restaurant: any }) {

    function getImage() {
        return (`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${restaurant.photos![0].width}&photo_reference=${restaurant.photos![0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
    }


    return (
        <>
            <div className="">
                <div className="h-full w-full bg-black flex flex-col rounded-3xl p-3 gap-y-2 ">
                    <span className="text-3xl font-black flex justify-center ">{restaurant.name}</span>
                    <div className=" flex w-full justify-center  ">
                        <div className="flex w-4/5 overflow-hidden rounded-3xl">
                            <img draggable="false" height="100%" width="100%" src={getImage()} />
                        </div>
                    </div>
                    <span>
                        Now {restaurant.opening_hours.open_now ? <span className="text-green-700 font-black underline">Opened</span> : <span className="text-red-700 font-black underline">Closed</span>}
                    </span>
                    <span>
                        Rating: {restaurant.rating} out of 5
                    </span>
                    <span className="text-xl flex flex-row text-yellow-500">
                        {Array(restaurant.price_level).fill(<BiDollar className="-ml-1" />)}
                    </span>
                    <div className="flex justify-between flex-col ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, atque ipsam vel magnam ipsa sequi iusto saepe? Quisquam, excepturi voluptatem, voluptate debitis repellat fugiat eaque itaque minima esse deserunt consequatur.</p>
                        <span>
                        </span>
                    </div>
                </div>

            </div>

        </>
    )
}