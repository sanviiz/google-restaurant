import React from 'react'
import Header from '@components/Layout/Header'
import Footer from '@components/Layout/Footer'

const Layout = ({ children }) => {
	return (
		<>
			<div className="font-prompt antialiased">
				<Header />
				<div className="container mx-auto pt-6 pb-20">{children}</div>
				<Footer />
			</div>
		</>
	)
}

export default Layout
