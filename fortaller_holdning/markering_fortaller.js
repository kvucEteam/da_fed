/// DATA ARRAYS: 
var textdata_opg1_Array = [
    ["I den store stad, hvor han boede, gik det meget fornøjeligt til, hver dag kom der mange fremmede, en dag kom der to bedragere; de gav sig ud for at være vævere og sagde, at de forstod at væve det dejligste tøj, man kunne tænke sig.", "ydre"],
    ["Ikke alene farverne og mønstret var noget usædvanligt smukt, men de klæder, som blev syet af tøjet, havde den forunderlige egenskab at de blev usynlige for ethvert menneske, som ikke duede i sit embede, eller også var utilladelig dum.", "ydre"],
    ["'Det var jo nogle dejlige klæder,' tænkte kejseren 'ved at have dem på, kunne jeg komme efter, hvilke mænd i mit rige der ikke dur til det embede de har, jeg kan kende de kloge fra de dumme! ja det tøj må straks væves til mig!'", "indre"],
    ["og han gav de to bedragere mange penge på hånden, for at de skulle begynde på deres arbejde. ", "ydre"],
    ["De satte også to vævestole op, lod som om de arbejdede, men de havde ikke det mindste på væven. Rask væk forlangte de den fineste silke, og det prægtigste guld; det puttede de i deres egen pose og arbejdede med de tomme væve, og det til langt ud på natten.", "ydre"],
    ["'Nu gad jeg dog nok vide, hvor vidt de er med tøjet!' tænkte kejseren, men han var ordentligt lidt underlig om hjertet ved at tænke på, at den, som var dum, eller slet passede til sit embede,", "indre"],
    ["ikke kunne se det, nu troede han nok, at han ikke behøvede at være bange for sig selv, men han ville dog sende nogen først for at se, hvorledes det stod sig.", "indre"],
    ["Alle mennesker i hele byen vidste, hvilken forunderlig kraft tøjet havde, og alle var begærlige efter at se, hvor dårlig eller dum hans nabo var.", "indre"],
    ["'Jeg vil sende min gamle ærlige minister hen til væverne!', tænkte kejseren, 'han kan bedst se, hvorledes tøjet tager sig ud, for han har forstand, og ingen passer sit embede bedre end han!'", "indre"],
    ["Nu gik den gamle skikkelige minister ind i salen, hvor de to bedragere sad og arbejdede med de tomme væve.", "ydre"],
    ["'Gudbevares!' tænkte den gamle minister", "indre"],
    ["og spilede øjnene op!", "ydre"],
    ["jeg kan jo ikke se noget!", "indre"],
    ["Men det sagde han ikke.", "ydre"],
    ["Begge bedragerne bad ham være så god at træde nærmere og spurgte, om det ikke var et smukt mønster og dejlige farver. Så pegede de på den tomme væv, og den stakkels gamle minister blev ved at spile øjnene op, men han kunne ikke se noget, for der var ingen ting.", "ydre"],
    ["'Herregud!' tænkte han, 'skulle jeg være dum! Det har jeg aldrig troet, og det må ingen mennesker vide! Skulle jeg ikke du til mit embede? Nej det går ikke an, at jeg fortæller, jeg ikke kan se tøjet!'", "indre"]
];

var textdata_opgaver_Array = Array(textdata_opg1_Array);
var fortaeller_Array = Array("Personal", "Vekslende", "Alvidende");
var forfatter_Array = Array("Uddrag fra <b>Kejserens nye klæder<b/> (1837) af H.C. Andersen", "Uddrag fra Vægten (1996) af Kim Fupz Aakeson.", "Uddrag fra Nørreport (2004) af Katrine Marie Guldager");

