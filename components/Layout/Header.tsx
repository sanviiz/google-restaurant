import React from 'react'
import SearchInput from '@components/SearchInput/SearchInput'

const LogoGroup = () => {
	return (
		<>
			<div className="flex items-center">
				<img
					src="/images/google-logo.png"
					alt="website-logo"
					className="w-20 mr-4 inline"
				/>
				<span className="lg:text-3xl text-2xl font-medium">
					Google Restaurant
				</span>
			</div>
		</>
	)
}

const SearchGroup = () => {
	return (
		<>
			<div className="sm:mt-0 mt-6 sm:text-left text-center">
				<span className="text-lg font-medium block mb-1">Search</span>
				<SearchInput />
			</div>
		</>
	)
}

const Header = () => {
	return (
		<>
			<header
				className={`w-full border-y border-gray-400 sticky top-0 flex sm:flex-row flex-col p-6 justify-between items-center bg-white z-10`}
			>
				<LogoGroup />
				<SearchGroup />
			</header>
		</>
	)
}

export default Header
