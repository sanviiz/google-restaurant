import React from 'react'

const AppContext = React.createContext(null)

export function ContextWrapper({ children }) {
	const [selectedPlaceID, setSelectedPlaceID] = React.useState(null)

	let sharedState: object = {
		selectedPlaceID: selectedPlaceID,
		setSelectedPlaceID: setSelectedPlaceID,
	}

	return (
		<AppContext.Provider value={sharedState}>
			{children}
		</AppContext.Provider>
	)
}

export function useAppContext() {
	return React.useContext(AppContext)
}
