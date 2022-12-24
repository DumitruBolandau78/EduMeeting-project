function showAll(){
    document.getElementById('soon').style.display = 'block';
    document.getElementById('attractive').style.display = 'block';
    document.getElementById('important').style.display = 'block';
    document.getElementById('meetings-category-btn-all').style.backgroundColor = '#a12c2f';
    document.getElementById('meetings-category-btn-all').style.color = '#fff';
    document.getElementById('meetings-category-btn-soon').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-soon').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-important').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-important').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-attractive').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-attractive').style.color = '#a12c2f';
}

function showSoon(){
    document.getElementById('soon').style.display = 'none';
    document.getElementById('attractive').style.display = 'block';
    document.getElementById('important').style.display = 'none';
    document.getElementById('meetings-category-btn-all').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-all').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-soon').style.backgroundColor = '#a12c2f';
    document.getElementById('meetings-category-btn-soon').style.color = '#fff';
    document.getElementById('meetings-category-btn-important').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-important').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-attractive').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-attractive').style.color = '#a12c2f';
}

function showImportant(){
    document.getElementById('soon').style.display = 'none';
    document.getElementById('attractive').style.display = 'none';
    document.getElementById('important').style.display = 'none';
    document.getElementById('meetings-category-btn-all').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-all').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-soon').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-soon').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-important').style.backgroundColor = '#a12c2f';
    document.getElementById('meetings-category-btn-important').style.color = '#fff';
    document.getElementById('meetings-category-btn-attractive').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-attractive').style.color = '#a12c2f';
}

function showAttractive(){
    document.getElementById('soon').style.display = 'none';
    document.getElementById('attractive').style.display = 'block';
    document.getElementById('important').style.display = 'block';
    document.getElementById('meetings-category-btn-all').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-all').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-soon').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-soon').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-important').style.backgroundColor = '#fff';
    document.getElementById('meetings-category-btn-important').style.color = '#a12c2f';
    document.getElementById('meetings-category-btn-attractive').style.backgroundColor = '#a12c2f';
    document.getElementById('meetings-category-btn-attractive').style.color = '#fff';
}

function myFunction(){
    const x = window.matchMedia("(max-width: 700px)");

    if (x.matches){
        document.getElementById('col-inner1').style.display = 'none';
    }
    else {
        document.getElementById('col-inner1').style.display = 'none';
    }
}
let i = true
function dropItems() {
    if (i === true){
        document.getElementById('media-drop-items').style.display = 'block';
        i = false
    }
    else {
        document.getElementById('media-drop-items').style.display = 'none';
        i = true
    }
}

let openClose = true

function openCloseNavMedia() {
    if (openClose === false){
        document.getElementById('media-nav').style.right = '-100%';
        document.getElementById('color-black').style.color = 'white';
        openClose = true
    }
    else {
        document.getElementById('media-nav').style.right = '0';
        document.getElementById('color-black').style.color = 'black';
        openClose = false
    }
}
