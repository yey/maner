var EventEmitter = require('events').EventEmitter;
var war = new EventEmitter();
var cardExp = new EventEmitter();
var cardExp2 = new EventEmitter();

function init(){
	addSkillToObj(cardExp, criticalStrike);
	addSkillToObj(cardExp, criticalStrike);
	addSkillToObj(cardExp, criticalStrike);
	addSkillToObj(cardExp2, dodge);
	addSkillToObj(cardExp2, block);
	addSkillToObj(cardExp2, criticalStrike);
	var target1 = {
		n:"fucker",
		hp: 2000,
		at: 800,
		skill:cardExp
	};
	var target2 = {
		n:"lover",
		hp: 2000,
		at: 800,
		skill:cardExp2
	}

	fight(target1, target2);
}

function clean(target1, target2){
	delete target1.uat;
	delete target2.udodge;
	delete target2.uhp;

	return;
}

function fight(target1, target2){
	if (target1.hp <= 0) {
		war.emit('end', target2);
	}else if (target2.hp <= 0) {
		war.emit('end', target1);
	};

	//before at
	target1.uat = target1.at;
	target1.skill.emit("beforeFight", target1, target2);

	target2.udodge = false;
	target2.uhp = target2.hp;
	target2.skill.emit("beforeHurt", target1, target2);

	target2.skill.emit("whenHurt", target1, target2);
	if (target2.udodge) {
		target2.uhp -= 0;
	}else{
		target2.uhp -= target1.uat;
	}
	target2.hp = target2.uhp;
console.log(JSON.stringify(target1));
console.log(JSON.stringify(target2));
console.log("----------");
	clean(target1, target2);

	fight(target2, target1);
}

/////////////////////////////////

function addSkillToObj(obj, skill){
	obj.on(skill.trigger, skill.effect);
}
//skill list
var criticalStrike = {
	trigger:"beforeFight",
	effect:function(target1, target2){
		target1.uat += Math.round((Math.random()<0.5)?target1.at*0.5:0);
	},
};
var dodge = {
	trigger:"beforeHurt",
	effect:function(target1, target2){
		target2.udodge = target2.udodge || Math.round((Math.random()<0.5)?true:false);
	},
};
var block = {
	trigger:"whenHurt",
	effect:function(target1, target2){
		target1.uat -= 200;
	},
};
function makeTestSkill(lv){
	//criticalStrike
	var skill = {
		trigger:"beforeTest",
		basic:0,
		step:20,
		//todo: get tlist1 & tlist2
	};
	var attr = skill.basic + skill.step*lv;
	skill.effect = function(tlist1, tlist2){
		for (var i = 0; i < tlist1.length; i++) {
			tlist1[i].uat += Math.round((Math.random()<0.5)?tlist1[i].at*(attr/100):0);
		};
	};
	return skill;
}

function test(){
	addSkillToObj(cardExp, criticalStrike);
	var target1 = {
		n:"fucker",
		hp: 2000,
		at: 800,
		skill:cardExp
	};
	//before at
	target1.uat = target1.at;
	target1.skill.emit("beforeFight", target1, target2);
}

/////////////////////////////////

war.on('begin', init);
war.on('end', function(target){
	console.log(target.n+":win");
	process.exit(0);
});

//war.emit('begin');
war.on('test', test);
war.emit('test');

/**
 * result:
 * 不同的对象实例之间，事件即使同名也是各自分割的。
 * 循环调用（接受信号处理后又发送同一信号，且不收敛）会导致错误：RangeError: Maximum call stack size exceeded
 */