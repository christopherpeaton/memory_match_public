
var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
var match_counter = 0;


function card_clicked(card) {
    var img_src = $(card).prev().find("img").attr("src");
    //var card_front = $(img_src).find(".card_front img");
    console.log("card:", card);

    $(card).addClass("card_had_been_clicked").toggle();
    //console.log($(card_back).attr("src"));
    //var card_img = $(card_front).attr('src');

    //console.log('16');
    if (first_card_clicked == null) {
        console.log("first card clicked");
        first_card_clicked = img_src;
    } else {
        second_card_clicked = img_src;
        console.log("second card clicked!");
        if (first_card_clicked == second_card_clicked) {
            match_counter += 1;
            console.log(match_counter);
            $(".card_has_been_selected").toggleClass('match');
            console.log('a match!');
            first_card_clicked = null;
            second_card_clicked = null;
            if (match_counter == total_possible_matches) {
                alert("You've Won!"); }
        } else {
            $("#match").toggle().toggleClass("match");
            console.log("they don't match");

            //setTimeout( function () {
            //   $(".match").find(".card").toggle()
            //$("match").toggle().removeClass("match");
        }

    }

}


