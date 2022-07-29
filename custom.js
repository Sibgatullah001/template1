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
// const searchIl = document.getElementById('searchList');
    const searchInput = document.getElementById('search');

// searchInput.addEventListener('input', function (e){
//     const searchList = document.getElementById('searchList');
//     let value = e.target.value;
//     // console.log(value)
//     for (let i = 0; i < value.length; i++) {
//         const element = value[i];
//         console.log(element);

//         let item = document.createElement('li');
//         item.innerText = element.value;
//         searchList.appendChild(item);
//         console.log(item);
    
//     }

// })


// search  - - input
const searchPopup = document.getElementById('searchPopup');
function searchImg(){
    searchPopup.style.display = 'block';
}
function searchImgClose(){
    searchPopup.style.display = 'none';
}

// customize
const customizeContents = document.getElementById('customizeContents');
const shortcut = document.getElementById('shortcut');
const customizeTheme = document.getElementById('customizeTheme');
function customizeBg(){
    customizeContents.style.display = 'block';
    shortcut.style.display = 'none';
    customizeTheme.style.display = 'none';
}
function customizeShortcuts(){
    customizeContents.style.display = 'none';
    shortcut.style.display = 'block';
    customizeTheme.style.display = 'none';
}
function customizeColor(){
    customizeContents.style.display = 'none';
    shortcut.style.display = 'none';
    customizeTheme.style.display = 'block';
}

// customize close show
const customizePopup = document.getElementById('customizePopup');
function customizeEdit(){
    customizePopup.style.display = 'block';
}
function customizeClose(){
    customizePopup.style.display = 'none';
}
// browse show hidden
function broseMenu() {
    document.querySelector('.browse_edit').classList.toggle("browseEdit_show");
}

// broseUpload
function broseUpload(){
    document.getElementById('broseUpload').style.display = 'block';
}
function broseUploadClose(){
    document.getElementById('broseUpload').style.display = 'none';
}





