var model = {
    selectedCat: null,
    cats: [
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
        }
    ]
};

var octopus = {
    init: function () {
        model.selectedCat = model.cats[0];
        catListView.init();
        catView.init();
    },

    getCatById: function (id) {

        var cats = model.cats;

        for (var i = 0; i < cats.length; i++) {
            var cat = cats[i];

            if (cat.id == id) {
                return cat;
            }
        }

        return null;
    },

    getCats: function () {
        return model.cats;
    },

    getSelectedCat: function () {
        return model.selectedCat;
    },

    updateCat: function (id) {
        model.selectedCat = this.getCatById(id);
        catView.render();
    },

    incrementClickCounter: function () {
        model.selectedCat.clickCount++;
        catView.render();
    },
}

var catListView = {
    init: function () {
        this.catListElem = $('#cat-list');

        this.render();
    },

    render: function () {
        var cats = octopus.getCats();

        for (var i = 0; i < cats.length; i++) {
            this.catListElem.append('<li id="' + cats[i].id + '">' + cats[i].name + '</li>')
        }

        $("#cat-list li").click(function (e) {
            var id = e.target.id;
            octopus.updateCat(id);
        });
    }
};

var catView = {
    init: function () {
        this.catImg = $("#cat img");

        this.catImg.click(function (e) {
            octopus.incrementClickCounter();
        });

        this.render();
    },

    render: function () {
        var selectedCat = octopus.getSelectedCat();

        this.catImg.attr('src', selectedCat.img);
        $('#cat h2').text(selectedCat.name);
        $('#click-count').text('Click count: ' + selectedCat.clickCount);
    }
};

octopus.init();