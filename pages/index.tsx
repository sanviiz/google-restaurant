import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppContext } from '@hooks/context'
import { getRestaurants } from '@services/getRestaurants'
import RestaurantCard from '@components/RestaurantCard/RestaurantCard'

const Home: NextPage = () => {
	const [renderData, setRenderData] = React.useState(null)
	const context = useAppContext()

	const fetchingData = async () => {
		setRenderData(null)
		const res = await getRestaurants(context.input)
		setRenderData(res?.data?.results)
	}

	React.useEffect(() => {
		fetchingData()
	}, [context.input])

	return (
		<>
			<Head>
				<title>Google Restaurant</title>
				<meta
					name="description"
					content="Search restaurant with google api."
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="text-center">
				{renderData ? (
					renderData?.map((record: Object, index: number) => (
						<div className="mb-6" key={index}>
							<RestaurantCard data={record} />
						</div>
					))
				) : (
					<span className="text-3xl font-semibold">Loading...</span>
				)}
			</div>
		</>
	)
}

export default Home
