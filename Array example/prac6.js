function whosPaying(names) {
    
        //Write your code here.
        var r = Math.random();
        r = r*names.length;
        r = Math.floor(r);
        var string1 = names[r] + " is going to buy lunch today!";
        return string1;

    }
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];
    console.log(whosPaying(names));
