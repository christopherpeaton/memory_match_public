var first_card_clicked = null;
var second_card_clicked = null;
var first_card_reference = null;
var second_card_reference = null;
var total_possible_matches = 9;
var match_counter = 0;
var attempts = 0;
var games_played = 0;
var accurate = 0;

$(document).ready(function () {
    console.log("ready");
    for (var i = 0; i < card_front_photo_array.length; i++) {
        console.log(card_front_photo_array[i]);
        var card_container = $("<div>", {
            class: "card"
        });
        var card_front_results = card_front(card_front_photo_array[i]);
        $(card_container).append(card_front_results).append(card_back());
        $("#game-area").append(card_container)
    }
});

var card_front_photo_array = ["photos/2015-Porsche-918-Spyder.jpg", "photos/56-f100-truck-DSC-0037.jpg", "photos/ae86_levin_hatch_by_bramdc.jpg", "photos/e14592bd933e2191698240c13f74c791.jpg",
    "photos/lowfall_0Vn6_0.jpg", "photos/Mercedes-Benz 190 Cosworth (2).jpg", "photos/morris-mini-1275-01.jpg", "photos/porsche-911-carrera-2.7-rs-04.jpg", "photos/web13.jpg", "photos/2015-Porsche-918-Spyder.jpg", "photos/56-f100-truck-DSC-0037.jpg", "photos/ae86_levin_hatch_by_bramdc.jpg", "photos/e14592bd933e2191698240c13f74c791.jpg",
    "photos/lowfall_0Vn6_0.jpg", "photos/Mercedes-Benz 190 Cosworth (2).jpg", "photos/morris-mini-1275-01.jpg", "photos/porsche-911-carrera-2.7-rs-04.jpg", "photos/web13.jpg"];

function card_back() {
    var card_back = $("<div>", {
        class: "card_back",
        onclick: "card_clicked(this)"
    });
    var pic = $("<img>", {
        src: "photos/Design-Paper-Vine-pattern-Art-Nouveau.jpg",
        alt: "cardback",
        height: "200px",
        width: "150px"
    });
    $(card_back).append(pic);
    return card_back;
}

function card_front(frontcardpic) {
    var card_front = $("<div>", {
        class: "card_front"
    });
    var pic = $("<img>", {
        src: frontcardpic,
        alt: "918",
        height: "200px",
        width: "150px"
    });
    $(card_front).append(pic);
    return card_front;
}

function card_clicked(card) {
    if (second_card_clicked !== null) {
        return
    };
    var img_src = $(card).prev().find("img").attr("src");
    $(card).addClass("card_has_been_selected");
    $(card).hide();
    if (first_card_clicked == null) {
        console.log("first card clicked");
        first_card_clicked = img_src;
        first_card_reference = card;
        //card_animation(card);
    } else {
        second_card_clicked = img_src;
        second_card_reference = card;
        //card_animation(card);
        console.log("second card clicked!");
        attempts += 1;
        display_stats();
        console.log("attempts", attempts);
        if (first_card_clicked === second_card_clicked) {
            match_counter++;
            console.log(match_counter);
            $("#matches .value").text(match_counter);
            $(card).addClass('match');
            console.log('a match!');
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("total_possible_matches", total_possible_matches);
            if (match_counter === total_possible_matches) {
                alert("You've Won!");
                games_played++;
                $(".card_has_been_selected").show();
                first_card_clicked = null;
                second_card_clicked = null;
            }
        } else {
            console.log("card", card);

            console.log("they don't match");
            waittime = setTimeout(function () {
                console.log("set timeout");
                //card_animation(first_card_reference);
                //card_animation(second_card_reference);
                $(first_card_reference).show();
                $(second_card_reference).show();
                first_card_clicked = null;
                second_card_clicked = null;
            }, 1500);
        }
        howAccurate();
    }
}

//var card_animation = function (card) {
//    if(typeof card == 'undefined'){
//        $('.animation-back').removeClass('animation-back');
//        return;
//    }
//    $(card).toggleClass("animation-back");
//    var find_card_front = $(card).parent().find(".card_front");
//    find_card_front.toggleClass("animation-front");
//    //want to see what card actually is in this function.
//    console.log('card is ', card);
//};

function howAccurate() {
    accurate = match_counter / attempts;
    var accurate_percent = (Math.floor((accurate) * 100));
    if (attempts == Infinity) {
        $("#accuracy").find(".value").text(100 + "%");
    } else {
        $("#accuracy").find(".value").text(accurate_percent + "%");
    }
}

function reset_stats() {
    accurate = 0;
    match_counter = 0;
    attempts = 0;
}

function display_stats() {
    $("#games_played .value").text(games_played);
    $("#matches .value").text(match_counter);
    $("#attempts .value").text(attempts);
    $("#accuracy .value").text(accurate);
}

function reset_clicked(reset) {
    $("#games_played .value").text(++games_played);
    console.log("games played add 1");
    reset_stats();
    console.log("reset stats");
    display_stats();
    console.log("display stats");
    $(".card").find('.card_back').removeClass('animation-back match');
    //$(".card_has_been_selected").show();
}