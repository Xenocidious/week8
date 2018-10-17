document.write("10 + 12 = " + plus(10, 12) + "<br>")
document.write("58 - 34 = " + min(58 ,34) + "<br>")
document.write("6 x 7 = " + keer(6 , 7) + "<br>")
document.write("144 : 12 = " + delen(144 , 12) + "<br>")
document.write("12 + 1 = " + optel(12 , 1) + "<br>")
document.write("34 - 1 = " + aftrek(34 , 1) + "<br>")


function plus(cijfer1, cijfer2) {
    return cijfer1 + cijfer2;
}

function min(cijfer1, cijfer2) {
    return cijfer1 - cijfer2;
}

function keer(cijfer1, cijfer2) {
    return cijfer1 * cijfer2;
}

function delen(cijfer1, cijfer2) {
    return cijfer1 / cijfer2;
}

function optel(cijfer1, cijfer2) {
    return ++cijfer1;
}

function aftrek(cijfer1, cijfer2) {
    return --cijfer1;
}