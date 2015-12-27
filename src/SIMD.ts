/// <reference path="../typings/node/node.d.ts" />
/// <reference path="../simd.d.ts" />

"use strict";
//console.log("hello world!")
require("../lib/ecmascript_simd");

type Simds = SIMD.Bool16x8|SIMD.Bool32x4|SIMD.Bool8x16|SIMD.Float32x4|SIMD.Int16x8|SIMD.Int32x4|SIMD.Int8x16|SIMD.Uint16x8|SIMD.Uint32x4|SIMD.Uint8x16;

let out = "";

const header =
`// Type definitions for SIMD.js v0.9.1
// Project: http://tc39.github.io/ecmascript_simd/
// Definitions by: ConquestArrow <https://github.com/ConquestArrow>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
`
const license = 
`
/*!
License Notices:

Some API documents by Mozilla Contributors[^1] are licensed under CC BY-SA 2.5 [^2].

[^1]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SIMD
[^2]: http://creativecommons.org/licenses/by-sa/2.5/
*/

`

out += header
out += license

/*
out += `interface SIMD{\n`
for (let i of Object.getOwnPropertyNames(SIMD)) {
	out += `	${i}:SIMD.${i}Constructor;
`
}
out += `}
`
*/

out += `declare namespace SIMD{\n`

//common interface

//out += 
/*
`	
	/**
	 * common %SIMDType% interface
	 */
	//interface SIMDType{
	//}
	
//`

/*
		(...values:(number|boolean)[]):SIMDType;
		splat:(n:number|boolean)=>SIMDType;
		check:(a:any)=>SIMDType;
		extractLane:(simd:SIMDType,lane:number)=>(boolean|number);
		replaceLane:(simd:SIMDType,lane:number,value:boolean|number)=>SIMDType;
*/
	
	
	
