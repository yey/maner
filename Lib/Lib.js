var Lib = exports;

Lib.getDates = function(filter){
	//filter:y.mo.d.w.h.m.s
	//y:yyyy
	//mo:1~12
	//d:1~31
	//w:0~6(0:Sun, 1:Monday,...)
	//h:0~23
	//m:0~59
	//s:0~59
	var res = {};
	var d = new Date();
	var fils = filter.split('.');
	if (fils.length == 0) {
		//default to get all
		res.y = d.getFullYear();
		res.mo = d.getMonth() + 1;
		res.d = d.getDate();
		res.w = d.getDay();
		res.h = d.getHours();
		res.m = d.getMinutes();
		res.s = d.getSeconds();
	}else{
		for (var i = 0; i < fils.length; i++) {
			switch(fils[i]){
				case 'y':{
					res.y = d.getFullYear();
					break;
				}
				case 'mo':{
					res.mo = d.getMonth() + 1;
					break;
				}
				case 'd':{
					res.d = d.getDate();
					break;
				}
				case 'w':{
					res.w = d.getDay();
					break;
				}
				case 'h':{
					res.h = d.getHours();
					break;
				}
				case 'm':{
					res.m = d.getMinutes();
					break;
				}
				case 's':{
					res.s = d.getSeconds();
					break;
				}
				default:{
					res = {};
				}
			}
		};
	}
	return res;
}

Lib.inIt = function(v,list){
	var found = false;
	for (var i = 0; i < list.length; i++) {
		if(list[i] === v){
			found = true;
			break;
		}
	};
	return found;
}