const processJob = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number")
      reject(new Error("Seconds argument has to be number type."))

    setTimeout(() => {
      const result = `finished ${seconds}`
      resolve(result)
    }, seconds * 1000)
  })
}

const mainFunc = () => {
  console.time()

  const arr = [5, 10, 3].map((seconds) => {
    return processJob(seconds)
  })

  Promise.all(arr).then((results) => {
    console.log(results)
    console.timeEnd()
  })
}

mainFunc()

// [ 'finished 5', 'finished 10', 'finished 3' ]
// default: 10.010s
