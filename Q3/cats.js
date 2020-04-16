function cats(url, callback) {
    let request = new XMLHttpRequest();
    request.open('GET', url);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        callback(request.response);

    };
}

function cats(jsonObj) {
    let cats = jsonObj.cats;

    let div = document.querySelector('div');
    for (let i = 0; i < cats.length; i++) {
        //build the new html element on our page
        let article = document.createElement('article');
        let h2 = document.createElement('h2')
        let img = document.createElement('img')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
        let ul = document.createElement('ul')


        img.setAttribute('src', 'https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/assets' +
            producttypes[i].image);
        img.setAttribute('alt', producttypes[i].image);
        h2.textContent = producttypes[i].name;
        p1.textContent = 'Speices : ' + producttypes[i].species;
        p2.textContent = 'Favfood : ' + producttypes[i].favFoods;
        p2.textContent = 'age : ' + producttypes[i].age;

        article.appendChild(img);
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(ul);
        div.appendChild(article);

    }


}
loadProducts('https://jessicagilfillan.github.io/Final_Exam_Prep/Q3/cats.json', producttypes);
