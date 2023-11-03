/*setup variable*/

var productInput = document.querySelector('#product_input');
var productBtn =document.querySelector('#product_btn');
var productContainer =document.querySelector('#product_container');
var data = [
    { id: 1, name: "product1", desc: "bla bla bla" },
    { id: 2, name: "product2", desc: "bla bla bla" },
    { id: 3, name: "product3", desc: "bla bla bla" },
    { id: 4, name: "product4", desc: "bla bla bla" },
];

/*function draw ui*/


function drawui(items) {
    productContainer.innerHTML='';
    items.forEach(function (ele) {
        productContainer.innerHTML+=` 
      <div onclick='deletItem(${ele.id})'>
          ${ele.name}
        </div>
        
        `;        
    });
};

window.onload = function () {
    drawui(data);
}
/*function add item after click on button*/
/*function add item to new element*/
productBtn.addEventListener('click', functionAdd);
function functionAdd() {
    if (productInput.value == "") {
        alert("you should input then add");
    } else {
        /*access to last element befor add*/                  /*·«“„ ﬁ»· „«ÃÌ»Ê «”√· Â· ›⁄·« ›ÌÂ« «·„’›Ê›Â œ« « Ì⁄‰Ì Â· ›⁄·« ›ÌÂ« ÿÊ· ø«–« */
        var lastid = data.length ? data[data.length - 1].id :0;
    } data.push({ id: ++lastid, name: productInput.value, desc: 'bla bla bla' });



    /*add new item to ui*/


    var lastitem = data[data.length - 1];
    productContainer.innerHTML += ` 
      <div onclick='deletItem(${lastitem.id})'>
          ${lastitem.name}
    </div>
        
        `;        
    productInput.value = '';
};
    
function deletItem(id){
    var index=data.map(function(i){
        return i.id}).indexOf(id);
    if(index!==-1){
        data.splice(index,1);
        drawui(data);
    }
   
}