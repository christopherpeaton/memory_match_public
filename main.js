var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;
var attempts = 0;
var games_played = 0;


function card_clicked(card) {
    var img_src = $(card).prev().find("img").attr("src");
    //games_played += 1;
    //var card_front = $(img_src).find(".card_front img");
    //console.log("card:", card);
    $(card).hide().addClass("card_has_been_selected");
    //console.log($(card_back).attr("src"));
    //var card_img = $(card_front).attr('src');
    //console.log('16');
    if (first_card_clicked == null) {
        console.log("first card clicked");
        first_card_clicked = img_src;
    } else {
        second_card_clicked = img_src;
        console.log("second card clicked!");
        attempts += 1;
        $(".attempts .value").text(attempts);
        console.log("attempts", attempts);
        if (first_card_clicked === second_card_clicked) {
            match_counter += 1;
            console.log(match_counter);
            $(".matches .label").text(match_counter);
            $(".card_has_been_selected").toggleClass('match');
            console.log('a match!');
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("total_possible_matches", total_possible_matches);
            if (match_counter === total_possible_matches) {
                alert("You've Won!");
                games_played += 1;
                $(".games-played .value").text(games_played);
            }
        } else {
            first_card_clicked = null;
            second_card_clicked = null;
            console.log("they don't match");
            waittime = setTimeout(function () {
                $(".card_has_been_selected").show();
            }, 2000);
        }
        //console.log("attempts", attempts);
        howAccurate();
    }
}
function howAccurate() {
    accuracy = match_counter / attempts;
    $(".accuracy .label").text(accuracy);
}

function reset_clicked(reset) {
    $("#reset").find(".card_back").show("slow");
    first_card_clicked = null;
    second_card_clicked = null;
    match_counter = 0;
    games_played = 0;
    attempts = 0;
    //$("#button_reset").click(function () {
    //    counter++;
    //    $(".games-played .value").text(games_played);
}


function update_stats() {
    $(".attempts .value").text(attempts);

}
