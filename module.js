modules.exports = {

clearInvisible: (string) => {

const thinLineRegex = /(^[\s\u200b]*|[\s\u200b]*$)/g
console.log(string)
const newString = string.replace(thinLineRegex, '')
console.log(newString)
}

}
