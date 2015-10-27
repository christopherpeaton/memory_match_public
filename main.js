var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 9;
var match_counter = 0;
var attempts = 0;
var games_played = 0;


function card_clicked(card) {
    var img_src = $(card).prev().find("img").attr("src");

    $(card).hide().addClass("card_has_been_selected");

    if (first_card_clicked == null) {
        console.log("first card clicked");
        first_card_clicked = img_src;
    } else {
        second_card_clicked = img_src;
        console.log("second card clicked!");
        attempts += 1;
        console.log("attempts", attempts);
        if (first_card_clicked === second_card_clicked) {
            match_counter += 1;
            console.log(match_counter);
            $(".matches .value").text(match_counter);
            $(".card_has_been_selected").toggleClass('match');
            console.log('a match!');
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("total_possible_matches", total_possible_matches);
            if (match_counter === total_possible_matches) {
                alert("You've Won!");
                games_played += 1;
                $(".card_has_been_selected").show();
            }
        } else {
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("they don't match");
            waittime = setTimeout(function () {
                $(".card_has_been_selected").show();
            }, 2000);
        }
        ;
        howAccurate();
    }
    ;
}
function howAccurate() {
    accuracy = (match_counter / attempts) * 100 + "%";
    if (accuracy == Infinity) {
        $(".accuracy").find(".value").text(100 + "%");
    } else {
        $(".accuracy").find(".value").text(accuracy);
    }
    ;
};
function reset_stats() {
    accuracy = 0;
    matches = 0;
    attempts = 0;
};
function display_stats() {
    $(".games-played .value").text(games_played);
    $(".attempts .value").text(attempts);
    $(".accuracy .value").text(accuracy);
};
function reset_clicked() {
    $(".games-played > .value").text(++games_played)
    console.log("games played add 1");
    reset_stats();
    console.log("reset stats");
    display_stats();
    console.log("display stats");
    $(".card_has_been_selected").show();
};