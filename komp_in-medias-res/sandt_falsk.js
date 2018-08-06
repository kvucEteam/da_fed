var array_1 = new Array(true, "Uddrag af novellen <b>Slik</b> (2006) af Naja Marie Aidt", "Vi arbejde os gennem den lange indkøbsseddel og endte til sidste ved hylderne med slik. Vi købte to poser blandet. Du lagde dem ned i den store flettede indkøbskurv, som din mor har købt på Bali. Vi tog også en chokoladebar, pakkede den ud og brækkede den midt over. Vi nærmest slugte den søde, klistrende masse. Og så gik vi op til kassen og begynder at læsse varerne op på båndet. Du huskede at lægge papiret fra chokoladebaren op.", "Det her er en in medias res-begyndelse. Der skrives ikke direkte noget om personer, sted eller konflikt. Det ligger mellem linjerne hvor fortællingen finder sted, men siges altså ikke direkte.");
var array_2 = new Array(false, "Uddrag fra eventyret <b>Prinsessen på ærten</b> (1835) af H.C. Andersen", "Der var engang en prins; han ville have sig en prinsesse, men det skulle være en rigtig prinsesse. Så rejste han hele verden rundt, for at finde sådan en, men alle vegne var der noget i vejen, prinsesser var der nok af, men om det var rigtige prinsesser, kunne han ikke ganske komme efter, altid var der noget, som ikke var så rigtigt. Så kom han da hjem igen og var så bedrøvet, for han ville så gerne have en virkelig prinsesse.", "Dette er ikke en in medias res-begyndelse. Eventyr starter aldrig in medias res, men oftest med indledningsvis at etablere hvem hovedpersonerne er, sted, miljø og konflikter.");
var array_3 = new Array(false, "Uddrag fra romanen <b>Liberty</b> (2009) af Jakob Ejersbo", "Tropisk varme svøber sig om mig, da jeg træder ud af flyveren - gennem skumringen kan jeg se Kilimanjaros hvide snekrone i det fjerne. Foran den lave lufthavnsbygning hænger en flok sorte mænd og ryger cigaretter ved et par arrede bagagevogne. “Velkommen til Afrika”, siger min far og lægger en hånd på min skulder, så jeg går ned af trinnene. Flymotorerne er stoppet. Den eneste lyd er cikader. Lufthavnen har kun en enkelt landingsbane, og der er ikke andre fly end vores.", "Dette er ikke en in medias res-begyndelse, fordi både hovedpersoner og sted introduceres");
var alle_textdata_Array = Array(array_1, array_2, array_3);
var antal_korrekte = 0;
var runde = 0;
var score = 0;
var ready = false;
// INITIER LORTET: 
$(document).ready(function() {
    for (var p = 0; p < alle_textdata_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }
    init();
    $(".btn_help").click(function() {
        alertBox("Hjælp", "In medias res-begyndelse indebærer at man som læser dumper midt ned i handlingen og ikke har nogen forudgående viden om personer, sted eller konflikt.");
    });
    $(".btn_ja").click(function() {
        ready = true;
        if (alle_textdata_Array[runde][0] == true) {
            alertBox("Det er rigtigt", alle_textdata_Array[runde][3]);
        } else {
            alertBox("Det er ikke rigtigt", alle_textdata_Array[runde][3]);
        }
    });
    $(".btn_nej").click(function() {
        ready = true;
        if (alle_textdata_Array[runde][0] == false) {
            alertBox("Det er rigtigt", alle_textdata_Array[runde][3]);
        } else {
            alertBox("Det er ikke rigtigt", alle_textdata_Array[runde][3]);
        }
    });
    $(".overlay").click(function() {
        if (ready == true) {
            runde++;
            init();
            ready = false;
        }
    });
});

function init() {
    if (runde < alle_textdata_Array.length) {
        //alert("runde: " + runde)
        $(".btn_next").fadeOut(0);
        $(".tekst").html("Tekst " + (runde + 1));
        $(".text_container").html("").fadeOut(0, function() {
            $(".text_container").fadeIn(500); // Animation complete.
        });
        $(".forfatter").html(alle_textdata_Array[runde][1])
        $(".text_container").append(alle_textdata_Array[runde][2]);
        score = 0;
        $(".prik").eq(runde).html("<img src='prik_lilla.png'>")
        antal_korrekte = $(".correct_word").length;
    } else {
        runde = 0;
        $(".prikker").html("");
         for (var p = 0; p < alle_textdata_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }        
        init();
        
    }
}

function tjek_svar(input) {
    score = 0;
    alertBox("Eventyret er i korrekt rækkefølge", "Klik på næste for at fortsætte.");
    alertBox("Status", "Du har " + score + " ud af " + cloned_Array[runde].length + " rigtige");
}