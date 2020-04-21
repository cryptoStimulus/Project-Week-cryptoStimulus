const test = QUnit.test;

import findByCategory from '../options/find-by-category.js';

test('testing findByCategory Function', function(assert) {
    const catArray = ['social advocacy', 'animal rights'];

    const companyData = [{
        name: 'Gimme Shelter',
        category: 'animal rights'
    }, {
        name: 'Multnomah County Animal Services',
        category: `animal rights`
    }, {
        name: 'Navajo Hopi Families Covid Relief',
        category: `social advocacy`,
    }, {
        name: `Oregon Public House`,
        category: `service/ artist funds`
    }];

    findByCategory(catArray, companyData);
    const answer = localStorage.getItem('options');

    const expected = '[{"name":"Navajo Hopi Families Covid Relief","category":"social advocacy"},{"name":"Gimme Shelter","category":"animal rights"},{"name":"Multnomah County Animal Services","category":"animal rights"}]';

    assert.equal(answer, expected);
});

// const expected = `<section class="company"><div id="logo"><img></div><div id="text"><p h1="">name</p><p h1=""></p><p>description</p></div><div id="cat"><p>category(s)</p></div><div id="save"><button>Favorite</button</div></section>`;


