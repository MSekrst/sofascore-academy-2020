// import function from other file (module)
// new syntax would be import setTimeoutPromise from './setTimeoutPromise'
const setTimeoutPromise = require('./setTimeoutPromise').setTimeoutPromise

console.log('Start')

setTimeoutPromise()
  .then(text => {
    console.log(text)
  })
  .catch(error => console.error('Error!'))


console.log('End');
