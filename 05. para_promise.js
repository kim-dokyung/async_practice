const processJob = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number")
      reject(new Error("Seconds argument has to be number type."))

    setTimeout(() => {
      const result = `finished ${seconds}`
      console.log(result)
      resolve(result)
    }, seconds * 1000)
  })
}

const mainFunc = () => {
  console.time()
  
  Promise.all([processJob(5), processJob(10), processJob(3)]).then(
    (results) => {
      console.log(results)
      console.timeEnd()
    }
  )
}

mainFunc()

// [ 'finished 5', 'finished 10', 'finished 3' ]
// default: 10.010s
