const express = require('express');
const app = express();

app.use(express.static(__dirname+'/'));

app.engine('html', require('ejs').renderFile);

app.get('/', (req , res) => {
	res.render('../index.html')
})
app.set('port', process.env.PORT || 3000);

app.use('/api/dinos', require('./rutas/dinos'));

app.listen((app.get('port')), () => {
	console.log(`Server on port ${3000}`)
});


/*


app.use(express.urlencoded({extended: false}));
app.use(express.json());

//app.use('/api/dinos', require('./rutas/dinos'));

*/