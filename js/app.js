var $catElem = $('#cat')

var clickCount = 0;

function catClicked() {
    var $countElem = $('#click-count');
    clickCount += 1;
    $countElem.text('Click count: ' + clickCount);
};

$catElem.click(catClicked);