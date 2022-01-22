import React from 'react'

const AppContext = React.createContext(null)

export function ContextWrapper({ children }) {
	const [input, setInput] = React.useState(null)

	let sharedState: object = {
		input: input,
		setInput: setInput,
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
