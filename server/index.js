const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require("path");
const axios = require("axios");
const app = express();
const port = 3002;

const client = process.env.FOURSQUARE_CLIENT;
const secret = process.env.FOURSQUARE_SECRET;

const buildQuery = (query) => {
	let queryString = '';
	Object.keys(query).forEach((key) => {
		if (query[key]) {
			queryString += `&${key}=${query[key]}`;
		}
	});
	return queryString;
};

app.get('/test', (req, res) => res.send({ test: 'up and running' }));

app.get('/api/explore', async (req, res) => {
	try {
		const fullUrl = `https://api.foursquare.com/v2/venues/explore?client_id=${client}&client_secret=${secret}&v=20200130`;
		const requestQuery = buildQuery(req.query);
		const urlWithQuery = fullUrl + requestQuery;
		const response = await axios({
			method: 'get',
			url: urlWithQuery
		});
		res.setHeader('Content-Type', 'application/json');
		res.status(200).send(response.data);
	} catch (error) {
		res.send({ ERROR: error });
	}
});

app.use(cors());

app.listen(port, () => console.log(`Running Proxy on port ${port}`));
