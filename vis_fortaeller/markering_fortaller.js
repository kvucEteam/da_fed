/// DATA ARRAYS: 
var textdata_opg_Array = [
    [1, "Uddrag fra novellen <b>Søvngænger</b> af Jan Sonnergaard", "Hendes smil forsvinder lidt efter lidt og til sidst ser hun forundret på ham og kan ikke lade være med at spørge om han af en eller anden grund er blevet vred på hende og helst vil have at hun går igen. Og jeg der blev så glad for se dig, siger hun skuffet og han ser udeltagende på hende. Hun forstår ikke med sin bedste vilje hvad der er sket. Han kom i deres hjem stort set hver dag i mere end fire år."],
    [0, "Uddrag fra romanen <b>Oh, Romeo</b> af Merete Pryds Helle", "Jeg greb mig i at køre min finger langs kanterne af mit kranie under håret, mens jeg skrev. Jeg ved ikke, hvad det er, jeg har med fontaneller; det er så praktisk evolutionsmæssigt, men mine tanker bliver overskyllet af historier om barnepiger, der trykker små børn på det bløde punkt for at få dem rolige. Jeg forsøgte at trykke lidt til rundt omkring, men jeg er naturligvis voksen og mit kranie lukket."],
    [1, "Uddrag fra novellen <b>Vægten</b> (1996) af Kim Fupz Aakeson", "Jørgen Haagensen sad med telefonen og skammede sig over at han ikke anede hvad han skulle gøre, hvem man snakkede med og osse over sit forehavende. Han formulerede sig uklart og belv sendt de forkerte steder hen.<br/> 'Det er Jørgen Haagensen igen,' sagde han til en dame, han allerede havde haft fat på én gang.<br/> 'Ja?'<br/> Inger rodede med bøjlerne i entreen, tandlægebesøgene var dukket op igen, hun tog hele tiden frakke på for at komme af sted, blev forvirret over at døren var låst og kom ind i stuen og sværmede om ham.<br/> 'Kan de tale lidt højere,' bad damen.<br/> 'Det drejer sig om en plejehjemsplads,' sagde han.<br/> 'Vil de tale med Plejehjemsadministrationen eller med Hjemmeplejefunktionen?'<br/> 'Det ved jeg ikke,' sagde han ulykkeligt."],
    [0, "Uddrag fra <b>Drivhuset</b> (1965) af Anders Bodelsen", "Vi rullede os ind mod hinanden og et øjeblik efter kyssede vi hinanden med lukkede munde. Inger havde lukket øjnene, jeg kiggede på hendes ansigt, så lukkede jeg også mine. Lidt efter hørte vi dem langt borte kalde vores navne, legen var slut, de skulle op og kaldte Kom frit frem. Ingers krop var som min, og da min hånd endelig søgte hen hvor jeg vidste vi skulle være forskellige, strejfede den hendes på vej mod mig. Længe endnu hørte vi dem kalde efter os i de andre haver."],
];
var korrekte_ord_Array_1pers = Array("jeg", "mig", "min", "mit", "mine", "vi", "os", "vores");
var korrekte_ord_Array_3pers = Array("han", "hun", "den", "det", "ham", "hende", "den", "det", "hans", "hendes", "dens", "dets", "de", "dem", "deres");
var alle_textdata_Array = Array();
var korrekte_ord_Array = Array(korrekte_ord_Array_1pers, korrekte_ord_Array_3pers);
var antal_korrekte = 0;
var fejl = 0;
var runde = 0;
var score = 0;
var selected_pers = "none";
// INITIER LORTET: 
$(document).ready(function() {
    for (var p = 0; p < textdata_opg_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }
    init();
    $(".btn_1pers").click(function() {
        selected_pers = 0;
        $(this).addClass("selected_class");
        $(".btn_3pers").removeClass("selected_class");
        tjek_svar("btn");
    });
    $(".btn_3pers").click(function() {
        selected_pers = 1;
        $(this).addClass("selected_class");
        $(".btn_1pers").removeClass("selected_class");
        tjek_svar("btn");
    });
    $(".btn_help").click(function() {
        alertBox("Hjælp", "Find alle de ord, der viser om teksten har en jeg-fortæller (jeg, mig, min, mit, mine, vi, os, vores) eller en tredjepersonsfortæller (han, hun, den, det, ham, hende, den, det, hans, hendes, dens, dets, de, dem, deres). <br/>Tælleren under tekst-uddraget viser dig, hvor mange ord du mangler at finde.<br/>Til sidst skal du vælge på knapperne til venstre om teksten er skrevet med 1. personsfortæller eller 3. personsfortæller.");
    });
});

