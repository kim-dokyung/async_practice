import async from "async"

const processJob = (seconds, callback) => {
  if (typeof seconds !== "number") {
    callback(new Error("Seconds argument has to be number type."))
    return
  }

  setTimeout(function () {
    const data = `finished ${seconds}`
    console.log(data)
    callback(null, data)
  }, seconds * 1000)
}

const mainFunc = () => {
  console.time()

  async.parallel(
    [
      (cb) => processJob(5, cb),
      (cb) => processJob(10, cb),
      (cb) => processJob(3, cb),
    ],
    (err, results) => {
      if (err) throw err

      console.log(results)
      console.timeEnd()
    }
  )
}

mainFunc()
