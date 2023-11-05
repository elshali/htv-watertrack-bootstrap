const form = document.querySelector('form');
const name = document.querySelector('#firstName');

const submitBtn = document.querySelector('#submit');
const cancelBtn = document.querySelector('#cancel');

const h5 = document.querySelector('h5');

form.addEventListener("submit", function(e){
    e.preventDefault();
});

submitBtn.addEventListener('click', function() {
    localStorage.setItem('name', name.value);

    nameDisplayCheck();

});

function nameDisplayCheck() {
    if (localStorage.getItem('name')) {
        let name = localStorage.getItem('name');
        console.log("hello");
    }
}