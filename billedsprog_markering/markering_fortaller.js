/// DATA ARRAYS: 
var textdata_opg1_Array = [
    ["Vi danskere har altid set os selv som", "no_bs"],
    ["et flittigt og foretagsomt folk.", "no_bs"],
    ["Det samfund, som vi har i Danmark,", "no_bs"],
    ["er ikke kommet af sig selv.", "no_bs"],
    ["Vort samfund er et resultat af den indsats,", "no_bs"],
    ["som vi har ydet gennem tiderne for at forme fremtid og fremskridt:", "no_bs"],
    ["I krisetider kan vanskeligheder virke uoverskuelige,", "no_bs"],
    ["og forhindringer føles som stopklodser,", "bs"],
    ["ikke til at komme udenom.", "no_bs"],
    ["Derfor kan det være svært at se hen til morgendagen,", "bs"],
    ["hvis man selv må stå udenfor,", "bs"],
    ["mens hjulene ruller,", "bs"],
    ["og man er uden arbejde eller frygter for at miste sit job.", "no_bs"],
    ["Vort samfund gør i vor tid en stor indsats for at imødegå disse problemer.", "no_bs"],
    ["Dog skal vi passe på med ikke alene at overlade det til samfundet at klare ærterne.", "bs"],
    ["Vi må altid begynde med os selv,", "no_bs"],
    ["med vore nærmeste og med dem,", "no_bs"],
    ["vi møder på vor vej.", "bs"],
    ["Den enkelte kan betyde uendeligt meget ved en opmuntrende bemærkning,", "no_bs"],
    ["en hjælpende hånd,", "bs"],
    ["en hensynsfuld respekt for det andet menneske.", "no_bs"],

    ["Det har altid været vor styrke her i Danmark,", "no_bs"],
    ["at vi kender hinanden på kryds og tværs,", "bs"],
    ["og at selv de geografiske afstande er små.", "no_bs"],
    ["Den krise, som præger verdenssamfundet i disse år,", "no_bs"],
    ["og som også mærkes her hos os,", "no_bs"],
    ["bør kalde på al vor opfindsomhed og virketrang til gavn for hver enkelt og for hele vort samfund:", "no_bs"],
    ["for vort lands fremtid.", "no_bs"]
];

