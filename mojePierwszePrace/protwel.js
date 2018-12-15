class Portwel{
    constructor(zarobki,wydadki,stanObecny){
        this.zarobki = zarobki;
        this.wydadki = wydadki;
        this.stanObecny = stanObecny;
         stanObecny() = function(){
            console.log(zarobki-wydadki);
        }
    }

     
}
let hajs = new Portwel(zarobki,wydadki);
stanObecny();
