var EventEmitter = require('events').EventEmitter;
var cell = new EventEmitter();
var Lib = require('../Lib/Lib.js');
var hand = require('./hand.js');
var mem = require('./memory.js').data;

cell.on('activityBossBegin',function(){
	//no boss info now
	cell.emit('group', 'check', ['boss']);
});

cell.on('group',function(type,args){
	switch(type){
		case 'check':{
			
			break;
		}
		case 'change':{
			break;
		}
		default:{
			cell.emit('Error','invalid args');
		}
	}
});
cell.on('activityBossReady',function(){
	//part of card group, but ok
	if (mem.defaultGroup != mem.groupId[0]) {
		hand.changeGroup(mem.groupId[0], function(res){
			if (res == 200) {
				cell.emit('activityBossAllReady');
			}else{
				cell.emit('Error',res);
			}
		});
	}else{
		cell.emit('activityBossAllReady');
	}
});

function dida(){
	var date = Lib.getDates('h.m');
	if ((!mem.isBossNow) && (date.m == 0) && (Lib.inIt(date.h, mem.bossTime))) {
		mem.isBossNow = true;
		cell.emit('activityBossBegin');
	}else{
		setTimeout(dida, 50);
	}
}