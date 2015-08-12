function addUnderline($element) {
$element.addClass('underline');
}

function removeSiblingUnderline($element) {
var $current = $element;

var $parent = $element.parent();
console.log($parent);

var $siblings = $parent.siblings();
console.log('this are siblings',$siblings);


$siblings.children().removeClass('underline');
}

$(document).ready(function() {

$("img.welcome-text").hide();

$( "#showr" ).click(function() {
 $( "img.welcome-text" ).toggle();
 $( "p.active" ).toggle();
});


$('.nav-link').click(function() {
 removeSiblingUnderline($(this));
 addUnderline($(this));
});

});
