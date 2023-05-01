let x =  [1,2,3];

let r = 5;
j = 0;

for(let i = 0; i <= r; i++) {
    if(i < x.length) {
        console.log(x[i]);
    }
    else {
        if(j == x.length) {
            j = 0;
        }
        console.log(x[j]);
        
            j++;
    }
   

}

