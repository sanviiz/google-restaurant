import React from 'react'
import TypeTag from '@components/TypeTag/TypeTag'
const Fade = require('react-reveal/Fade')

function RestaurantCard({ data }) {
	const imageURL = data?.photos
		? `https://maps.googleapis.com/maps/api/place/photo?maxwidth=300&photoreference=${data?.photos[0]?.photo_reference}&key=${process.env.NEXT_PUBLIC_API_KEY}`
		: `/images/no-image.png`

	return (
		<>
			<Fade bottom>
				<div className="lg:w-1/2 inline-flex gap-x-8 xs:w-4/5 w-11/12">
					<div className="flex-none sm:w-52 sm:h-52 xs:w-32 xs:h-32 h-20 w-20">
						<img
							src={imageURL}
							alt="restaurant-card-image"
							className="object-cover h-full w-full"
						/>
					</div>
					<div className="flex-auto text-left">
						<span className="text-lg font-semibold inline-block ml-4">
							{data?.name}
						</span>
						<span className="text-base font-medium inline-block my-2">
							{data?.formatted_address}
						</span>
						<div className="flex flex-wrap gap-2">
							{data?.types?.map(
								(record: string, index: number) => (
									<TypeTag tag={record} key={index} />
								)
							)}
						</div>
					</div>
				</div>
			</Fade>
		</>
	)
}

export default RestaurantCard
