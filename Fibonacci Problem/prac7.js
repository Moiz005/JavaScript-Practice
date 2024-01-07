function fibonacciGenerator (n) {
        if(n === 1){
            var arr = [0];
            return arr;
        }
        else if(n === 2){
            var arr = [0,1];
            return arr;
        }
        else{
            var arr = [0,1];
            var res = 0;
            for(var i = 2; i<(n); i++){
                res = arr[i-1] + arr[i-2];
                arr.push(res);
            }
            return arr;
        }
    }
    
    fibonacciGenerator(8);
