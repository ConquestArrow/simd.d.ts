/// <reference path="../simd.d.ts" />

/*****************
 SIMD Constructor Objs
*****************/
SIMD.Float32x4;
SIMD.Int32x4;
SIMD.Int16x8;
SIMD.Int8x16;
SIMD.Uint32x4;
SIMD.Uint16x8;
SIMD.Uint8x16;
SIMD.Bool32x4;
SIMD.Bool16x8;
SIMD.Bool8x16;

/**************
 * Call Constructors
 **************/
var a0 = SIMD.Float32x4(0, 1, 2, 3)
var a1 = SIMD.Int32x4(0, 1, 2, 3)
var a2 = SIMD.Int16x8(0, 1, 2, 3, 4, 5, 6, 7)
var a3 = SIMD.Int8x16(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
var a4 = SIMD.Uint32x4(0, 1, 2, 3)
var a5 = SIMD.Uint16x8(0, 1, 2, 3, 4, 5, 6, 7)
var a6 = SIMD.Uint8x16(0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
var a7 = SIMD.Bool32x4(true, true, true, true)
var a8 = SIMD.Bool16x8(true, true, true, true, true, true, true, true)
var a9 = SIMD.Bool8x16(true, true, true, true, true, true, true, true, true, true, true, true, true, true, true, true)

/**************
 * properties
 **************/
SIMD.Float32x4.length
SIMD.Float32x4.name
SIMD.Float32x4.arguments
SIMD.Float32x4.caller
SIMD.Float32x4.prototype
SIMD.Float32x4.extractLane(a0, 3)
SIMD.Float32x4.swizzle(a0, 0, 1, 2, 3)
SIMD.Float32x4.shuffle(a0, a0, 0, 1, 2, 3)
SIMD.Float32x4.check(a0)
SIMD.Float32x4.splat(1)
SIMD.Float32x4.replaceLane(a0, 3, 1)
SIMD.Float32x4.select(SIMD.Bool32x4.splat(true), a0, a0)
SIMD.Float32x4.equal(a0, a0)
SIMD.Float32x4.notEqual(a0, a0)
SIMD.Float32x4.lessThan(a0, a0)
SIMD.Float32x4.lessThanOrEqual(a0, a0)
SIMD.Float32x4.greaterThan(a0, a0)
SIMD.Float32x4.greaterThanOrEqual(a0, a0)
SIMD.Float32x4.add(a0, a0)
SIMD.Float32x4.sub(a0, a0)
SIMD.Float32x4.mul(a0, a0)
SIMD.Float32x4.div(a0, a0)
SIMD.Float32x4.neg(a0)
SIMD.Float32x4.abs(a0)
SIMD.Float32x4.min(a0, a0)
SIMD.Float32x4.max(a0, a0)
SIMD.Float32x4.minNum(a0, a0)
SIMD.Float32x4.maxNum(a0, a0)
SIMD.Float32x4.reciprocalApproximation(a0, a0)
SIMD.Float32x4.reciprocalSqrtApproximation(a0)
SIMD.Float32x4.sqrt(a0)
SIMD.Float32x4.load(new Float32Array(16), 0)
SIMD.Float32x4.load1(new Float32Array(16), 0)
SIMD.Float32x4.load2(new Float32Array(16), 0)
SIMD.Float32x4.load3(new Float32Array(16), 0)
SIMD.Float32x4.store(new Float32Array(16), 1, a0)
SIMD.Float32x4.store1(new Float32Array(16), 1, a0)
SIMD.Float32x4.store2(new Float32Array(16), 1, a0)
SIMD.Float32x4.store3(new Float32Array(16), 1, a0)
SIMD.Float32x4.fromInt32x4(SIMD.Int32x4.splat(0))
SIMD.Float32x4.fromUint32x4(SIMD.Uint32x4.splat(0))
SIMD.Float32x4.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Float32x4.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Float32x4.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Float32x4.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Float32x4.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Float32x4.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Int32x4.length
SIMD.Int32x4.name
SIMD.Int32x4.arguments
SIMD.Int32x4.caller
SIMD.Int32x4.prototype
SIMD.Int32x4.extractLane(a1, 3)
SIMD.Int32x4.swizzle(a1, 0, 1, 2, 3)
SIMD.Int32x4.shuffle(a1, a1, 0, 1, 2, 3)
SIMD.Int32x4.check(a1)
SIMD.Int32x4.splat(1)
SIMD.Int32x4.replaceLane(a1, 3, 1)
SIMD.Int32x4.select(SIMD.Bool32x4.splat(true), a1, a1)
SIMD.Int32x4.equal(a1, a1)
SIMD.Int32x4.notEqual(a1, a1)
SIMD.Int32x4.lessThan(a1, a1)
SIMD.Int32x4.lessThanOrEqual(a1, a1)
SIMD.Int32x4.greaterThan(a1, a1)
SIMD.Int32x4.greaterThanOrEqual(a1, a1)
SIMD.Int32x4.and(a1, a1)
SIMD.Int32x4.or(a1, a1)
SIMD.Int32x4.xor(a1, a1)
SIMD.Int32x4.not(a1, a1)
SIMD.Int32x4.add(a1, a1)
SIMD.Int32x4.sub(a1, a1)
SIMD.Int32x4.mul(a1, a1)
SIMD.Int32x4.neg(a1)
SIMD.Int32x4.shiftLeftByScalar(a1, 1)
SIMD.Int32x4.shiftRightByScalar(a1, 1)
SIMD.Int32x4.load(new Int32Array(16), 0)
SIMD.Int32x4.load1(new Int32Array(16), 0)
SIMD.Int32x4.load2(new Int32Array(16), 0)
SIMD.Int32x4.load3(new Int32Array(16), 0)
SIMD.Int32x4.store(new Int32Array(16), 1, a1)
SIMD.Int32x4.store1(new Int32Array(16), 1, a1)
SIMD.Int32x4.store2(new Int32Array(16), 1, a1)
SIMD.Int32x4.store3(new Int32Array(16), 1, a1)
SIMD.Int32x4.fromFloat32x4(SIMD.Float32x4.splat(0))
SIMD.Int32x4.fromUint32x4(SIMD.Uint32x4.splat(0))
SIMD.Int32x4.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Int32x4.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Int32x4.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Int32x4.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Int32x4.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Int32x4.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Int16x8.length
SIMD.Int16x8.name
SIMD.Int16x8.arguments
SIMD.Int16x8.caller
SIMD.Int16x8.prototype
SIMD.Int16x8.extractLane(a2, 7)
SIMD.Int16x8.swizzle(a2, 0, 1, 2, 3, 4, 5, 6, 7)
SIMD.Int16x8.shuffle(a2, a2, 0, 1, 2, 3, 4, 5, 6, 7)
SIMD.Int16x8.check(a2)
SIMD.Int16x8.splat(1)
SIMD.Int16x8.replaceLane(a2, 7, 1)
SIMD.Int16x8.select(SIMD.Bool16x8.splat(true), a2, a2)
SIMD.Int16x8.equal(a2, a2)
SIMD.Int16x8.notEqual(a2, a2)
SIMD.Int16x8.lessThan(a2, a2)
SIMD.Int16x8.lessThanOrEqual(a2, a2)
SIMD.Int16x8.greaterThan(a2, a2)
SIMD.Int16x8.greaterThanOrEqual(a2, a2)
SIMD.Int16x8.and(a2, a2)
SIMD.Int16x8.or(a2, a2)
SIMD.Int16x8.xor(a2, a2)
SIMD.Int16x8.not(a2, a2)
SIMD.Int16x8.add(a2, a2)
SIMD.Int16x8.sub(a2, a2)
SIMD.Int16x8.mul(a2, a2)
SIMD.Int16x8.neg(a2)
SIMD.Int16x8.shiftLeftByScalar(a2, 1)
SIMD.Int16x8.shiftRightByScalar(a2, 1)
SIMD.Int16x8.addSaturate(a2, a2)
SIMD.Int16x8.subSaturate(a2, a2)
SIMD.Int16x8.load(new Int16Array(16), 0)
SIMD.Int16x8.store(new Int16Array(16), 1, a2)
SIMD.Int16x8.fromUint16x8(SIMD.Uint16x8.splat(0))
SIMD.Int16x8.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Int16x8.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Int16x8.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Int16x8.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Int16x8.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Int16x8.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Int8x16.length
SIMD.Int8x16.name
SIMD.Int8x16.arguments
SIMD.Int8x16.caller
SIMD.Int8x16.prototype
SIMD.Int8x16.extractLane(a3, 15)
SIMD.Int8x16.swizzle(a3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
SIMD.Int8x16.shuffle(a3, a3, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
SIMD.Int8x16.check(a3)
SIMD.Int8x16.splat(1)
SIMD.Int8x16.replaceLane(a3, 15, 1)
SIMD.Int8x16.select(SIMD.Bool8x16.splat(true), a3, a3)
SIMD.Int8x16.equal(a3, a3)
SIMD.Int8x16.notEqual(a3, a3)
SIMD.Int8x16.lessThan(a3, a3)
SIMD.Int8x16.lessThanOrEqual(a3, a3)
SIMD.Int8x16.greaterThan(a3, a3)
SIMD.Int8x16.greaterThanOrEqual(a3, a3)
SIMD.Int8x16.and(a3, a3)
SIMD.Int8x16.or(a3, a3)
SIMD.Int8x16.xor(a3, a3)
SIMD.Int8x16.not(a3, a3)
SIMD.Int8x16.add(a3, a3)
SIMD.Int8x16.sub(a3, a3)
SIMD.Int8x16.mul(a3, a3)
SIMD.Int8x16.neg(a3)
SIMD.Int8x16.shiftLeftByScalar(a3, 1)
SIMD.Int8x16.shiftRightByScalar(a3, 1)
SIMD.Int8x16.addSaturate(a3, a3)
SIMD.Int8x16.subSaturate(a3, a3)
SIMD.Int8x16.load(new Int8Array(16), 0)
SIMD.Int8x16.store(new Int8Array(16), 1, a3)
SIMD.Int8x16.fromUint8x16(SIMD.Uint8x16.splat(0))
SIMD.Int8x16.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Int8x16.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Int8x16.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Int8x16.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Int8x16.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Int8x16.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Uint32x4.length
SIMD.Uint32x4.name
SIMD.Uint32x4.arguments
SIMD.Uint32x4.caller
SIMD.Uint32x4.prototype
SIMD.Uint32x4.extractLane(a4, 3)
SIMD.Uint32x4.swizzle(a4, 0, 1, 2, 3)
SIMD.Uint32x4.shuffle(a4, a4, 0, 1, 2, 3)
SIMD.Uint32x4.check(a4)
SIMD.Uint32x4.splat(1)
SIMD.Uint32x4.replaceLane(a4, 3, 1)
SIMD.Uint32x4.select(SIMD.Bool32x4.splat(true), a4, a4)
SIMD.Uint32x4.equal(a4, a4)
SIMD.Uint32x4.notEqual(a4, a4)
SIMD.Uint32x4.lessThan(a4, a4)
SIMD.Uint32x4.lessThanOrEqual(a4, a4)
SIMD.Uint32x4.greaterThan(a4, a4)
SIMD.Uint32x4.greaterThanOrEqual(a4, a4)
SIMD.Uint32x4.and(a4, a4)
SIMD.Uint32x4.or(a4, a4)
SIMD.Uint32x4.xor(a4, a4)
SIMD.Uint32x4.not(a4, a4)
SIMD.Uint32x4.add(a4, a4)
SIMD.Uint32x4.sub(a4, a4)
SIMD.Uint32x4.mul(a4, a4)
SIMD.Uint32x4.shiftLeftByScalar(a4, 1)
SIMD.Uint32x4.shiftRightByScalar(a4, 1)
SIMD.Uint32x4.load(new Uint32Array(16), 0)
SIMD.Uint32x4.load1(new Uint32Array(16), 0)
SIMD.Uint32x4.load2(new Uint32Array(16), 0)
SIMD.Uint32x4.load3(new Uint32Array(16), 0)
SIMD.Uint32x4.store(new Uint32Array(16), 1, a4)
SIMD.Uint32x4.store1(new Uint32Array(16), 1, a4)
SIMD.Uint32x4.store2(new Uint32Array(16), 1, a4)
SIMD.Uint32x4.store3(new Uint32Array(16), 1, a4)
SIMD.Uint32x4.fromFloat32x4(SIMD.Float32x4.splat(0))
SIMD.Uint32x4.fromInt32x4(SIMD.Int32x4.splat(0))
SIMD.Uint32x4.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Uint32x4.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Uint32x4.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Uint32x4.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Uint32x4.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Uint32x4.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Uint16x8.length
SIMD.Uint16x8.name
SIMD.Uint16x8.arguments
SIMD.Uint16x8.caller
SIMD.Uint16x8.prototype
SIMD.Uint16x8.extractLane(a5, 7)
SIMD.Uint16x8.swizzle(a5, 0, 1, 2, 3, 4, 5, 6, 7)
SIMD.Uint16x8.shuffle(a5, a5, 0, 1, 2, 3, 4, 5, 6, 7)
SIMD.Uint16x8.check(a5)
SIMD.Uint16x8.splat(1)
SIMD.Uint16x8.replaceLane(a5, 7, 1)
SIMD.Uint16x8.select(SIMD.Bool16x8.splat(true), a5, a5)
SIMD.Uint16x8.equal(a5, a5)
SIMD.Uint16x8.notEqual(a5, a5)
SIMD.Uint16x8.lessThan(a5, a5)
SIMD.Uint16x8.lessThanOrEqual(a5, a5)
SIMD.Uint16x8.greaterThan(a5, a5)
SIMD.Uint16x8.greaterThanOrEqual(a5, a5)
SIMD.Uint16x8.and(a5, a5)
SIMD.Uint16x8.or(a5, a5)
SIMD.Uint16x8.xor(a5, a5)
SIMD.Uint16x8.not(a5, a5)
SIMD.Uint16x8.add(a5, a5)
SIMD.Uint16x8.sub(a5, a5)
SIMD.Uint16x8.mul(a5, a5)
SIMD.Uint16x8.shiftLeftByScalar(a5, 1)
SIMD.Uint16x8.shiftRightByScalar(a5, 1)
SIMD.Uint16x8.addSaturate(a5, a5)
SIMD.Uint16x8.subSaturate(a5, a5)
SIMD.Uint16x8.load(new Uint16Array(16), 0)
SIMD.Uint16x8.store(new Uint16Array(16), 1, a5)
SIMD.Uint16x8.fromInt16x8(SIMD.Int16x8.splat(0))
SIMD.Uint16x8.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Uint16x8.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Uint16x8.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Uint16x8.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Uint16x8.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Uint16x8.fromUint8x16Bits(SIMD.Uint8x16.splat(0))
SIMD.Uint8x16.length
SIMD.Uint8x16.name
SIMD.Uint8x16.arguments
SIMD.Uint8x16.caller
SIMD.Uint8x16.prototype
SIMD.Uint8x16.extractLane(a6, 15)
SIMD.Uint8x16.swizzle(a6, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
SIMD.Uint8x16.shuffle(a6, a6, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15)
SIMD.Uint8x16.check(a6)
SIMD.Uint8x16.splat(1)
SIMD.Uint8x16.replaceLane(a6, 15, 1)
SIMD.Uint8x16.select(SIMD.Bool8x16.splat(true), a6, a6)
SIMD.Uint8x16.equal(a6, a6)
SIMD.Uint8x16.notEqual(a6, a6)
SIMD.Uint8x16.lessThan(a6, a6)
SIMD.Uint8x16.lessThanOrEqual(a6, a6)
SIMD.Uint8x16.greaterThan(a6, a6)
SIMD.Uint8x16.greaterThanOrEqual(a6, a6)
SIMD.Uint8x16.and(a6, a6)
SIMD.Uint8x16.or(a6, a6)
SIMD.Uint8x16.xor(a6, a6)
SIMD.Uint8x16.not(a6, a6)
SIMD.Uint8x16.add(a6, a6)
SIMD.Uint8x16.sub(a6, a6)
SIMD.Uint8x16.mul(a6, a6)
SIMD.Uint8x16.shiftLeftByScalar(a6, 1)
SIMD.Uint8x16.shiftRightByScalar(a6, 1)
SIMD.Uint8x16.addSaturate(a6, a6)
SIMD.Uint8x16.subSaturate(a6, a6)
SIMD.Uint8x16.load(new Uint8Array(16), 0)
SIMD.Uint8x16.store(new Uint8Array(16), 1, a6)
SIMD.Uint8x16.fromInt8x16(SIMD.Int8x16.splat(0))
SIMD.Uint8x16.fromFloat32x4Bits(SIMD.Float32x4.splat(0))
SIMD.Uint8x16.fromInt32x4Bits(SIMD.Int32x4.splat(0))
SIMD.Uint8x16.fromInt16x8Bits(SIMD.Int16x8.splat(0))
SIMD.Uint8x16.fromInt8x16Bits(SIMD.Int8x16.splat(0))
SIMD.Uint8x16.fromUint32x4Bits(SIMD.Uint32x4.splat(0))
SIMD.Uint8x16.fromUint16x8Bits(SIMD.Uint16x8.splat(0))
SIMD.Bool32x4.length
SIMD.Bool32x4.name
SIMD.Bool32x4.arguments
SIMD.Bool32x4.caller
SIMD.Bool32x4.prototype
SIMD.Bool32x4.extractLane(a7, 3)
SIMD.Bool32x4.check(a7)
SIMD.Bool32x4.splat(true)
SIMD.Bool32x4.replaceLane(a7, 3, true)
SIMD.Bool32x4.allTrue(a7)
SIMD.Bool32x4.anyTrue(a7)
SIMD.Bool32x4.and(a7, a7)
SIMD.Bool32x4.or(a7, a7)
SIMD.Bool32x4.xor(a7, a7)
SIMD.Bool32x4.not(a7, a7)
SIMD.Bool16x8.length
SIMD.Bool16x8.name
SIMD.Bool16x8.arguments
SIMD.Bool16x8.caller
SIMD.Bool16x8.prototype
SIMD.Bool16x8.extractLane(a8, 7)
SIMD.Bool16x8.check(a8)
SIMD.Bool16x8.splat(true)
SIMD.Bool16x8.replaceLane(a8, 7, true)
SIMD.Bool16x8.allTrue(a8)
SIMD.Bool16x8.anyTrue(a8)
SIMD.Bool16x8.and(a8, a8)
SIMD.Bool16x8.or(a8, a8)
SIMD.Bool16x8.xor(a8, a8)
SIMD.Bool16x8.not(a8, a8)
SIMD.Bool8x16.length
SIMD.Bool8x16.name
SIMD.Bool8x16.arguments
SIMD.Bool8x16.caller
SIMD.Bool8x16.prototype
SIMD.Bool8x16.extractLane(a9, 15)
SIMD.Bool8x16.check(a9)
SIMD.Bool8x16.splat(true)
SIMD.Bool8x16.replaceLane(a9, 15, true)
SIMD.Bool8x16.allTrue(a9)
SIMD.Bool8x16.anyTrue(a9)
SIMD.Bool8x16.and(a9, a9)
SIMD.Bool8x16.or(a9, a9)
SIMD.Bool8x16.xor(a9, a9)
SIMD.Bool8x16.not(a9, a9)
