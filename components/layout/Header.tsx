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
				<span className="text-3xl font-medium">Google Restaurant</span>
			</div>
		</>
	)
}

const SearchGroup = () => {
	return (
		<>
			<div>
				<span className="text-lg font-medium block mb-1">Search</span>
				<SearchInput />
			</div>
		</>
	)
}

const Header = () => {
	return (
		<>
			<div
				className={`w-full border-y border-gray-400 sticky top-0 flex p-6 justify-between items-center bg-white`}
			>
				<LogoGroup />
				<SearchGroup />
			</div>
		</>
	)
}

export default Header
