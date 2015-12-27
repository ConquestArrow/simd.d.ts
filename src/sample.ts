"use strict";
import "../lib/ecmascript_simd"

/*
SIMD.Uint16x8[Symbol.toStringTag] = () =>{
	return "uint16x8"
}*/
Object.defineProperty(
	SIMD.Uint16x8,
	Symbol.toStringTag,
	{
		get:()=>"uint16x8"
	})

console.log(`typeof SIMD: ${typeof SIMD}`)
//console.log(`SIMD: ${}`)
Object.getOwnPropertyNames(SIMD)
	.map((v,i,a)=>{
		const s = SIMD[v].splat(0);
		console.log(`${v}: ${typeof s}`)
	})



//var added = SIMD.Int32x4(1,1,1,1) + SIMD.Int32x4(2,2,2,2);

var x = SIMD.Float32x4(0.1, 1.2, 3.2, 3.2);
//console.log(typeof x);	//"float32x4"

function checkSIMD(type:string){
	//console.log( `SIMD[${type}]: `+typeof SIMD[type])
}
const types = [
	"Int8x16",
	"Int16x8",
	"Int32x4",
	"Uint8x16",
	"Uint16x8",
	"Uint32x4",
	"Float32x4",
	"Bool8x16",
	"Bool16x8",
	"Bool32x4"
]
types.map((v,i,a)=>{
	checkSIMD(v)
})

//store polyfill for Nodejs v5.3
SIMD.Int32x4.store = function store(
	tarray:Uint8Array| Uint8ClampedArray| Int16Array| Uint16Array| Int32Array| Uint32Array| Float32Array| Float64Array,
	index: number,
	value: SIMD.Int32x4
): SIMD.Int32x4{
	//value = SIMD.Int32x4.check(value);
	
	//*
	const LEN = 4;
	for(let i=0|0; (i|0)<(LEN|0); i++){
		tarray[i+index] = SIMD.Int32x4.extractLane(value,i)//a[i];
	}	//4827.403ms
	//*/
	/*
	tarray.set(
		new Int32Array([
			SIMD.Int32x4.extractLane(value,0),
			SIMD.Int32x4.extractLane(value,1),
			SIMD.Int32x4.extractLane(value,2),
			SIMD.Int32x4.extractLane(value,3),
		])
		,index);	//5050.529ms
	*/
	return value;
}

//console.log(Object.getOwnPropertyNames(SIMD.Int32x4))

/*=========

=========*/
{
let s1 = SIMD.Float32x4(1, 2, 3, 4);
let s2 = SIMD.Float32x4(5, 6, 7, 8);

let mask = SIMD.Float32x4.lessThan(s1, SIMD.Float32x4.splat(3));
// Int32x4[-1, -1, 0, 0]

let result = SIMD.Float32x4.select(mask, 
                                   SIMD.Float32x4.mul(s1, s2),
                                   SIMD.Float32x4.add(s1, s2));

console.log(result); // Float32x4[5, 12, 10, 12]
}

var b16x8 = SIMD.Bool16x8();
console.log(`b18x8_1: ${b16x8}`)
b16x8 = SIMD.Bool16x8(true,false,true)
console.log(`b18x8_2: ${b16x8}`)
console.log((<any>b16x8).length)
console.log(Object.getOwnPropertyNames(b16x8))

const bx:typeof SIMD.Bool16x8 = SIMD.Bool16x8;

{

	let a = new Uint8Array(16*100)
	let b = new Uint8Array(16*100)
	let c = new Uint8Array(16*100)

	//const {load, store, add} = SIMD.Uint8x16
	const load = SIMD.Uint8x16.load;
	const store = SIMD.Uint8x16.store;
	const add = SIMD.Uint8x16.add;
	
	for (let i = 0; i < c.length; i += 16) {
		store( c, i, add( load(a, i), load(b, i) ) )
	}

}

{
	function m<T extends SIMD.Int32x4>(str:TemplateStringsArray, a:T, b:T):T{
		//console.log(`args:${JSON.stringify(arguments)}`)
		
		
		//const sType = SIMD.Int32x4;//SIMD[(typeof args[1]).replace(/^(.)(.+)$/, "$1".toUpperCase()+"$2")] 
		
		const ctor = a.constructor;
		
		switch(str[1].replace(" ","")){
			case "+":
				return <T>ctor.add(a, b);
			case "-":
				return <T>ctor.sub(a, b);
			case "*":
				return <T>ctor.mul(a, b);
			case "/":
				break;
		}
		
		//return 
	}
	
	let a = SIMD.Int32x4.splat(1);
	let b = SIMD.Int32x4.splat(2);
	
	let c = m`${a}-${b}`
	console.log(`c:${c}`)
	console.log("a+a+b:"+m`${a}+${ m`${a}+${b}` }`)
	
	console.log(`length:${SIMD.Int8x16.splat(16).constructor.length}`)
	//polyfill can't get name
	console.log(`name: ${SIMD.Int16x8.name}`)
	console.log(SIMD.Int16x8.splat(1).constructor.splat(0).toString());
	
	console.log("instanceof Int32x4:",a instanceof SIMD.Int32x4)
	console.log("instanceof Uint32x4:",a instanceof SIMD.Uint32x4)
}


/*=========
performance
=========*/

const MAX = 10000000


const NAME_NORMAL = "normal array with for statement"
console.time(NAME_NORMAL)
let a = new Array(MAX)
for(let i=0; i<MAX; i++){
	a[i] = i;
}
console.timeEnd(NAME_NORMAL)

const NAME_TYPED = "typed array with for statement"
console.time(NAME_TYPED)
let b = new Uint32Array(MAX)
for(let i=0; i<MAX; i++){
	b[i] = i;
}
console.timeEnd(NAME_TYPED)

//console.log(SIMD.Int32x4.store)

const NAME_SIMD = "use simd"
console.time(NAME_SIMD)
let c = new Int32Array(MAX)
const len = (MAX/4)|0
const mod = MAX%4
const store = SIMD.Int32x4.store;
for(let i=0; i<len; i++){
	store(
		c,
		i*4,
		SIMD.Int32x4(
			i*4+0,
			i*4+1,
			i*4+2,
			i*4+3
		)
	);
}
if(mod!==0){
	SIMD.Int32x4["store"+mod](
		c,
		MAX-mod,
		SIMD.Int32x4(
			MAX-3,
			MAX-2,
			MAX-1,
			MAX-0
		)
	)
}
console.timeEnd(NAME_SIMD)

console.log(c.subarray(0,20))