var textdata_opg2_Array = [
    ["Tilbage igen, denne gang iført det vildeste bling <br>", "no_bs"],
    ["En vielsesring<br>", "no_bs"],
    ["Jeg troede aldrig jeg sku’ falde i den fælde<br>", "bs"],
    ["Først knalde og så knæl, men det et kald i min sjæl<br>", "bs"],
    ["Jeg cirka li’så bange for faste rammer<br>", "bs"],
    ["Som for at ha’ noget godt og så kaste det fra mig<br>", "bs"],
    ["Kom og sut min sjæl, kys mine komplekser<br>", "bs"],
    ["Knus mit hjerte til tusinde tekster<br>", "bs"],
    ["For jeg bare en slave i din frugthave<br>", "bs"],
    ["La’ mig plante en hel bande i din smukke mave<br>", "bs"],
    ["For jeg blev hook’ed efter et enkelt hvæs<br>", "bs"],
    ["Jeg elsker dig englefjæs<br>", "bs"],
    ["For det her har jeg aldrig turde tro på<br>", "bs"],
    ["Har altid været ræd for at få ro på<br>", "bs"],
    ["Men det den måde hun får mig til at gro på<br>", "bs"],
    ["Når to brune øjne møder to blå<br>", "no_bs"],
    ["I et englefjæs<br>", "no_bs"],
    ["Så hey players, kør jeres single-ræs<br>", "no_bs"],
    ["Så chiller jeg med englefjæs<br>", "no_bs"]
];
var textdata_opg3_Array = [
    ["Hun er sød,", "no_bs"],
    ["Hun er blød,<br>", "no_bs"],
    ["Hun er smal om sit Liv;", "no_bs"],
    ["Hun er bøielig<br>", "bs"],
    ["Og føielig", "no_bs"],
    ["Og rank som et Siv<br>", "bs"],
    ["Hendes Kind", "no_bs"],
    ["Er saa lind,<br>", "no_bs"],
    ["Og som Rosens saa varm;", "bs"],
    ["Hun er nysselig<br>", "no_bs"],
    ["Og kysselig", "no_bs"],
    ["Paa Mund, Haand og Arm.<br>", "no_bs"],

    ["Ak, hvor net,", "no_bs"],
    ["Og hvor let<br>", "no_bs"],
    ["Som et svævende Fnug,", "bs"],
    ["Kan hun neie sig<br>", "no_bs"],
    ["Og dreie sig", "no_bs"],
    ["Paa Foden saa smuk.<br>", "no_bs"],
    ["Hvor hun stod", "no_bs"],
    ["Paa sin Fod,<br>", "no_bs"],
    ["Hvor hun gik og hun sprang,", "no_bs"],
    ["Var hun nydelig<br>", "no_bs"],
    ["Og frydelig", "no_bs"],
    ["Som Fløiternes Klang.<br>", "bs"],

    ["Og saa kjæk", "no_bs"],
    ["Som en Bæk<br>", "bs"],
    ["Mellem Blomsternes Flok,", "no_bs"],
    ["Glimter Øiets Blink<br>", "no_bs"],
    ["Fornøiet, flink", "no_bs"],
    ["Bag nødbrune Lok.<br>", "no_bs"],
    ["Hendes Røst", "no_bs"],
    ["Er min Trøst<br>", "no_bs"],
    ["Midt i Sorgernes Nat; -", "bs"],
    ["Al den Herlighed<br>", "no_bs"],
    ["Og Kjærlighed", "no_bs"],
    ["Er min søde Skat!", "no_bs"]
];
var textdata_opgaver_Array = Array(textdata_opg1_Array, textdata_opg2_Array, textdata_opg3_Array);
var fortaeller_Array = Array("Personal", "Vekslende", "Alvidende");
var forfatter_Array = Array("Uddrag fra <b>Dronning Margrethes nytårstale</b> (2012)", "Uddrag fra <b>Englefjæs</b> (2011) af Per Vers", "<b>Min skat</b> (1840) af Christian Winther");

var selected_fortaeller = "none";
var fejl = 0;
var fejl_bool = false;
var score = 0;
var correct_words = 0;
var runde = 0;
// INITIER LORTET: 
$(document).ready(function() {
    $(".btn_fortaeller").click(function() {
        $(".btn_fortaeller").removeClass("selected_class");
        selected_fortaeller = $(this).html();
        // alert(selected_fortaeller);
        $(this).addClass("selected_class");
        tjek_svar("btn");
    });

    $(".btn_help").click(function() {
        alertBox("Hjælp", "Klik på en sætning i teksten. Beslut dig for om der er brugt billedsprog i sætningen eller ej.<br/>Tælleren under tekst-uddraget viser dig, hvor mange sætninger du mangler at få rigtigt.");
    });


    for (var p = 0; p < textdata_opgaver_Array.length; p++) {
        $(".prikker").append("<div class='prik'><img src='prik_grey.png'></div>")
    }
    init();
     start_pop_up(0);
});

function init() {
    //alert(textdata_opg1_Array.length);
    // RUNDE 1:
    //alert ("init: " + runde);
    fejl = 0; 
    $(".text_container").html("");
    correct_words = 0;
    score = 0;
    var forfattertxt = forfatter_Array[runde];
    $(".byline").html(forfattertxt);

    for (var i = 0; i < textdata_opgaver_Array[runde].length; i++) {
        //console.log(textdata_opg2_Array[i][0]);
        //Hent tekst fra Array ind i html'eren:
        if (textdata_opgaver_Array[runde][i][1] == "falsk") {
            $(".text_container").append("<span class='sentence falsk'>" + textdata_opgaver_Array[runde][i][0] + "</span> ");
        } else {
            $(".text_container").append("<span class='sentence'>" + textdata_opgaver_Array[runde][i][0] + "</span> ");
            correct_words++;
        }
    }
    $(".sentence").click(function(e) {
        $(".sentence").removeClass("selected_text");
        if (!$(this).hasClass("falsk") && !$(this).hasClass("correct")) {
            $(this).addClass("selected_text");
            $(".pop_up_select").remove();
            var number = $(this).index();
            pop_up_select(e, number);
            //$(".correct_words").html($(".correct").length + " ud af " + $(".correct_word").length + " rigtige ord................... (fejl: " + fejl + ")");
        } else if ($(this).hasClass("falsk")) {
            alertBox("Sætningen indgår ikke i opgaven", "Du har klikket på en sætning, der er dialog. Den siger ikke noget om det er ydre eller indre.");
        }
    });
    $(".sentence").css("cursor", "pointer");
    $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
    $(".prik").eq(runde).html("<img src='prik_lilla.png'>");
    $(".tekst").html("Tekst " + (runde + 1));
    //alert("init end")
}

