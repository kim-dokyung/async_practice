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

const mainFunc = async () => {
  console.time('main function')
  try {
    const res5 = await processJob(5)
    console.log(res5)
    const res10 = await processJob("10")
    console.log(res10)
    const res3 = await processJob(3)
    console.log(res3)
  } catch (err) {
    console.log(err)
  }

  console.timeEnd('main function')
}

mainFunc()