for (let i of Object.getOwnPropertyNames(SIMD)) {
	const typeStr = i.match(/[a-zA-Z]+/)[0];
	const bitStr = i.match(/[0-9]+/)[0];
	const numStr = i.match(/[0-9]+/g)[1];
	//console.log(typeStr, bitStr, "x", numStr)

	//interface & function
	let docInterface = "";
	switch(i){
		case "Int8x16":
			docInterface = `128-bits divided into 16 lanes storing 8-bit signed integer values.`
			break;
		case "Int16x8":
			docInterface = `128-bits divided into 8 lanes storing 16-bit signed integer values.`
			break;
		case "Int32x4":
			docInterface = `128-bits divided into 4 lanes storing 32-bit signed integer values.`
			break;
		case "Uint8x16":
			docInterface = `128-bits divided into 16 lanes storing 8-bit unsigned integer values.`
			break;
		case "Uint16x8":
			docInterface = `128-bits divided into 8 lanes storing 16-bit unsigned integer values.`
			break;
		
		case "Uint32x4":
			docInterface = `128-bits divided into 4 lanes storing 32-bit unsigned integer values.`
			break;
		case "Float32x4":
			docInterface = `128-bits divided into 4 lanes storing single precision floating point values.`
			break;
		case "Bool8x16":
			docInterface = `A SIMD type representing 8 boolean values, as an intermediate value in manipulating 128-bit vectors`
			break;
		case "Bool16x8":
			docInterface = `A SIMD type representing 16 boolean values, as an intermediate value in manipulating 128-bit vectors`
			break;
		case "Bool32x4":
			docInterface = `A SIMD type representing 4 boolean values, as an intermediate value in manipulating 128-bit vectors.`
			break;
	}
	
	/** */
	out += 
`	/**
	 * ${docInterface}
	 */
`
	/*
	out += `	interface ${i}{\n`
	out += `	}\n`
	out += `	\n`
	*/
	
	out += `	interface ${i}{
		constructor: ${i}Constructor;
		valueOf(): ${i};
		toLocaleString(): string;
		toString(): string;
		/**
		 * The initial value of the @@toStringTag property is the String value "SIMD.${i}".
		 */
		[Symbol.toStringTag]: string;
		[Symbol.toPrimitive](hint: "string"): string;
		[Symbol.toPrimitive](hint: "number"): number;
		[Symbol.toPrimitive](hint: "default"): ${i};
		[Symbol.toPrimitive](hint: string): any;
	}
`;
	//out += `	}\n`
	
	//static properties
	out += `	interface ${i}Constructor{
`
	
	//constructor
	
	out += `		/**\n`
	out += `		 * SIMD.${i} constructor\n`
	for (let j1 = 0; j1 < Number(numStr); j1++) {
		out += `		 * @param s${j1} A ${bitStr}bit ${typeStr.toLowerCase()} specifying the value of the lane. \n`
	}
	out += `		 * @return SIMD.${i} object \n`
	out += `		 */\n`
	out += ``;
	
	let ctorStr = ""
	ctorStr += `(`
	
	for (let j = 0; j < Number(numStr); j++) {
		ctorStr += `s${j}?: ${typeStr === "Bool" ? "boolean" : "number"}`
		if (j !== Number(numStr) - 1) {
			ctorStr += ", "
		}
	}
	ctorStr += `): ${i};` + "\n"
	
	//out += ctorStr;
	//out += `		\n`
	
	//out += `	}\n`
	
	
	out += `		${ctorStr}\n`
	//out += `	export var ${i}: ${i};\n`
	
	//namespace
	
	let methods:{
		[name:string]:{
			doc:string,
			fn:string
		}
	} = {}; 
	
	
	//out += `	namespace ${i}{\n`
	
	//methods
	const kSIMD:Simds = <Simds>SIMD[i];
	for(let k of Object.getOwnPropertyNames(kSIMD)){
		if(typeof kSIMD[k] !== "function"){
			
			continue;
		}
		//console.log(`${k}(${kSIMD[k].arguments})`)
		
		let docCore = ""
		let fnCore = ""
		
		let doc = "";
		let docParams:{[key:string]:string} = {};
		let docRet = "";
		let params:{[key:string]:string} = {};
		let ret = "";
		switch (k) {
			case "splat":
				doc = `Creates a new SIMD.${i} data type with all lanes set to a given value.`
				params = {
					n: `${typeStr === "Bool" ? "boolean" : "number"}`
				}
				ret = `SIMD.${i}`
				break;
			case "check":
				doc = `Returns a new instance if the parameter is a valid SIMD data type and the same as ${i}. Throws a TypeError otherwise.`
				params = {
					a: `SIMD.${i}`
				}
				ret = `SIMD.${i}`;
				break;
			case "swizzle":
				doc = `Returns a new instance with the lane values swizzled.`
				params = {
					a: `SIMD.${i}`
				}
				for(let l=0;l<Number(numStr);l++){
					params[`l${l+1}`] = `${typeStr === "Bool" ? "boolean" : "number"}`;
				}
				ret = `SIMD.${i}`
				break;
			case "shuffle":
				doc = `Returns a new instance with the lane values shuffled.`
				params = {
					a: `SIMD.${i}`,
					b: `SIMD.${i}`
				}
				for(let l=0;l<Number(numStr);l++){
					params[`l${l+1}`] = `${typeStr === "Bool" ? "boolean" : "number"}`;
				}
				ret = `SIMD.${i}`
				break;
			case "extractLane":
				doc = `Returns the value of the given lane.`
				params = {
					simd: `SIMD.${i}`,
					lane: `number`
				}
				docParams = {
					simd:`An instance of a corresponding SIMD type.`,
					lane:`An index number for which lane to extract.`
				}
				ret = `${typeStr === "Bool" ? "boolean" : "number"}`
				docRet = `The value of the extracted lane.`
				break;
			case "replaceLane":
				doc = `Returns a new instance with the given lane value replaced.`
				params = {
					simd:`SIMD.${i}`,
					lane:`number`,
					value:`${typeStr === "Bool" ? "boolean" : "number"}`
				}
				docParams = {
					simd:`An instance of a corresponding SIMD type.`,
					index: `An index number for which lane to replace.`,
					value:`A new value to be used for the lane.`
				}
				ret = `SIMD.${i}`
				docRet = `A new SIMD data type with the given lane value replaced.`
				break;
			case "select":
				doc = `Returns a new instance with the lane values being a mix of the lanes depending on the selector mask.`
				params = {
					selector:`SIMD.Bool${bitStr}x${numStr}`,
					a:`SIMD.${i}`,
					b:`SIMD.${i}`
				}
				docParams = {
					selector:`the selector mask.`,
					a:`If the selector mask lane is \`true\`, pick the corresponding lane value from here.`,
					b: `If the selector mask lane is \`false\`, pick the corresponding lane value from here.
`
				}
				ret = `SIMD.${i}`
				
				break;
			//safety +/- methods
			case "addSaturate":
			case "subSaturate":
				params = {
					a:`SIMD.${i}`,
					b:`SIMD.${i}`
				}
				ret = `SIMD.${i}`
				break;
			
			//shifter methods
			case "shiftLeftByScalar":
			case "shiftRightByScalar":
				{
				const dir = k==="shiftLeftByScalar"?"left":"right";
				const op = k==="shiftLeftByScalar"?"\`a << bits\`":"\`a >> bits\` or \`a >>> bits\`";
				doc = `Returns a new instance with the lane values shifted ${dir} by a given bit count (${op}).`
				params ={
					a:`SIMD.${i}`,
					bits:`number`
				}
				docParams = {
					a:`An instance of a SIMD type.`,
					bits:`Bit count to shift by.`
				}
				ret = `SIMD.${i}`
				docRet = `A new corresponding SIMD data type with the lane values shifted ${dir} by a given bit count (${op}).`
				}
				break;
			case "allTrue":
			case "anyTrue":
				{
				const anyOrAll = k.split("True")[0];
				
				doc = `If ${anyOrAll} lane values are \`true\`, return \`true\`.`
				params = {
					a:`SIMD.${i}`
				}
				ret = `boolean`;
				}
				break;
			//load lanes from TypedArray methods
			case "load":
			case "load1":
			case "load2":
			case "load3":
				{
				let loads = ``;
				if(/load[1-3]/.test(k)){
					loads = k.split("load")[1]
				}else{
					loads = "all"
				}
				doc = `Returns a new instance with ${loads} lane values loaded from a typed array.`
				params = {
					tarray:`Uint8Array| Uint8ClampedArray| Int16Array| Uint16Array| Int32Array| Uint32Array| Float32Array| Float64Array`,
					index: "number"
				}
				docParams = {
					tarray:`An instance of a typed array. `,
					index:`A number for the index from where to start loading in the typed array.`
				}
				ret = `SIMD.${i}`
				docRet = ``
				}
				break;
			//store lanes from TypedArray methods
			case "store":
			case "store1":
			case "store2":
			case "store3":
				
				{
					let stores = ``;
					if(/store[1-3]/.test(k)){
						stores = k.split("store")[1];
					}else{
						stores = "all"
					}
				
				doc = `Store ${stores} values of a SIMD data type into a typed array.`
				params = {
					tarray:`Uint8Array| Uint8ClampedArray| Int16Array| Uint16Array| Int32Array| Uint32Array| Float32Array| Float64Array`,
					index: "number",
					value: `SIMD.${i}`
				}
				docParams = {
					tarray:`An instance of a typed array.`,
					index:`A number for the index from where to start storing in the typed array.`,
					value:`An instance of a SIMD data type to store into the typed array.`
				}
				ret = `SIMD.${i}`
				docRet = `The value that has been stored (a SIMD data type).`
				}
				break;
			//type cast methods
			case "fromFloat32x4":
			case "fromInt8x16":
			case "fromInt16x8":
			case "fromInt32x4":
			case "fromUint32x4":
			case "fromUint16x8":
			case "fromUint8x16":
				{
				const from = k.split("from")[1];
				doc = `Creates a new SIMD data type with a float conversion from a ${from}.`
				params = {
					value: `SIMD.${from}`
				}
				docParams = {
					value: `An ${from} SIMD type to convert from.`
				}
				ret = `SIMD.${i}`
				}
				break;
			//type cast and change bits methods
			case "fromFloat32x4Bits":
			case "fromInt32x4Bits":
			case "fromInt16x8Bits":
			case "fromInt8x16Bits":
			case "fromUint32x4Bits":
			case "fromUint16x8Bits":
			case "fromUint8x16Bits":
				{
				const from = k.replace(/^from(.*)Bits$/,"$1")
				doc = `Creates a new SIMD data type with a bit-wise copy from a ${from}.`
				params = {
					value: `SIMD.${from}`
				}
				docParams = {
					value: `A ${from} SIMD type to convert from (bitwise).`
				}
				ret = `SIMD.${i}`
				}
				break;
			//math methods 2 params
			case "add":
			case "sub":
			case "mul":
			case "div":
			case "max":
			case "min":
			case "minNum":
			case "maxNum":
			case "reciprocalApproximation":
			case "and":
			case "xor":
			case "or":
			case "not":
				params = {
					a: `SIMD.${i}`,
					b: `SIMD.${i}`
				}
				ret = `SIMD.${i}`
				break;
			//math methods 1 param
			case "neg":
			case "sqrt":
			case "abs":
			case "reciprocalSqrtApproximation":
				params = {
					a: `SIMD.${i}`
				}
				ret = `SIMD.${i}`
				break;
			
			case "lessThan":
			case "lessThanOrEqual":
			case "greaterThan":
			case "greaterThanOrEqual":
			case "equal":
			case "notEqual":
				params = {
					a: `SIMD.${i}`,
					b: `SIMD.${i}`
				}
				ret = `SIMD.Bool${bitStr}x${numStr}`
				break;
			default:
				//continue;
				ret = `any`
				break;
		}
		
		
		docCore += `		/**\n`;
		docCore += `		 * ${doc}\n`
		for(let p in params){
			docCore += `		 * @param ${p} ${docParams[p]?docParams[p]:""}\n`
		}
		if(ret!==``&&ret!==`void`&&docRet!==``){
			docCore += `		 * @return ${docRet}\n`
		}
		docCore += `		 */\n`
		docCore += `		`;
		fnCore += `${k}(`
		const keys = Object.keys(params);
		for(let p=0; p < keys.length; p++){
			fnCore += `${keys[p]}: ${params[keys[p]]}`
			if(p!==keys.length-1)fnCore += `, `
		}
		fnCore += `): ${ret};\n`;
		//out += `		\n`;
		
		methods[k] = {doc:docCore,fn:fnCore}
		//console.log(methods[k])
	}
	
	
	//output interfaces
	//*
	//out += `	interface ${i}{\n`
		
	out += `		prototype: ${i};\n`
	
	for(let l in methods){
		out += methods[l].doc;
		out += methods[l].fn;
	}
	out += `	}\n`;
	//*/
	
	//output namespaces
	/* 
	out += `	namespace ${i}{\n`
	for(let m in methods){
		out += methods[m].doc;
		out += `function ${methods[m].fn}`;
		out += "		\n"
	}
	out += `	}\n`;
	*/
	out += `	var ${i}: ${i}Constructor;\n`
	
	//declare var property
	
	//out += `	var ${i}: ${i}Constructor & ${i};\n`
	
	//namespace static
	//out += `	namespace ${k}{\n`
	//out += 
}
out += `}\n`
//out += `declare var SIMD: SIMD;`

import * as fs from "fs";
fs.writeFileSync("simd.d.ts",out,{encoding:"utf8"})

/*
var sm = SIMD.Float32x4;
sm.length;
var i16 = SIMD.Int16x8.splat(1);
//SIMD.Int16x8.equal()
//var i32 = SIMD.Int32x4.check(sm);	//error
var sm2 = SIMD.Float32x4(1, 1, 1, 1);

var o:Type;
interface Type{
	fn:SIMD.Bool8x16|SIMD.Bool16x8
}


//o.fn = SIMD.Bool8x16;
//var b8x = o.fn.check(SIMD.Bool8x16.splat(true))
//var f:SIMD.Float32x4Static;
SIMD.Float32x4.check(SIMD.Float32x4(2,3,4,5)) ;
//console.log(Object.getOwnPropertyNames(SIMD))


var isAllTrue = SIMD.Bool16x8.allTrue(SIMD.Bool16x8.splat(true))
console.log(`isAllTrue : ${isAllTrue}`)
*/