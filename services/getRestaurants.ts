import { useAppContext } from '@hooks/context'

const axios = require('axios').default
const url: string = `https://maps.googleapis.com/maps/api/place/textsearch/json`
const key: string = process.env.NEXT_PUBLIC_API_KEY

export async function getRestaurants(query: string) {
	axios
		.get(url, {
			headers: {},
			params: {
				query: query,
				key: key,
				type: 'restaurant',
			},
		})
		.then(function (response: JSON) {
			return response
		})
		.catch(function (error: JSON) {
			return error
		})
}
