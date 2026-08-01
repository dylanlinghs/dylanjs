const setA = new Set(["Bob","John"])
const setB = new Set(["John","James","Bond"])
const setC = new Set(["Alice","Mary","Bob"])
const union = new Set([...setA, ...setB, ...setC])
const AdB = new Set([...setA].filter(value => !setB.has(value)))
const CdB = new Set([...setC].filter(value => !setB.has(value)))
const diff = new Set([...AdB, ...CdB])
console.log(diff)
console.log()


console.log("")