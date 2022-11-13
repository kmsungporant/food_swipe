import RestaurantsImage from "./restaurantsImage"
import { BiDollar } from "react-icons/bi"

export default function FoodCard({ restaurants }: { restaurants: any }) {

    return (
        <>
            <div className="h-full w-2/5 bg-black flex flex-col rounded-3xl p-3 gap-y-2 ">
                <span className="text-3xl font-black flex justify-center ">{restaurants.name}</span>

                <div className=" flex justify-start w-full overflow-hidden">
                    <RestaurantsImage />
                </div>
                <span className="text-xl flex flex-row">
                    <BiDollar />
                    <BiDollar />
                </span>
                <div className="flex justify-between flex-col ">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione, atque ipsam vel magnam ipsa sequi iusto saepe? Quisquam, excepturi voluptatem, voluptate debitis repellat fugiat eaque itaque minima esse deserunt consequatur.</p>
                    <span>
                    </span>
                </div>


            </div>
        </>
    )
}