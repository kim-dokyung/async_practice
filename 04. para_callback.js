import async from "async"

const processJob = (seconds, callback) => {
  if (typeof seconds !== "number") {
    callback(new Error("Seconds argument has to be number type."))
    return
  }

  setTimeout(function () {
    const data = `finished ${seconds}`
    callback(null, data)
  }, seconds * 1000)
}

const callbackFunc = (err, results) => {
  if (err) throw err

  console.log(results)
  console.timeEnd()
}

const mainFunc = () => {
  console.time()

  async.parallel(
    [processJob(5), processJob.bind(null, 10), processJob.bind(null, 3)],
    callbackFunc
  )
}

mainFunc()
