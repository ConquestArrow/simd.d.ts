"use strict";
import "../lib/ecmascript_simd"




let out = "";

out += `/// <reference path="../simd.d.ts" />\n`

out += `
/*****************
 SIMD Constructor Objs
*****************/
`
Object.getOwnPropertyNames(SIMD)
	.map((v,i,a)=>{
		out += `SIMD.${v};\n`
	})

out += `
/**************
 * Call Constructors
 **************/
`
Object.getOwnPropertyNames(SIMD)
	.map((v,i,a)=>{
		out += `var a${i} = SIMD.${v}(`
		for(let j=0;j<SIMD[v].length;j++){
			if(/Bool.+/.test(v)){
				out += `${true}`
			}else{
				out += `${j}`
			}
			if(j!==SIMD[v].length-1)
				out += ", "
		}
		out += `)\n`
	})

out += `
/**************
 * properties
 **************/
`
const simds = Object.getOwnPropertyNames(SIMD)
	.map((v,i,a)=>{
		//return SIMD[v];
		Object.getOwnPropertyNames(SIMD[v])
			.map((v2,i2,a2)=>{
				out += `SIMD.${v}.${v2}`
				if(typeof SIMD[v][v2]==="function"){
					out += `(`
					/*
					const l = SIMD[v][v2].length;
					for(let j=0;j<l;j++){
						out += `a${i}`
						if(j!==l-1)out += `, `
					}
					*/
					
					out += getParams(v, v2, i)
					
					out += `)\n`
				}else{
					out += `\n`;
				}
			})
	});

function getParams(typeName:string, propName:string, index:number ):string{
	let param:string[] = [];
	switch(propName){
		case "splat":
			if(/^Bool/.test(typeName)){
				param=["true",];
			}else{
				param=["1",];
			}
			break;
		case "check":param=[`a${index}`,];break;
		case "add":
		case "sub":
		case "mul":
		case "div":
		case "max":
		case "min":
		case "maxNum":
		case "minNum":
		case "reciprocalApproximation":
		case "and":
		case "xor":
		case "or":
		case "not":
		case "lessThan":
		case "lessThanOrEqual":
		case "greaterThan":
		case "greaterThanOrEqual":
		case "equal":
		case "notEqual":
		case "addSaturate":
		case "subSaturate":
			param=[`a${index}`,`a${index}`];break;
		case "neg":
		case "sqrt":
		case "reciprocalSqrtApproximation":
		case "abs":
		case "anyTrue":
		case "allTrue":
			param=[`a${index}`,];break;
		case "select":
			param=[`SIMD.Bool${typeName.replace(/^(Int|Uint|Float)/,"")}.splat(true)`,`a${index}`,`a${index}`];break;
		case "shiftLeftByScalar":
		case "shiftRightByScalar":
			param=[`a${index}`,`1`];break;
		case "extractLane":
			param=[`a${index}`,`${SIMD[typeName].length-1}`];break;
		case "replaceLane":
			param=[`a${index}`,`${SIMD[typeName].length-1}`,(/^Bool/.test(typeName) ? "true": "1")];break;
		case "store":
		case "store1":
		case "store2":
		case "store3":
			param=[`new ${typeName.split("x")[0]}Array(16)`,"1",`a${index}`];break;
		case "load":
		case "load1":
		case "load2":
		case "load3":
			param=[`new ${typeName.split("x")[0]}Array(16)`,"0",];break;
		case "fromFloat32x4":
		case "fromFloat32x4Bits":
			param=[`SIMD.Float32x4.splat(0)`,];break;
		case "fromInt32x4":
		case "fromInt32x4Bits":
			param=[`SIMD.Int32x4.splat(0)`,];break;
		case "fromUint32x4":
		case "fromUint32x4Bits":
			param=[`SIMD.Uint32x4.splat(0)`,];break;
		case "fromFloat16x8":
		case "fromFloat16x8Bits":
			param=[`SIMD.Float16x8.splat(0)`,];break;
		case "fromInt16x8":
		case "fromInt16x8Bits":
			param=[`SIMD.Int16x8.splat(0)`,];break;
		case "fromUint16x8":
		case "fromUint16x8Bits":
			param=[`SIMD.Uint16x8.splat(0)`,];break;
		case "fromFloat8x16":
		case "fromFloat8x16Bits":
			param=[`SIMD.Float8x16.splat(0)`,];break;
		case "fromInt8x16":
		case "fromInt8x16Bits":
			param=[`SIMD.Int8x16.splat(0)`,];break;
		case "fromUint8x16":
		case "fromUint8x16Bits":
			param=[`SIMD.Uint8x16.splat(0)`,];break;
		case "swizzle":
			param=[`a${index}`];//,"0","0","1"];
			for(let i=0; i<SIMD[typeName].length;i++){
				param.push(`${i}`)
			}
			break;
		case "shuffle":
			param=[`a${index}`, `a${index}`]//, "1", "2", "3"];
			for(let i=0; i<SIMD[typeName].length;i++){
				param.push(`${i}`)
			}
			break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
		case "":param=["",];break;
	}
	
	
	return param.join(", ");
}




import * as fs from "fs";
fs.writeFileSync("./test/simd-test.ts",out,{encoding:"utf8"})