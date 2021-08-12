const clearutil = require('./module.js')

const cleaned = clearutil.clearInvisible('hey world')

if (cleaned === 'hey world') {
    console.log(cleaned)
}

console.log(clearutil.clearLookALikes('sück'))