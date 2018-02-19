


// to find th factor we only go to sqrt(n) becase lets say 
// n = x*y  where x<=y  , x2 <= xy , x2 <= n  x <=sqrt(n)

(function() {
   // your page initialization code here
   // the DOM will be available here
    
    const isPrime = (n) => {
        

	// only even number that is a prime number
  if (n === 2) {
  	console.log('numbers of Iterations:', 0)
    return true;
  }

	// if non number, number under 2 or an even number
  if (!Number.isInteger(Number(n)) || n < 2 || !(n % 2)) {
      
    return false;
  }

  let ctr = 0;

	
  for (let i = 3; i <= Math.sqrt(n); i++, i++) {
    ctr++;
    if (n % i == 0) {
      console.log('numbers of Iterations:', ctr)
      return false;
    }
  }
  console.log('numbers of Iterations:', ctr)
  return true;
}

document.getElementById("checkPrimeButton").onclick = function() {
    
    let n = document.getElementById('thisNumber').value;
    
    let result = isPrime(n);
    result = (result)? `${n} is a prime number` : `${n} is a prime number`;
    document.getElementById('result').innerHTML = result;
};

})();

