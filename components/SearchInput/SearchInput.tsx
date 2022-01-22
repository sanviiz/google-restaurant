import React from 'react'
import { VscSearch } from 'react-icons/vsc'

function SearchInput() {
	const [input, setInput] = React.useState('')

	return (
		<>
			<div className="relative flex items-center justify-end">
				<input
					type="text"
					className={`outline-none border border-gray-400 px-2 py-0.5 w-60`}
					onChange={(e) => setInput(e.target.value)}
				/>
				<VscSearch className="absolute block mr-2 text-blue-500" />
			</div>
		</>
	)
}

export default SearchInput
