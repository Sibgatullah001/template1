
let menuPopup = document.getElementById('menuPopup');
let menuData = document.getElementById('menuData');

function toggleIcon(){
    menuPopup.classList.toggle('active');
}
function crossPopup(){
    menuPopup.classList.toggle('active');
}





// display none / block

const apps = document.getElementById('apps');
const recommended = document.getElementById('recommended');
const appHeader = document.getElementById('app_data');



const allSection = document.getElementById('allSection');
allSection.onclick = function(){
    recommended.style.display = "block";
    appHeader.style.display = "block";
    apps.style.display = "none";
}

const onlyApp = document.getElementById('onlyApp');
onlyApp.onclick = function(){
    recommended.style.display = "none";
    appHeader.style.display = "none";
    apps.style.display = "block";
}

const onlyRecommended = document.getElementById('onlyRecommended');
onlyRecommended.onclick = function(){
    recommended.style.display = "block";
    appHeader.style.display = "none";
    apps.style.display = "none";
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
function searchImgClose(){
    searchPopup.style.display = 'none';
}

const searchImg = document.getElementById('searchImg');
searchImg.onclick = function(){
    searchPopup.style.display = 'block';
}

window.addEventListener('mouseup', function(e){
    if(e.target !== searchImg){
        searchPopup.style.display = 'none';
    }
})

// customize
const customizeContents = document.getElementById('customizeContents');
const shortcut = document.getElementById('shortcut');
const customizeTheme = document.getElementById('customizeTheme');
customizeBg.onclick = function(){
    customizePopup.style.display = 'block';
    customizeContents.style.display = 'block';
    shortcut.style.display = 'none';
    customizeTheme.style.display = 'none';
}

customizeShortcuts.onclick = function(){
    customizePopup.style.display = 'block';
    customizeContents.style.display = 'none';
    shortcut.style.display = 'block';
    customizeTheme.style.display = 'none';
}

customizeColor.onclick = function(){
    customizePopup.style.display = 'block';
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

// window.addEventListener('mouseup', function(e){
//     if(e.target !== customizePopup){
//         customizePopup.style.display = 'none';
//     }
// })

// browse show hidden
// function broseMenuLIst(browse){
    
// }
const broseMenu = document.getElementById('broseMenu');
const browseEdit = document.getElementById('browseEdit');

broseMenu.onclick = function (){
      browseEdit.style.display = 'block';
}
window.addEventListener('mouseup', function(e){
    if(e.target != browseEdit){
        browseEdit.style.display = 'none';
    }
})

const broseMenu2 = document.getElementById('broseMenu2');
const browseEdit2 = document.getElementById('browseEdit2');

broseMenu2.onclick = function (){
    browseEdit2.style.display = 'block';
}
window.addEventListener('mouseup', function(e){
    if(e.target != browseEdit2){
        browseEdit2.style.display = 'none';
    }
})

const broseMenu3 = document.getElementById('broseMenu3');
const browseEdit3 = document.getElementById('browseEdit3');

broseMenu3.onclick = function (){
    browseEdit3.style.display = 'block';
}
window.addEventListener('mouseup', function(e){
    if(e.target != browseEdit3){
        browseEdit3.style.display = 'none';
    }
})



// broseUpload
const broseUpload =document.getElementById('broseUpload');


const broseContentAdd =document.getElementById('broseContentAdd');
broseContentAdd.onclick = function(){
    broseUpload.style.display = 'block';
}

const broseUploadClose =document.getElementById('broseUploadClose');
broseUploadClose.onclick = function(){
    broseUpload.style.display = 'none';
}

// window.addEventListener('mouseup', function(e){
//     if(e.target != broseUpload){
//         broseUpload.style.display = 'none';
//     }
// })