var selected_fortaeller = "none";
var fejl = 0;
var fejl_bool = false;
var score = 0;
var correct_words = 0;
var runde = 0;
// INITIER LORTET: 
$(document).ready(function() {
    var txt_1 = getScore("fort3_3_1", "kursist_input");
    var txt_2 = getScore("fort3_3_2", "kursist_input");
    var txt_3 = getScore("fort3_3_3", "kursist_input");

    if (txt_1 != 0) {
        txt_1 = txt_1.replace(/<br\s*[\/]?>/gi, "\n");
        $(".txt_area_1").val(txt_1);
    }
    if (txt_2 != 0) {
        txt_2 = txt_2.replace(/<br\s*[\/]?>/gi, "\n");
        $(".txt_area_2").val(txt_2);
    }
    if (txt_3 != 0) {
        txt_3 = txt_3.replace(/<br\s*[\/]?>/gi, "\n");
        $(".txt_area_3").val(txt_3);
    }

        $(".btn_gem").click(function() {
        var d = new Date();
        var time = d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds();
        $(".btn_gem").css("background-color", "#C915E9");
        $(".btn_gem").html("Gemt");
        $(".gemtxt").html("Din besvarelse er gemt kl. " + time);

 

        setScore("fort3_3_1", $(".txt_area_1").val().replace(/<br\s*[\/]?>/gi, "\n"), "kursist_input");
        setScore("fort3_3_2", $(".txt_area_2").val().replace(/<br\s*[\/]?>/gi, "\n"), "kursist_input");
        setScore("fort3_3_3", $(".txt_area_3").val().replace(/<br\s*[\/]?>/gi, "\n"), "kursist_input");
               $(".btn_gem").animate({
            backgroundColor: "#4a4a4a"
        }, 5000, function() {
            $(".btn_gem").html("Gem");
            // Animation complete.
        });

    });

    $(".btn_fortaeller").click(function() {
        $(".btn_fortaeller").removeClass("selected_class");
        selected_fortaeller = $(this).html();
       // alert(selected_fortaeller);
        $(this).addClass("selected_class");
        tjek_svar("btn");
    });

      $(".btn_help").click(function() {
        alertBox("Hjælp", "I teksten er der allerede markeret om det er indre eller ydre synsvinkel, og du kan ved tallene i parentes se lidt nærmere om hvorfor det er en alvidende fortæller. Det vil hjælpe dig til at svare på spørgsmålene.");
    });


    for (var p = 0; p < textdata_opgaver_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }
    //init();
});

function init() {
    //alert(textdata_opg1_Array.length);
    // RUNDE 1:
    //alert ("init: " + runde);
    $(".text_container").html("");
    correct_words = 0;
    score = 0;
    var forfattertxt = forfatter_Array[runde];
    $(".byline").html(forfattertxt);

    for (var i = 0; i < textdata_opgaver_Array[runde].length; i++) {
        //console.log(textdata_opg2_Array[i][0]);
        //Hent tekst fra Array ind i html'eren:
        if (textdata_opgaver_Array[runde][i][1] == "false") {
            $(".text_container").append("<span class='sentence false'>" + textdata_opgaver_Array[runde][i][0] + "</span> ");
        } else {
            $(".text_container").append("<span class='sentence'>" + textdata_opgaver_Array[runde][i][0] + "</span> ");
            correct_words++;
        }
    }
    $(".sentence").click(function(e) {
        $(".sentence").removeClass("selected");
        if (!$(this).hasClass("false") && !$(this).hasClass("correct")) {
            $(this).addClass("selected");
            $(".pop_up_select").remove();
            var number = $(this).index();
            pop_up_select(e, number);
            //$(".correct_words").html($(".correct").length + " ud af " + $(".correct_word").length + " rigtige ord................... (fejl: " + fejl + ")");
        } else if ($(this).hasClass("false")) {
            alertBox("Sætningen indgår ikke i opgaven", "Du har klikket på en sætning, der er dialog. Den siger ikke noget om det er ydre eller indre.");
        }
    });
    $(".sentence").css("cursor", "pointer");
    $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
    $(".prik").eq(runde).html("<img src='prik_lilla.png'>");
    $(".tekst").html("Tekst " + (runde+1));
    //alert("init end")
}

