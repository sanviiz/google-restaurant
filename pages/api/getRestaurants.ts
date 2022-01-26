const axios = require('axios').default
const url: string = `https://maps.googleapis.com/maps/api/place/textsearch/json`

export default async function handler(req: any, res: any) {
	try {
		const data = await axios.get(url, {
			params: req.body.params,
		})
		return res.json(data.data)
	} catch (error) {
		console.error(error)
		return error.message
	}
}
