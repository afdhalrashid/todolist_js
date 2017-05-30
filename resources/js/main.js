document.getElementById('add').addEventListener('click',function () {
    var value = document.getElementById('item').value;

    if (value){
        console.log(value);
    }
})

//test1
// window.onload = function () {
//     console.log( document.getElementById('add') );
// }
//
// console.log("main.js");
// console.log( document.getElementById('add') );


//test2
// function addbuttonClick() {
//     console.log("Click");
// }
//
// document.getElementById('add').addEventListener('click', addbuttonClick);