import async from "async"

const processJob = (seconds, callback) => {
  if (typeof seconds !== "number") {
    reject(new Error("Seconds argument has to be number type."))
  }

  setTimeout(function () {
    callback(null, `finished ${seconds}`)
  }, seconds * 1000)
}

const mainFunc = () => {
  console.time("main function")

  async.waterfall(
    [
      (cb) => {
        processJob(5, cb)
      },
      (data, cb) => {
        console.log(data)
        processJob(10, cb)
      },
      (data, cb) => {
        console.log(data)
        processJob(3, cb)
      },
    ],
    (err, data) => {
      if (err) throw err

      console.log(data)
      console.timeEnd("main function")
    }
  )
}

mainFunc()
