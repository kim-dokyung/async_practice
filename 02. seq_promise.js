const processJob = (seconds) => {
  return new Promise((resolve, reject) => {
    if (typeof seconds !== "number") {
      reject(new Error("Seconds argument has to be number type."))
    }

    setTimeout(() => {
      const result = `finished ${seconds}`
      resolve(result)
    }, seconds * 1000)
  })
}

const mainFunc = () => {
  console.time()
  processJob(5)
    .then((result) => {
      console.log(result)
      return processJob(10)
    })
    .then((result) => {
      console.log(result)
      return processJob(3)
    })
    .then((result) => {
      console.log(result)
      console.timeEnd()
    })
    .catch((err) => {
      alert(err)
    })
}

mainFunc()
