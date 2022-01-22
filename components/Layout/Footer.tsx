import React from 'react'

const Footer = () => {
	return (
		<>
			<footer
				className={`w-full border-y border-gray-400 px-6 py-4 fixed bottom-0 bg-white sm:text-left text-center`}
			>
				<span className="sm:text-lg text-base font-medium">
					Copyright © {new Date().getFullYear()} Pakkaphong Akkabut
					All right reserved.
				</span>
			</footer>
		</>
	)
}

export default Footer
