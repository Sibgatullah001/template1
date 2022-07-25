const menuPopup = document.getElementById('menu');

function togglePopup(){
    menuPopup.style.display = 'block';

};
function crossPopup(){
    menuPopup.style.display = 'none';
};


// display none / block
const apps = document.getElementById('apps');
const recommended = document.getElementById('recommended');
const appHeader = document.getElementById('app_data');


function onlyApp(){
    recommended.style.display = "none";
    appHeader.style.display = "none";
    apps.style.display = "block";
}


function allSection(){
    recommended.style.display = "block";
    appHeader.style.display = "block";
    apps.style.display = "none";
}


function onlyRecommended(){
    recommended.style.display = "block";
    apps.style.display = "none";
    appHeader.style.display = "none";
}

// search input 
const searchInput = document.getElementById('search');

searchInput.addEventListener('input', function (e){
    const value = e.target.value;
    console.log(value);
})

// search  - - input
const searchPopup = document.getElementById('searchPopup');
function searchImg(){
    searchPopup.style.display = 'block';
}
function searchImgClose(){
    searchPopup.style.display = 'none';
}