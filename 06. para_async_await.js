const processJob = (seconds) => {
	return new Promise((resolve, reject) => {
    if(typeof seconds !== 'number') 
      reject(new Error('Seconds argument has to be number type.'))

    setTimeout(() => {
      const result = `finished ${seconds}`
      resolve(result)
    }, 
	    seconds * 1000
    )
  })
    
}

const mainFunc = async () => {
	console.time()
	const results = await Promise.all([processJob(5), processJob(10), processJob(3)])
	console.log(results)
	console.timeEnd()
}
 
mainFunc()

// default: 10001.01611328125 ms