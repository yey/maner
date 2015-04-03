var Lib = require('../Lib/Lib.js');

var source = [
{
	"_id": 4030677907581876,
	"cv": 0,
	"g": 23,
	"i": 13005,
	"ll": 2,
	"lw": 10,
	"n": "Markodude",
	"p": 10,
	"p0": 0,
	"p1": 0,
	"rf": 1,
	"s": 0,
	"sc": 18016,
	"t": 1425294002,
	"t0": 1,
	"t1": 5,
	"w": 6,
	"ww": 10,
	"ww0": 10,
	"ww1": 10
},{
	"_id": 4188565200664400,
	"cv": 0,
	"g": 23,
	"i": 13013,
	"ll": 1,
	"lw": 11,
	"n": "sin.sin",
	"p": 13,
	"p0": 1,
	"p1": 1,
	"rf": 1,
	"s": 0,
	"sc": 22649,
	"t": 1425294002,
	"t0": 0,
	"t1": 4,
	"w": 6,
	"ww": 7,
	"ww0": 8,
	"ww1": 9
}];
Lib.rankData(source, {p:-1,ww:-1,sc:-1});
console.log(JSON.stringify(source));