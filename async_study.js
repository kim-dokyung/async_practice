const processJob = (seconds) => {
	return new Promise((resolve, reject) => {
  	setTimeout(() => {
			console.log(`finished ${seconds}`)
			resolve()
    }, 
      seconds * 1000
    )
  })
    
}

const mainFunc = async () => {
	console.time()
	await Promise.all([processJob(5), processJob(10), processJob(3)])
	console.timeEnd()
}
 
mainFunc()

// default: 10001.01611328125 ms