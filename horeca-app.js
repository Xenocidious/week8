var prijsBier = 3.50;
var prijsWijn = 4.50;
var prijsFris = 2.50;

var aantalBier = 0;
var aantalWijn = 0;
var aantalFris = 0;

var prijsschaal8 = 4.00;
var prijsschaal16 = 8.00;

var aantalschalenvan8 = 0;
var aantalschalenvan16 = 0;

var totaalprijsFris = 0;
var totaalprijsBier = 0;
var totaalprijsWijn = 0;
var totaalprijsSchaal8 = 0;
var totaalprijsSchaal16 = 0;

while (keuze != "stop"){
    var keuze = prompt("Welke bestelling wilt u toevoegen?");
    if (keuze == "bier") {
        invoer = parseInt(prompt("Hoeveel bier wilt u toevoegen aan uw bestelling"));
        aantalBier= aantalBier + invoer;
        bereken();
        bier.innerHTML = (aantalBier + "x" + " Bier = "+ "€" + totaalprijsBier);
        niks.innerHTML = ("");
    }
    else if (keuze == "wijn") {
        invoer = parseInt(prompt("Hoeveel wijn wilt u toevoegen aan uw bestelling"));
        aantalWijn= aantalWijn + invoer;
        bereken();
        wijn.innerHTML = (aantalWijn + "x" + " Wijn = "+ "€" + totaalprijsWijn);
        niks.innerHTML = ("");
    }
    else if (keuze == "fris") {
        invoer = parseInt(prompt("Hoeveel fris wilt u toevoegen aan uw bestelling"));
        aantalFris = aantalFris + invoer;
        bereken();
        fris.innerHTML = (aantalFris + "x" + " Fris = " + "€" + totaalprijsFris);
        niks.innerHTML = ("");
    }
    else if (keuze == "snack"){
        var keuze = prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)");
        if (keuze == "8"){
            invoer = parseInt(prompt("kies hoeveel schalen " + keuze + " uw wilt."));
            aantalschalenvan8 = aantalschalenvan8 + invoer;
            bereken();
            schaal8.innerHTML = ("<br>" + aantalschalenvan8 + 'x' + " schaal van 8 = " + "€" + totaalprijsSchaal8);
            niks.innerHTML = ("");
        }
        else if (keuze == "16"){
            invoer = parseInt(prompt("Hoeveel bitterbalschalen van 16 stuks wilt u bestellen?"));
            aantalschalenvan16 = aantalschalenvan16 + invoer;                                                                                
            bereken();
            schaal16.innerHTML = (aantalschalenvan16 + "x" + " schaal van 16 = " + "€" + totaalprijsSchaal16);
            niks.innerHTML = ("");
        }
        else if (keuze == "stop"){
            totaalprijs();
        }
        else{
            alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");
        }
    }
    else if (keuze == "stop"){
        totaalprijs();
    }
    else{
        alert("U heeft een ongeldige invoer gedaan. Uw bestelling kan niet worden toegevoegd.");   
    }
    function bereken(){
    totaalprijsFris = prijsFris * aantalFris;
    totaalprijsBier = prijsBier * aantalBier;
    totaalprijsWijn = prijsWijn * aantalWijn;
    totaalprijsSchaal8 = prijsschaal8 * aantalschalenvan8;
    totaalprijsSchaal16 = prijsschaal16 * aantalschalenvan16;
    }
    function totaalprijs(){
        totaalprijs = totaalprijsFris + totaalprijsBier + totaalprijsWijn + totaalprijsSchaal8 + totaalprijsSchaal16;
        totaal.innerHTML = ("Rekening:"+"<br>" + "€" + totaalprijs);
    }
}