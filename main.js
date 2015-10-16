var first_card_clicked = null;
var second_card_clicked = null;
var total_possible_matches = 2;
match_counter = 0;


            // "this" comes from html and becomes card_container_element in the function below //
function card_clicked(card_container_element) {
            // prints to the console card_container_element: and the entire div "this" is in //
    console.log("card_container_element:",card_container_element);
            // jquery goes to card_container_element, finds class card_back and looks for img //
    var card_back_element = $(card_container_element).find('.card_back img');
             // jquery goes to card_container_element, finds class card_front and looks for img //
    var card_front_element = $(card_container_element).find(".card_front img");
            // jquery finds card_back_element and toggles(or flips) card over //
    $(card_back_element).toggle();
            // console logs what jquery gets when it goes to card_back_element and looks for the src attr. in this case it is the cqrd back picture url//
    console.log($(card_back_element).attr("src"));
            // the src attr of the card_back_element becomes var card_img_data //
    var card_img_data = $(card_front_element).attr('src');
            // next we see if this is the first card clicked or not with an if/else statement //
    if (first_card_clicked == null) {
            // is the var first_card_clicked equal to null at top? //
        console.log ("this be the first card clicked, arr!");
            // if it is, then console.log "this be the first card clicked, arr!" //
        first_card_clicked = card_img_data;
            // and var first_card_clicked goes from null to the value of var card_img_data and we go to the end of the func and start back at the top again //
    }
            // if first_card_clicked doesnt equal null, then we know that we are on the second card, and we continue through the function //
    else {
        console.log ("this be the second card clicked matey!");
            // we console.log "this be the second card clicked matey!" and go into another if/else function to see if there is a match or not //
        if (first_card_clicked == card_img_data){
            // if first_card_clicked is equal to card_img_data then there is a match //
            if (first_card_clicked == card_img_data) {

            }
            console.log ('thar be a match!');
            // and we log 'thar be a match!' //
        }
        else {
            console.log ("shiver me timbers, they dont be matchin");
            // if no match, then we turn the cards over and go to the end of the function and start again. //
        }
    }




}