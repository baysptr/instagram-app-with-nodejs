var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

ig.use({
	access_token: '2635238345.1677ed0.817d99668562449bb810e48c1e8ac382'
});

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.get('/', function(req, res){
	ig.user_self_media_recent(function(err, medias, pagination, remaining, limit){
		res.render('pages/index', { grams: medias });
	});
});

app.listen(8080);
console.log('App has started! up on host http://localhost:8080/');