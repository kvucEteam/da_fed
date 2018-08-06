var array_1 = new Array("To bondemænd står og snakker.", "Den ene: Ryger dine køer?", "Den anden: Nej.", "Den ene: Så er der ild i din lade.");

var array_2 = new Array("En schæferhund kommer ind på et telegrafkontor og dikterer: »Vov. Vov. Vov. Vov. Vov. Vov. Vov. Vov. Vov!«.", "Telegrafisten siger: »Her er kun ni ord. Du kan sende endnu et 'vov' for samme pris«.", "Hvortil hunden svarer:»Jamen, det vil jo overhovedet ikke give nogen mening«.");

var array_3 = new Array("To amerikanere fra New Jersey er på jagt ude i skoven, da den ene pludselig falder om. Han trækker tilsyneladende ikke vejret, og hans øjne er helt glasagtige.", "Jagtkammeraten hiver sin mobiltelefon frem, ringer 112, og stammer: »Min kammerat er død. Hvad skal jeg gøre?«.", "Telefonisten svarer: »Tag det helt roligt. Jeg skal nok hjælpe dig. Men først må vi være helt sikre på, at han er død«. Der bliver tavst i røret. Så lyder der et skud.", "Jægeren kommer tilbage på linjen og siger: »O.k. så er han død og hvad så?«.");

var array_4 = new Array("Der var engang en æbleplukker. Han var den bedste æbleplukker i hele landet selvom hans ene arm sad omvendt og var helt ubrugelig.", "En dag da han var ude for at plukke æbler fik han øje på et meget smukt og meget rødt æble allerøverst oppe i et træ. Det måtte han have fat i.", "Han begyndte at klatre op ad stigen og da han kom op til toppen af stigen måtte han strække sig alt hvad han kunne.", "Han skulle lige til at plukke æblet da det pludselig sagde:", "”Nej, nej, du må ikke plukke mig!” Hvis du lader være med at plukke mig får du tre ønsker.", "Det lød jo ikke så dårligt, tænkte æbleplukkeren.", "Så han lod æblet hænge og sagde til det:", "Jamen, så ønsker jeg at den ene arm bliver som den anden”.", "Så vendte hans gode arm lige pludselig som den anden og var nu også helt ubrugelig.", "”Nej!, for pokker, det skal være omvendt!”", "Så sørgede æblet for at begge hans arme sad omvendt på, men stadig var lige ubrugelige.", "”Nej, idiot!”.", "Den stakkels æbleplukker blev tryllet om til en lallende idiot af æblet.");

var cloned_Array = new Array();

var alle_textdata_Array = Array(array_1, array_2, array_3, array_4);

for (var i = 0; i < alle_textdata_Array.length; i++) {
    var clone = alle_textdata_Array[i].slice(0);
    cloned_Array.push(clone);
    alle_textdata_Array[i] = shuffleArray(alle_textdata_Array[i]);
}

var antal_korrekte = 0;
var runde = 0;
var score = 0;


// INITIER LORTET: 
$(document).ready(function() {
    for (var p = 0; p < alle_textdata_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }
    init();
    $(".btn_tjek").click(function() {
        //alert("clicked_tjek!");

        tjek_svar("btn");
    });
    $(".btn_help").click(function() {
        alertBox("Hjælp", "Du skal sætte vitsen sammen i den rigtige rækkefølge. Når alle dele er placeret rigtigt, kan du trykke på Næste-knappen.");
    });
    $(".btn_next").click(function() {
        if (runde > alle_textdata_Array.length - 2) {
            alertBox("Fint arbejde.", "Du har fået alle vitserne puslet på plads i rigtig rækkefølge");
            runde = 0
        } else {
            runde++;
        }
        init();

    });

});

function init() {
    $(".btn_next").fadeOut(0);
    $(".tekst").html("Vittighed " + (runde + 1));
    $(".inner_container").html("").fadeOut(0, function() {
        $(".inner_container").fadeIn(500); // Animation complete.
    });
    for (var i = 0; i < alle_textdata_Array[runde].length; i++) {
        $(".inner_container").append("<div class ='vits_container'>" + alle_textdata_Array[runde][i] + "</div>");
    }

    $(".inner_container").sortable({
        update: function(event, ui) {
            console.log('update: ' + ui.item.index())
        },
        start: function(event, ui) {
            console.log("dragstart");
            ui.item.addClass("shadow");
        },
        stop: function(event, ui) {
            ui.item.removeClass("shadow");
            console.log("dragstart");
        }


    });

    score = 0;
    $(".prik").eq(runde).html("<img src='prik_lilla.png'>")
    antal_korrekte = $(".correct_word").length;
}

function tjek_svar(input) {
    score = 0;
    $('.vits_container').each(function() {
        var denne = $(this); //.index();
        var indeks = denne.index();
        console.log(denne.html() + ", " + cloned_Array[runde][indeks])
        if (denne.html() == cloned_Array[runde][indeks]) {
            score++;
        }
    });
    if (score == cloned_Array[runde].length) {
        alertBox("Perfekt", "Du har sammensat vittigheden rigtigt. Klik på Næste-knappen for at fortsætte.");
        $(".btn_next").fadeIn();
    } else {
        alertBox("Status", "Du har " + score + " ud af " + cloned_Array[runde].length + " rigtige");
    }
}
