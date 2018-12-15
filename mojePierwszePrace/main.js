//  let wejscieA;
//  let wejscieB;
//  function bramkaAnd(wejscieA,wejscieB,){
//  return wejscieA&&wejscieB;
//  } 
//  function bramkaOr(wejscieA,wejscieB){
//  return wejscieA||wejscieB;
//  } 
/*

 class Ludzie{ 
    constructor(name,godziny,stawka){
        this.name = name;
        this.godziny = godziny;
        this.stawka = stawka;
        this.razem = this.godziny*this.stawka;
        this.showZarobione = showZarobione
           showZarobione = function(){
            console.log(godziny*stawka);
    
        }
    } 
}   
    let showZarobione = function(){
           console.log();
    }   
    
let pracownik = new Ludzie( "Wacek",160,14);
showZarobione();
let pracownik1 = new Ludzie("Edek",160,13);
showZarobione();
let pracownik2 = new Ludzie( "Rysiu",160,12);
showZarobione();
let pracownik3 = new Ludzie( "Zosia",160,12);
showZarobione();
let pracownik4 = new Ludzie( "Heniu",160,12);
showZarobione();
let pracownik5 = new Ludzie( "Hela",160,12);
showZarobione();
let murarz1 = new Ludzie('Ziutek',160,13);
showZarobione();
let murarz2 = new Ludzie('Franek',160,13);
showZarobione();
let murarz3 = new Ludzie('Eustachy',160,13);
 showZarobione();


class Budynki{
    constructor(name,utrzymanie,pracownicy){
        this.name = name;
        this.utrzymanie = utrzymanie;
        this.pracownicy = pracownicy;
    }

}
     
let biuro = new Budynki("biuro",1000);
let hurtoewnia = new Budynki("hurtownia",1000);
let betoniarnia = new Budynki("betoniarnia",1500);

class Maszyny{
    constructor(name,utrzymanie,pracownicy){
        this.name = name;
        this.utrzymanie = utrzymanie;
        this.pracownicy = pracownicy;
    }
}

let dzwig = new Maszyny("dzwig",1500);
let hds = new Maszyny("hds",1200);
let kopara = new Maszyny("kopara",1400);

class Zlecenia{
    constructor(name,roboczoGodziny,zaopatrzenie,pracownicy,cenaZ){
       this.name = name;
       this.roboczoGodziny = roboczoGodziny;
       this.zaopatrzenie = zaopatrzenie;
       this.pracownicy = pracownicy;
       this.cenaZ = cenaZ;

    }
}
let zlecenie = new Zlecenia("domek w gorach",1000,"material",murarz1,300000);

 

 

//function koszt(biuro,dzwig,Edek,Wacek,Rysiu){
       //  console.log(biuro.utrzymanie+dzwig.utrzymanie);

//}
// function godz(Wacek,Edek,Rysiu){
    // console.log(Wacek.godziny+Edek.godziny+Rysiu.godziny)

// }

//pentelki//

//for (let i = 0; i <= 10; i++) {
  //  console.log("wyświetlenie " + i);
  // }

   // let i = 0;
 //for (; i < 10;) {
  //console.log(i);
  //i++;
// }

  // while (false) {
   // console.log("działa");
  // }
   // Przykład 1
// let number = 0;
// while (number < 10) {
//  number++;
//  console.log(number);
// }

// Przykład 2
//  let money = 100;
//  while (money >= 8) {
//  console.log("Mam jeszcze " + money + " złotych. To pijemy piwko!");
//  money -= 8;
// }

//  alert(`za ${money} złote, już piwka nie kupię :((((`)

// Przykład 3
// let gasoline = 40;
// let km = 0;

// while (gasoline--) {
//  km += 18;
//  console.log("Przejechaliśmy " + km + " kilometrów. Została nam jeszcze " + gasoline + " litrów benzyny");
// }


//DO...WHILE
//Blok zawsze wykona się co najmniej raz. Czy będzie sie wykonywał dalej zależy od tego czy warunek będzie spełniony.

//let study = "nie, wyrzucili mnie"

//do {
 //console.log('Idę do szkoły');
//} while (study === true);
//
 
// tablice finansowe //
/*
let Baza = 'Edek,Wacek,Rysiu.....kosztyPosrednie......zyski';
let godziny,godzina,Edek,Wacek,Rysiu;
let pracownicy = [];
let kosztyPosrednie =[];
let zyski = [];
Edek = [];
Edek[0]= "stawka 1/h,ilosc godzin,wyplata";
Edek[1]= 10;
Edek[2]= 40;
Edek[3]= Edek[1]*Edek[2];
Wacek = [];
Wacek[0]= "stawka 1/h,ilosc godzin,wyplata";
Wacek[1]= 5;
Wacek[2]= 40;
Wacek[3]= Wacek[1]*Wacek[2];
Rysiu  = [];
Rysiu [0]= "stawka 1/h,ilosc godzin,wyplata";
Rysiu [1]= 2;
Rysiu [2]= 40;
Rysiu [3]= Rysiu[1]*Rysiu[2];
kosztyPosrednie[0]="pliwo,rachunki,wyplaty,podsumowanie";
kosztyPosrednie[1]= 452;
kosztyPosrednie[2]= 1455;
kosztyPosrednie[3]= Edek[3]+Wacek[3]+Rysiu[3];
kosztyPosrednie[4]=kosztyPosrednie[1]+kosztyPosrednie[2]+kosztyPosrednie[3];
kosztyPosrednie[5]=kosztyPosrednie[4]%22;
zyski[0] = "uslugi,sprzedaz,zwrotyPodatku,podsumowanie";
zyski[1] = 12000;
zyski[2] = 5000;
zyski[3] = 2500;
zyski[4] = (zyski[1]+zyski[2]+zyski[3]);
*/



/*
document.getElementById("add").addEventListener("click", function () {
    var val = parseInt(document.getElementById("input").value);
    if (!isNaN(val)) {
        var sum = parseInt(document.getElementById("result").value);
        if (isNaN(sum)) sum = 0;
        sum += val;
        document.getElementById("result").value = sum;
    }
});
*/
/*
<button type="button" id="btn">
    Kliknij mnie
</button>
document.addEventListener("DOMContentLoaded", function() {

    const btn = document.getElementById('btn');
    console.log(btn.innerText); //Kliknij mnie

});
*/



