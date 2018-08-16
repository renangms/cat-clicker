var clickCount1 = 0;
var clickCount2 = 0;

var $img1 = $('#cat1 img')
var $img2 = $('#cat2 img')

$(document).ready(function() {
    $('#cat1').append('<figcaption>Cat 1</figcaption>');
    $('#cat2').append('<figcaption>Cat 2</figcaption>');
});

function cat1Clicked() {
    var $countElem = $('#click-count1');
    clickCount1 += 1;
    $countElem.text('Click count: ' + clickCount1);
};

function cat2Clicked() {
    var $countElem = $('#click-count2');
    clickCount2 += 1;
    $countElem.text('Click count: ' + clickCount2);
};

$img1.click(cat1Clicked);
$img2.click(cat2Clicked);