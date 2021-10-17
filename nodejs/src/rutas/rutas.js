const { Router } = require('express');
const router = Router();

router.get('/', (req , res) => {
	const data = {
		"a": "0",
		"b": "0"
	};
	res.json(data)
})

module.exports = router;