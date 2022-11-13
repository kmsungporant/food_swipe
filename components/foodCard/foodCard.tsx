import { BiDollar } from "react-icons/bi"

export default function FoodCard({ restaurant }: { restaurant: any }, { information } : { information :any }) {

    function getImage() {
        return (`https://maps.googleapis.com/maps/api/place/photo?maxwidth=${restaurant.photos![0].width}&photo_reference=${restaurant.photos![0].photo_reference}&key=${process.env.NEXT_PUBLIC_GOOGLE_API_KEY}`);
    }


    return (
        <>
            <div className="">
                <div className="flex flex-col w-full h-full p-3 bg-black rounded-3xl gap-y-2 ">
                    <span className="flex justify-center text-3xl font-black ">{restaurant.name}</span>
                    <div className="flex justify-start w-full overflow-hidden rounded-3xl">
                        <img draggable="false" height="100%" width="100%" src={getImage()} />
                    </div>
                    <span>
                        Now {restaurant.opening_hours.open_now ? <span className="font-black text-green-700 underline">Opened</span> : <span className="font-black text-red-700 underline">Closed</span>}
                    </span>
                    <span>
                        Rating: {restaurant.rating} out of 5
                    </span>
                    <span className="flex flex-row text-xl text-yellow-500">
                        {Array(restaurant.price_level).fill(<BiDollar className="-ml-1" />)}
                    </span>
                    <div className="flex flex-col justify-between ">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, atque ipsam vel magnam ipsa sequi iusto saepe? Quisquam, excepturi voluptatem, voluptate debitis repellat fugiat eaque itaque minima esse deserunt consequatur.</p>
                        <span>
                            
                        </span>
                    </div>
                </div>

            </div>

        </>
    )
}