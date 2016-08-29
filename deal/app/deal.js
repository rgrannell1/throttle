
"use strict"





const readline = require('readline')






const readStdin = onLine => {

	readline.createInterface({input: process.stdin}).on('line', onLine)

}




const foo = function* (rate, jitter) {

	for ( let timeout = 0; true; timeout += (rate + Math.floor(Math.random( ) * jitter)) ) {
		yield fn => setTimeout(( ) => fn( ), timeout)
	}

}






const deal = rawArgs => {

	const args  = deal.preprocess(rawArgs)
	var offset  = 0

	const timeouts = foo(args.rate, args.jitter)

	readStdin(line => {

		const timeout = timeouts.next( ).value

		timeout(( ) => console.log(line))

	})


}

deal.preprocess = rawArgs => {

	return {
		rate:   1000 * rawArgs['--rate'],
		jitter: 1000 * rawArgs['--jitter']
	}

}





module.exports = deal
