import { motion, MotionConfig, useAnimationControls } from "framer-motion";
import { BiDollar } from "react-icons/bi";
import { Restaurant } from "../../pages/api/types";

export default function FoodCard({ restaurant }: { restaurant: Restaurant }) {
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
		}
		// Swiping left
		else if (info?.offset?.x < -200) {
			console.log("left");
			controls.start({
				x: -2000,
				transition: { duration: 0.5 },
			});
		} else {
			controls.start({ x: 0 });
		}
	};

	function getImage() {
		if (restaurant != null) {
			return `https://maps.googleapis.com/maps/api/place/photo?maxwidth=${
				restaurant.photos![0]?.width
			}&photo_reference=${restaurant?.photos![0]?.photo_reference}&key=${
				process.env.NEXT_PUBLIC_GOOGLE_API_KEY
			}`;
		}
	}

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
							<div className="h-1/2 flex relative mb-5">
								<div className="flex justify-center h-full items-center overflow-hidden object-fill rounded-3xl">
									<img
										draggable="false"
										height="100%"
										width="100%"
										src={getImage()}
									/>
								</div>
							</div>
							<div className="flex flex-col gap-y-2">
								<span className="h-full  text-3xl font-black w-full ">
									{restaurant?.name}
								</span>
								<span className="h-[2px] bg-black" />
								<span>
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
								<span>
									Rating: {restaurant?.rating} out of 5
								</span>
								<span className="text-xl flex flex-row text-yellow-500 items-center">
									<span className="text-lg">
										Price Range:
									</span>{" "}
									{Array(restaurant?.price_level).fill(
										<BiDollar />
									)}
								</span>
								<div className="flex justify-between flex-col ">
									<p>
										Lorem ipsum dolor sit amet, consectetur
										adipisicing elit. Ratione, atque ipsam
										vel magnam ipsa sequi iusto saepe?
										Quisquam, excepturi voluptatem,
										voluptate debitis repellat fugiat eaque
										itaque minima esse deserunt consequatur.
									</p>
									<span></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	);
}
