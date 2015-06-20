var express = require('express');
var router = express.Router();
var arr=[],i=0,inc=0,id=0;
var msg=[[]];
var numarr=new Object();
/* GET contacts */
router.get('/:id', function(req, res, next) {
	id=req.params.id;
	res.send(arr[id]);
});
router.post('/', function(req, res, next) {
	
	arr[i]=req.body;
	i++;
	res.send((i-1).toString());
});
router.get('/messages/:id/:mid',function(req,res,next){
	id=req.params.id;
	var mid=req.params.mid;
	res.send(msg[id][mid]);
});
router.post('/messages/:im',function(req,res,next){
	var im=req.params.im;
	if(numarr[im])
		inc=numarr[im];
	else
		inc=0;
	msg[im][inc]=req.body;
	numarr[im]=inc+1;
	res.send((inc-1).toString());
});
router.put('/:id', function(req, res, next) {
	var k=req.params.id;
	var b=req.body;
	var key= Object.keys(b);
	arr[k][key]=b[key];
	res.send(arr[k]);
});
module.exports = router;