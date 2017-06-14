/*
function changeScrollOnTouchScreen() {
   var disableScroll = false;

function disableScrolling() {
    disableScroll = true;
}


function enableScrolling() {
    disableScroll = false;
}

document.ontouchmove = function(e){
   if(disableScroll) {
     e.preventDefault();
   } 
} 
*/
/*
//disable scrolling at certain widths in the browser (should correspond to left edge of <li>s in #index-gallery and in #contacts-section
function disableScrolling() {
    $(document).ready(function() {
        //either hard code in the areas where scroll needs to be locked or find a way to do it with variables
        //html.css('overflow', 'hidden') may not work because it'll be locked in an area that is already overflowing from the original portion of the page (since the galleries are to the left of the original page)
        //find out how to 
        window.onscroll {
            if ($(window).scrollLeft() === 150px) {
            var html = jQuery('html');
            alert("it works!");
            html.css('overflow', 'hidden');
            }
        }
    });
}
*/

//SHOULD BE WORKING -- CHECK PHONE VIDEO
window.onscroll = function () {
    "use strict";
    alert("onscroll working");
};

window.onload = function () {
    "use strict";
    alert("onload working");
};



/*
function enableScrolling() {
    html.css('overflow', 'scroll');
}
//re-enable scrolling
$(document).ready(function() {
   enableScrolling;
});
*/
