const axios = require('axios').default
const key: string = process.env.NEXT_PUBLIC_API_KEY

export function getRestaurants(query: string) {
	return axios.post('/api/getRestaurants', {
		params: {
			query: query,
			key: key,
			type: 'restaurant',
		},
	})
}
