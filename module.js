module.exports = {

clearInvisible: (string) => {



const newString = string.replace(/[\u200B\u200C\u200D\u200E\u200F\u000b\u2028\u2029\uFEFF\u202D]/g, '')

return newString
},

clearLookALikes: (string) => {
const mainArray = string.split('')

for (let letter of mainArray) {
    
    console.log(letter)
}
}

}
