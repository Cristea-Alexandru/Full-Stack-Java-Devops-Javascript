//Exercise 2

    // Point 1, 2 & 3

function F21(A){
    let ok = true;
        if(A.length == 9){
            let count = [0,0,0,0,0,0,0,0,0];
            for(let i=0; i<A.length; i++){
                if(isNaN(parseInt(A[i]))){
                    ok = !ok;
                }
                count[parseInt(A[i])-1]++;
            }
            for(let i=0; i<count.length; i++){
                if(count[i] != 1){
                    ok = !ok;
                    i = count.length;
                }
            }
        }
    return ok;
}