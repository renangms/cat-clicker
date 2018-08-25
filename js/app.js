var cats = [
    {
        id: 'cat1',
        img: 'img/cat1.jpg',
        name: 'Cat 1',
        clickCount: 0
    },
    {
        id: 'cat2',
        img: 'img/cat2.jpg',
        name: 'Cat 2',
        clickCount: 0
    },
    {
        id: 'cat3',
        img: 'img/cat3.jpg',
        name: 'Cat 3',
        clickCount: 0
    },
    {
        id: 'cat4',
        img: 'img/cat4.jpg',
        name: 'Cat 4',
        clickCount: 0
    },
    {
        id: 'cat5',
        img: 'img/cat5.jpg',
        name: 'Cat 5',
        clickCount: 0
    },
]

var selectedCat = null;

function getCatById(id) {
    for (var i = 0; i < cats.length; i++) {
        var cat = cats[i];

        if (cat.id == id) {
           return cat;
       } 
    }

    return null;
}


$(function() {
    var catListElem = $('#cat-list');

    for(var i = 0; i < cats.length; i++) {
        catListElem.append('<li id="' + cats[i].id + '">' + cats[i].name + '</li>')
    }
});

$(function() {
    $("#cat-list li").click(function(e) {
        var id = e.target.id;

        selectedCat = getCatById(id);

        $('#cat img').attr('src', selectedCat.img);
        $('#cat figcaption').text(selectedCat.name);
        $('#click-count').text('Click count: ' + selectedCat.clickCount);
    });
});

$(function() {
    $("#cat img").click(function(e) {
        selectedCat.clickCount += 1;
        
        $('#click-count').text('Click count: ' + selectedCat.clickCount);
    });
});