function tjek_svar(input, number) {
    //alert($(".sentence").length);
    //alert("nummer: " + input);
    if (!$(".sentence").eq(number).hasClass("correct")) {
        if ($(".sentence").eq(number).hasClass("bs") && textdata_opgaver_Array[runde][number][1] == "bs") {
            score++;
            //alert ("score");
            $(".sentence").eq(number).addClass("correct");
            $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
        } else if ($(".sentence").eq(number).hasClass("no_bs") && textdata_opgaver_Array[runde][number][1] == "no_bs") {
            score++;
            $(".sentence").eq(number).addClass("correct");
            $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
            //return ("ud");
        } else {
            $(".sentence").eq(number).fadeTo("slow", 0.5, function() {
                $(".sentence").eq(number).fadeTo("slow", 1);
                $(".sentence").eq(number).removeClass("bs");
                $(".sentence").eq(number).removeClass("no_bs");
                // Animation complete.
            });
            fejl++;
        }
        //}
    }
    $(".correct_words").html("<b>Du har " + score + " ud af " + correct_words + " rigtige </b><br/><em>(Du har klikket forkert " + fejl + " gange)</em>");
    //alert ("opdater score");
    if (score >= correct_words) {
        if (runde < textdata_opgaver_Array.length - 1) {
            runde++;
            alertBox("Rigtigt!", "Du har angivet alle sætninger korrekt. ")
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
    if (relX < 86) {relX = 86}
    $(".container").append($("<div class='pop_up_select'><div class='arrow_up'></div><div class='lex'>Er det billedsprog?</div><div class='bs_select'>JA</div><div class='no_bs_select'>NEJ</div><br></div>").css({
        left: relX - 17,
        top: relY + 60
    }));
    $(".pop_up_select").draggable({containment: ".text_container" });
    $(".pop_up_select").click(function(e) {
        //alert("number:  " + number);
        var classString = e.target.className;
        if (classString == "bs_select") {
            $(".sentence").eq(number).removeClass("no_bs");
            $(".sentence").eq(number).addClass("bs");
        } else if (classString == "no_bs_select") {
            $(".sentence").eq(number).removeClass("bs");
            $(".sentence").eq(number).addClass("no_bs");
        }
        $('.pop_up_select').remove();
        $(".sentence").removeClass("selected_text");
        tjek_svar("sentence", number);
    });
}
function start_pop_up(number) {
$(".sentence").eq(0).addClass("selected_text");
    $('.pop_up_select').remove();
    $(".container").append($("<div class='pop_up_select'><div class='arrow_up'></div><div class='lex'>Er det billedsprog?</div><div class='bs_select'>JA</div><div class='no_bs_select'>NEJ</div><br></div>").css({
       left: 124,
        top: 304
    }));
    $(".pop_up_select").draggable();
    $(".pop_up_select").click(function(e) {
        //alert("number:  " + number);
          var classString = e.target.className;
        if (classString == "bs_select") {
            $(".sentence").eq(number).removeClass("no_bs");
            $(".sentence").eq(number).addClass("bs");
        } else if (classString == "no_bs_select") {
            $(".sentence").eq(number).removeClass("bs");
            $(".sentence").eq(number).addClass("no_bs");
        }
        $('.pop_up_select').remove();
        $(".sentence").removeClass("selected_text");
        tjek_svar("sentence", number);
    });
}
function pop_up_remove() {
    $('.pop_up_select').remove();
}