function tjek_svar(input, number) {
    //alert($(".sentence").length);
    //alert("nummer: " + input);
    if (!$(".sentence").eq(number).hasClass("correct")) {
        if ($(".sentence").eq(number).hasClass("ydre") && textdata_opgaver_Array[runde][number][1] == "ydre") {
            score++;
            //alert ("score");
            $(".sentence").eq(number).addClass("correct");
            $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
        } else if ($(".sentence").eq(number).hasClass("indre") && textdata_opgaver_Array[runde][number][1] == "indre") {
            score++;
            $(".sentence").eq(number).addClass("correct");
            $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
            //return ("ud");
        } else {
            $(".sentence").eq(number).fadeTo("slow", 0.5, function() {
                $(".sentence").eq(number).fadeTo("slow",1); 
                $(".sentence").eq(number).removeClass("ydre");
                $(".sentence").eq(number).removeClass("indre");
                // Animation complete.
            });
            fejl++;
        }
        //}
    }
    $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
    //alert ("opdater score");
    if (score >= correct_words && selected_fortaeller == fortaeller_Array[runde]) {
        if (runde < textdata_opgaver_Array.length - 1) {
            runde++;
            alertBox("Rigtigt!", "Du har fundet alle de ord, der identificerer fortælleren, samt fundet den rigtige fortæller. <br/>Er du klar til næste opgave?")
            init();
        } else {
            runde = 0;
            alertBox("SUPER", "Du lavet alle opgaverne korrekt! <br>Du lavede <b>" + fejl + " fejl </b>undervejs");
        }
    } else if (input == "btn" && selected_fortaeller == fortaeller_Array[runde]) {
        //alert("score" + score + " cw: " + correct_words);
        alertBox("Rigtig fortæller", "Du har valgt rigtigt med hvilken person fortælleren er, men du mangler stadig at finde alle de rigtige ord, før du kan gå videre. ");
    } else if (input == "btn" && selected_fortaeller != fortaeller_Array[runde]) {
        alertBox("Forkert fortæller", "Du har valgt den forkerte fortællertype.<br/>Find alle de ord, der viser om teksten har en jeg-fortæller eller en tredjepersonsfortæller.<br/>Klik til sidst på knappen og vælg mellem 1. personsfortæller eller 3. personsfortæller.");
    } else if (input == "sentence" && score >= correct_words && selected_fortaeller != fortaeller_Array[runde]) {
        alertBox("Rigtigt!", "Alle ord er korrekte.<br/>Klik nu på knappen og vælg mellem 1. personsfortæller eller 3. personsfortæller.");
    } else {
        console.log("no avail..");
    }
    //if (score >= correct_words && )
}

function pop_up_select(e, number) {
    $('.pop_up_select').remove();
    //alert (e.index());
    var parentOffset = $(".container").offset();
    var relX = e.pageX - parentOffset.left;
    var relY = e.pageY - parentOffset.top;
    $(".container").append($("<div class='pop_up_select'><div class='arrow_up'></div><div class='lex'>Vælg synsvinkel</div><div class='ydre_select'>Ydre</div><div class='indre_select'>Indre</div><br></div>").css({
        left: relX - 82,
        top: relY + 32
    }));
    $(".pop_up_select").draggable();
    $(".pop_up_select").click(function(e) {
        //alert("number:  " + number);
        var classString = e.target.className;
        if (classString == "ydre_select") {
            $(".sentence").eq(number).removeClass("indre");
            $(".sentence").eq(number).addClass("ydre");
        } else if (classString == "indre_select") {
            $(".sentence").eq(number).removeClass("ydre");
            $(".sentence").eq(number).addClass("indre");
        }
        $('.pop_up_select').remove();
        $(".sentence").removeClass("selected");
        tjek_svar("sentence", number);
    });
}

function pop_up_remove() {
    $('.pop_up_select').remove();
}