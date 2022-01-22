import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useAppContext } from '@hooks/context'
import type { Libraries } from '@helper/types'

const libraries: Libraries = ['places']

function SearchInput() {
	const inputEl = React.useRef(null)
	const context = useAppContext()

	const onKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			context.setInput(inputEl.current.value)
			return false
		}
	}

	return (
		<>
			<div className="relative flex items-center justify-end">
				<input
					type="text"
					ref={inputEl}
					onKeyPress={onKeypress}
					className={`outline-none border border-gray-400 pl-2 pr-7 py-0.5 xs:w-72 w-60 truncate`}
					placeholder=""
				/>
				<VscSearch
					className="absolute block mr-2 text-blue-500 cursor-pointer"
					onClick={() => context.setInput(inputEl.current.value)}
				/>
			</div>
		</>
	)
}

export default SearchInput
