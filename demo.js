var x, y
var z = 0

for(let i= -11;i<=11;i++) {
    for(let j=-11;j<=11;j++) {
        var fx = (i**2 + j - 11)**2 + (i+j**2-7)**2
        if(fx == z ) {
            x = i
            y = j
            console.log(`Nilai x = ${x}`)
            console.log(`Nilai y = ${y}`)
        } 
     }
} 