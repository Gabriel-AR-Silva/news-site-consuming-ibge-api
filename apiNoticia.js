const body = document.getElementsByTagName("body")[0]
const listBox = document.createElement("ul");
const contentClass = document.createElement("div");
body.appendChild(contentClass);
contentClass.classList.add("content");
contentClass.appendChild(listBox);

const apiIBGE = 'http://servicodados.ibge.gov.br/api/v3/noticias/';
fetch(apiIBGE).then(response => response.json()).then(data => {
    for (let i = 0; i < 10; i++){
        let  itemList = document.createElement('li');
        listBox.appendChild(itemList);
        let titulo = data.items[i].titulo;
        itemList.innerHTML = titulo+"<br>"+"<br>";
    }
})