const axios = require('axios').default
const url: string = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json`
const key: string = process.env.NEXT_PUBLIC_API_KEY

export function getRestaurants(query: string) {
	return axios.get(url, {
		headers: {},
		params: {
			query: query,
			key: key,
			type: 'restaurant',
		},
	})
}
