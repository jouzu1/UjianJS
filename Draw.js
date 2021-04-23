class Draw{
    gambarKotak(p){
        for(let i = 0 ; i<p ; i++){
            for(let j = 0 ; j<p ; j++){
                process.stdout.write("* ")
            }console.log(" ")
        }
        console.log("\n")
    }

    gambarSegitiga(p){
        for(let i = 0 ; i<p ; i++){
            for(let j = 0 ; j<=i ; j++){
                process.stdout.write("* ")
            }console.log(" ")
        }
        console.log("\n")
    }

    gambarSegitigaTerbalik(p){
        for(let i = 0 ; i<p ; i++){
            for(let j = p ; j>i ; j--){
                process.stdout.write("*")
            }console.log(" ")
        }
        console.log("\n")
    }

    gambarSelangSeling(p){
        for(let i = 0 ; i<p ; i++){
            for(let j = 0 ; j<p ; j++){
                if((i%2==0 && j%2==1) || (i%2==1 && j%2==0) ){
                    process.stdout.write("!")
                }else{
                    process.stdout.write("*")
                }
                
            }console.log(" ")
        }
        console.log("\n")
    }
}

let kotak = new Draw();
kotak.gambarKotak(5);

let segitiga = new Draw();
segitiga.gambarSegitiga(5)

let segitigaTerbalik = new Draw();
segitigaTerbalik.gambarSegitigaTerbalik(6);

let selangseling = new Draw();
selangseling.gambarSelangSeling(5);