function init() {
$(".tekst").html("Tekst " + (runde+1)); 
    $(".text_container").html("").fadeOut(300, function() {
        $(".text_container").fadeIn(500); // Animation complete.
    });
    $(".selected_class").removeClass("selected_class");
    fejl = 0;
    score = 0;
    var type = textdata_opg_Array[runde][0];
    $(".prik").eq(runde).html("<img src='prik_lilla.png'>")
    var forfattertxt = textdata_opg_Array[runde][1];
    $(".byline").html(forfattertxt);
    //alert (textdata_opg_Array[0]); 
    // RUNDE 1:
    //Hent tekst fra Array ind i html'eren:
    console.log(textdata_opg_Array[runde][2]);
    //alert(words);
    var matches = textdata_opg_Array[runde][2].split(/'/);
    for (var m = 0; m < matches.length; m++) {
        if (m % 2 == 1) {
            $(".text_container").append("<span class ='citat'>'" + matches[m] + "'</span>");
        } else {
            var words = matches[m].split(" ");
            for (var u = 0; u < words.length; u++) {
                //alert(words[u][0].tagName);
                var word = words[u].replace(".", "").replace(",", "").toLowerCase();
                if (korrekte_ord_Array[type].indexOf(word) > -1) {
                    $(".text_container").append("<span class='word correct_word'>" + words[u] + "</span> ");
                } else {
                    $(".text_container").append("<span class='word'>" + words[u] + "</span> ");
                }
            }
        }
    }
    antal_korrekte = $(".correct_word").length;
    $(".citat").click(function() {
        alertBox("OBS", "Selvom ordet er rigtigt, betyder det ikke noget for fortælleren, er ordet i citat og indgår ikke i opgaven");
    });
    $(".word").click(function() {
        var selected_word = $(this).html().replace(".", "").replace(",", "").replace("<br>", "").toLowerCase();
        
        if (korrekte_ord_Array[type].indexOf(selected_word) > -1) {
            $(this).addClass("correct");
            $(this).removeClass("word");
            score = $(".correct").length;
        } else {
            fejl++;
            count_up($(".num_fejl"));
        }
        //alert (word.length);
           $(".correct_words").html("<b>Du har " + score + " ud af " + antal_korrekte + " rigtige </b><br/>(Du har klikket forkert <span class='num_fejl'>" + fejl + "</span> gange)");
      tjek_svar("word");
    });
    $(".word").css("cursor", "pointer");
    $(".word").hover(function() {
        $(this).css("background-color", "#F7DCFC");
    }, function() {
        $(this).css("background-color", "transparent");
        if (!$(this).hasClass("correct")) {
        } else {
            $(this).css("color", "white").css("background-color", "#E9A1F6");
        }
    });
    $(".correct_words").html("<b>Du har " + score + " ud af " + antal_korrekte + " rigtige </b><br/>(Du har klikket forkert <span class='num_fejl'>" + fejl + "</span> gange)");
}

function tjek_svar(input) {
    //alert(selected_pers + " , " + textdata_opg_Array[runde][0])
    if (score >= antal_korrekte && selected_pers == textdata_opg_Array[runde][0]) {
        if (runde < textdata_opg_Array.length - 1) {
            runde++;
            alertBox("Rigtigt!", "Du har fundet alle de ord, der identificerer fortælleren, samt fundet den rigtige fortæller.")
            init();
        } else {
            runde = 0;
            alertBox("SUPER", "Du lavet alle opgaverne korrekt! <br>Du lavede <b>" + fejl + " fejl </b>undervejs");
        }
        init();
    } else if (input == "btn" && selected_pers == textdata_opg_Array[runde][0]) {
        alertBox("Rigtig fortæller", "Du har den rigtige fortæller, men du mangler stadig at finde alle de rigtige ord, før du kan gå videre. ");
    } else if (input == "btn" && selected_pers != textdata_opg_Array[runde][0]) {
        alertBox("Forkert fortæller", "Du har valgt den forkerte fortællertype.<br/>Find alle de ord, der viser om teksten har en jeg-fortæller eller en tredjepersonsfortæller.<br/>Klik til sidst på knappen og vælg mellem 1. personsfortæller eller 3. personsfortæller.");
    } else if (input == "word" && score >= antal_korrekte && selected_pers != textdata_opg_Array[runde][0]) {
        alertBox("Rigtigt!", "Alle ord er korrekte.<br/>Klik nu på knappen og vælg mellem 1. personsfortæller eller 3. personsfortæller.");
    }
}

function count_up(object) {
object.css("opacity", 0);
  object.animate({
    opacity: 1
  }, 800, function() {
    // Animation complete.
  });
}


