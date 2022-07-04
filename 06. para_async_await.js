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

const mainFunc = async () => {
  console.time('main function')

  const arr = [5, 10, 3].map((seconds) => processJob(seconds))

  const results = await Promise.all(arr)
  console.log(results)
  console.timeEnd('main function')
}

mainFunc()

// default: 10001.01611328125 ms
