
var tabLinks=document.getElementsByClassName('tab-links');
var tabContents=document.getElementsByClassName('tab-contents');
var sideMenuEl = document.getElementById("sidemenu")

function openTab(tabName){
    console.log(tabName)

    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link')
    }

    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab')
    }

    event.currentTarget.classList.add('active-link')


   var tabElement=  document.getElementById(tabName);
   console.log(tabElement)
   tabElement.classList.add('active-tab')
}

function openmenu(){
    sideMenuEl.style.right="0"
}

function closemenu(){
    sideMenuEl.style.right="-200px"
}