import React from 'react'
import { VscSearch } from 'react-icons/vsc'
import { useLoadScript, Autocomplete } from '@react-google-maps/api'
import { useAppContext } from '@hooks/state'
import type { Libraries } from '@helper/types'

const scriptOptions = {
	googleMapsApiKey: process.env.NEXT_PUBLIC_API_KEY as string,
	libraries: ['places'] as Libraries,
}

function SearchInput() {
	const [autocomplete, setAutocomplete] = React.useState(null)
	const { isLoaded } = useLoadScript(scriptOptions)
	const inputEl = React.useRef(null)
	const context = useAppContext()

	const onKeypress = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			e.preventDefault()
			return false
		}
	}

	const onLoad = (autocompleteObj: object) => {
		setAutocomplete(autocompleteObj)
	}

	const onPlaceChanged = () => {
		if (autocomplete) {
			const place = autocomplete.getPlace()
			if ('place_id' in place) {
				context.setSelectedPlaceID(place.place_id)
			}
		}
	}

	return (
		<>
			{isLoaded && (
				<div className="relative flex items-center justify-end">
					<Autocomplete
						onLoad={onLoad}
						fields={['place_id']}
						onPlaceChanged={onPlaceChanged}
					>
						<input
							type="text"
							ref={inputEl}
							onKeyPress={onKeypress}
							className={`outline-none border border-gray-400 pl-2 pr-7 py-0.5 w-72 truncate`}
							placeholder=""
						/>
					</Autocomplete>
					<VscSearch className="absolute block mr-2 text-blue-500" />
				</div>
			)}
		</>
	)
}

export default SearchInput
