import React from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useAppContext } from '@hooks/context'
import { getRestaurants } from '@services/getRestaurants'

const Home: NextPage = () => {
	const context = useAppContext()

	React.useEffect(() => {
		;(async () => {
			const res = await getRestaurants(context.input)
			console.log(res)
		})()
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

			<div className="text-red-500 text-center h-screen">Content</div>
		</>
	)
}

export default Home
