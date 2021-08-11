const clearutil = require('./module.js')

const cleaned = clearutil.clearInvisible('hey​')

if (cleaned === 'hey') {
    console.log(cleaned)
}

clearutil.clearLookALikes('hello world')