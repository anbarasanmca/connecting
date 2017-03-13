var q = require('q');
var express = require('express');
var router = express.Router();
var dateFormat = require('dateformat');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/servertime', function (req, res) {
	console.log('sssssssssssssssssssssssssssssssssssssssssssss');
	datenow = dateFormat(new Date(), "yyyy-mm-dd HH:MM:ss");
	res.send(datenow);
	res.end();
	return false;
});

router.post('/userregisteration', function(req, res){
    console.log(req.body);
	var users = require('../modules/admin');
	q.all([users.testregister(config.mysql,req, res)]).then(function(results){
		res.json({"Details":req.body});
	});

});

router.get('/getData',function(req,res)
{
	var admin = require('../modules/admin');
	q.all([admin.selectAllValue(req,config.mysql,q)]).then(function(results){
		//res.render('index', results[0][0]);
		res.json(results[0][0]);
	});
});


module.exports = router;
