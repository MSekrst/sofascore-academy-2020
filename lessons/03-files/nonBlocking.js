console.log('Start')

setTimeout(() => {
  console.log('Callback')
  // what happens if we set timeout to 0s -> Should console.log happen immediately?
}, 0)

console.log('End')
