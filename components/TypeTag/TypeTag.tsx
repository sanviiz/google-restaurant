import React from 'react'

function TypeTag({ tag }) {
	return (
		<>
			<div className="px-2.5 py-0.5 bg-slate-400 rounded-full w-max text-xs text-white">
				{tag.replace(/_/g, ' ').toUpperCase()}
			</div>
		</>
	)
}

export default TypeTag
