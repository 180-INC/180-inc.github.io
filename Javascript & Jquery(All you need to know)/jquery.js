//jQuery is Started with the document ready tag.
//This tell the browser to only load jquery after the html and css have been loaded
//Their are two ways to write this
/*Method 1
$(document).ready(function(){
    //jQuery goes here
})
*/
//Method 2
$(function(){

    /* 
    //Jquery Selectors
    //The dollar sign($) is used to select elements in jquery

    //Tag selector
    $("h3").css({
        border: "3px solid blue"
    });

    //Class selector
    $(".wrapper").css({
        border: "3px solid red"
    });

    //Id selector
    $("#clients").css({
        border: "3px solid yellow"
    });
    */

    //Jquery Events
    $("h4").click(function(){
        $(this).css({
            background: "red"
        })
    })
    /*Their are other kind of Events
    Example
    * Double Click(dbl)
    * Mouse Enter(mouseenter)
    * Mouse Leave(mouseleave)
    * Mouse Down(mousedown)
    * Mouse Up(mouseup)
    * Hover(hover)
    * Focus(focus)
    * Blur(blur)
    */
    //ON-Method
    $("#clients").on({
        mouseenter: function(){
            $(this).css("background-color", "lightgray");
        },
        mouseleave: function(){
            $(this).css("background-color", "lightblue");
        },
        click: function(){
            $(this).css("background-color", "yellow");
        }
    });

    //jQuery Effects
    //Hide and Show Effect
    $("#hide").click(function(){
        $("p").hide();
    });
    $("#show").click(function(){
        $("p").show();
    });
    //Toggle Effect
    $("#toggle").click(function(){
        $("h3").toggle();
    });
    //Fade Effect
    /*Their are four kinds of fade effect
    1. fadeIn: Fades selected element into the web page
    2. fadeOut: Fades selected element out of the web page
    3. fadeToggle: Fades element in and out of the web page
    4. fadeTo: Fades element to a specific opacity
    Using the fadeToggle option*/
    $("#fade").click(function(){
        $("#points-of-sale").fadeToggle();
    });
    //Slide Effect
    /*Their are three kinds of slide effect
    1. slideUp
    2. slideDown
    3. slideToggle*/
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });

    function complete(){
        alert("Animation Complete")
    };

    //jQuery Animations
    $("section > h2").on("click", function(){
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, complete);
        //Note: You can only animate properties with numerical value.
        //You can pass other parameters to your animation such as the speed, and callback functions.
    });
    //Callback Functions
    //These are functions that are executed when a current effect reaches 100%



});


$