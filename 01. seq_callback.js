import async from "async"

const processJob = (seconds, callback) => {
  // (밖에서 bind로 전달해준 데이터, 이전 task가 전달해준 데이터, callback)
  setTimeout(function () {
    callback(null, `${seconds} done.`)
  }, seconds * 1000)
}

const callbackFunc = (err, results) => {
  if (err) throw err

  console.log(results)
  console.timeEnd("main function")
}

const mainFunc = () => {
  console.time("main function")

  async.waterfall(
    [
      (callback) => {
        callback(null, 5)
      },
      processJob.bind(null, 10),
      processJob.bind(null, 3),
    ],
    (err, results) => {
      if (err) throw err

      console.log(results)
      console.timeEnd("main function")
    }
  )
}

mainFunc()
