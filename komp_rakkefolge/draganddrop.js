var array_1 = new Array("Der var engang en lille pige, hvis far og mor var døde. Hun var så fattig, at hun ikke havde en stue, hun kunne være i, og ikke engang en lille seng, hun kunne sove i. Til sidst havde hun ikke andet tilbage end klæderne på kroppen og et lille stykke brød, som en medlidende sjæl havde givet hende. Men hun var god og from, og da hun var så ene i verden, gik hun ud på marken og bad til Gud.", "Der mødte hun en gammel mand som sagde: 'Giv mig lidt at spise, jeg er så sulten.' Hun rakte ham sit lille stykke brød og sagde: 'Gud velsigne dig,' og gik videre. Lidt efter mødte hun et lille barn, som grædende sagde: 'Jeg fryser sådan om hovedet, giv mig noget, jeg kan tage på.' Hun tog da sin hue af og rakte hende den.", "Lidt efter mødte hun igen en lille pige, som frøs, fordi hun ikke havde noget kjoleliv på. Hun tog da sit eget af og gav hende og lidt efter gav hun også sit skørt bort.", "Til sidst kom hun ind i en stor, mørk skov, og der mødte hun en, som bad om hendes særk. 'Der er ingen, som kan se mig i det mørke,' tænkte den lille pige og tog særken af og gav hende den.", "Nu stod hun der og havde ikke en smule mere tilbage, men pludselig faldt stjernerne ned fra himlen, og de var lutter blanke dalere. Og skønt hun havde givet sin særk bort, havde hun dog en på, og den var af det allerfineste linned. Hun samlede nu dalerne op, og der var så mange, at hun havde nok for hele sit liv.");

var array_2 = new Array("Engang var der en prins, der ønskede at gifte sig med en prinsesse; men hun skulle være en rigtig prinsesse. Han rejste over hele verden for at finde en, men ingen steder kunne han få hvad han ville. Der var prinsesser nok, men det var svært at finde ud af, om de var den ægte vare. Der var altid noget ved dem, der ikke var som det skulle være.", "En aften var der en forfærdelig storm. Der var torden og lyn, og regnen skyllede ned. Pludselig bankede det på byens port, og den gamle konge gik ud for at lukke op.", "Det var en prinsesse der stod derude foran porten. Men gud! Sikke et syn regnen og vinden havde gjort hendes udseende. Vandet løb ned af hendes hår og tøj og ind af næsen på skoen og ud igen på hælene. Og så sagde hun, at hun var en virkelig prinsesse.", "Nå, det får vi nok at vide, tænkte den gamle dronning. Men hun sagde ikke noget og gik ind i sovekammeret, tog alt linned fra sengen, og lagde en ært på bunden; derefter tog hun tyve madrasser og lagde dem på ærten, og derpå tyve edderdunsdyner oven på madrasserne.", "På dette leje måtte prinsessen ligge hele natten. Om morgenen blev hun spurgt, hvordan hun havde sovet. 'Åh, meget dårligt!' sagde hun. 'Jeg har næsten ikke lukket mine øjne hele natten. Gud ved, hvad der var i sengen, men jeg har ligget på noget hårdt, så jeg er ganske brun og blå over min hele krop. Det er forfærdeligt!'", "Prinsen tog hende til kone, for nu vidste han, at han havde en rigtig prinsesse; og ærten kom på Kunstkammeret, hvor den kan stadig ses, hvis ingen har stjålet det. Se, det er en sand historie.");

var forfatter_Array = new Array("<b>Stjernedalerne</b> af Brødrene Grimm", "<b>Prinsessen på Ærten</b> (1835) af H. C. Andersen")

var cloned_Array = new Array();

var alle_textdata_Array = Array(array_1, array_2);

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
        alertBox("Hjælp", "Du skal sætte eventyret sammen i den rigtige rækkefølge. Når alle dele er placeret rigtigt, kan du trykke på Næste-knappen.");
    });
    $(".btn_next").click(function() {
        if (runde > alle_textdata_Array.length - 2) {
            alertBox("Godt klaret", "Du har sat begge eventyr i den rigtige rækkefølge!");
            runde = 0;
        } else {
            runde++;
        }
        init();

    });

});

function init() {
    $(".btn_next").fadeOut(0);
    $(".tekst").html("Eventyr " + (runde + 1));
    $(".byline").html(forfatter_Array[runde])
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
        alertBox("Eventyret er i korrekt rækkefølge", "Klik på næste for at fortsætte.");
        $(".btn_next").fadeIn();
    } else {
        alertBox("Status", "Du har " + score + " ud af " + cloned_Array[runde].length + " rigtige");
    }
}
