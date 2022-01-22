import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
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
