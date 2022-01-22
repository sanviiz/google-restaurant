import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppContext } from '@hooks/context'
import { getRestaurants } from '@services/getRestaurants'
import RestaurantCard from '@components/RestaurantCard/RestaurantCard'
import { Code } from 'react-content-loader'

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
				{renderData?.length === 0 ? (
					<span className="sm:text-2xl text-xl font-medium">
						Not found.
					</span>
				) : renderData ? (
					renderData?.map((record: Object, index: number) => (
						<div className="mb-6" key={index}>
							<RestaurantCard data={record} />
						</div>
					))
				) : (
					<div className="lg:w-1/2 inline-block xs:w-4/5 w-11/12">
						<Code />
					</div>
				)}
			</div>
		</>
	)
}

export default Home
