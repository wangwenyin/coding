import {Decimal} from 'decimal.js'
console.log(0.1 + 0.2)
console.log((0.1 + 0.2).toFixed(1))
console.log(Decimal.add(0.1, 0.2))

// js计算精度丢失问题原因是数值由十进制转成双精度浮点数的二进制过程中会出现精度丢失导致的