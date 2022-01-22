import React from 'react'

const Footer = () => {
	return (
		<>
			<footer
				className={`w-full border-y border-gray-400 text-left px-6 py-4 fixed bottom-0 bg-white`}
			>
				<span className="text-lg font-medium">
					Copyright © {new Date().getFullYear()} Pakkaphong Akkabut
					All right reserved.
				</span>
			</footer>
		</>
	)
}

export default Footer
