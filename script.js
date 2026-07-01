// addEventListener()
// console.dir(document.body);
const firstLink = document.getElementById("github")
console.dir(firstLink);

firstLink.addEventListener("click", function (event) {
    console.log(event);
    event.preventDefault()
//    const message = alert("ви дійсно хочете перейти на цей сайт?")
   const message = confirm("ви дійсно хочете перейти на цей сайт?")
   console.log(message);
   
if (message===true) {
    console.log('ок ти перейдеш на сайт');
    location.href = 'https://github.com/'
} else {
    console.log('ок ти не перейдеш на сайт');
    
}
})

// console.log(navigator);
// console.log(window);
// console.dir(document);
// console.dir(location);

// if (condition) {
    
// } else if(condition) {
    
// } else {

// }