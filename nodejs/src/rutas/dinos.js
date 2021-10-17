const express = require('express');
const router = express();

const path = require("path");


router.get('/', (req , res) => {
	
	res.sendFile(path.join(__dirname+'/../../dinosaurios.html'));
})


router.get('/:id', (req, res) => {
	var id = req.params.id;
	switch(id){
		case "1":
		res.sendFile(path.join(__dirname+'/braquiosaurio.html'));
		break;
		case "2":
		res.sendFile(path.join(__dirname+'/triceratops.html'));
		break;
		case "3":
		res.sendFile(path.join(__dirname+'/estegosaurio.html'));
		break;
		case "4":
		res.sendFile(path.join(__dirname+'/t-rex.html'));
		break;
		case "5":
		res.sendFile(path.join(__dirname+'/velociraptor.html'));
		break;
	}
})

module.exports = router;