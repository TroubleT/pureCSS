// insert modal info into html

document.getElementById('myBtnH')
    .addEventListener('click', function() {
        fetch('history.html?r=' + Math.random())
            .then(response => response.text())
            .then(modal => document.getElementById('placeholderH').innerHTML = modal);
    });

document.getElementById('myBtnC')
    .addEventListener('click', function() {
        fetch('cellar.html?r=' + Math.random())
            .then(response => response.text())
            .then(modal => document.getElementById('placeholderC').innerHTML = modal);
    });

document.getElementById('myBtnW')
    .addEventListener('click', function() {
        fetch('wines.html?r=' + Math.random())
            .then(response => response.text())
            .then(modal => document.getElementById('placeholderW').innerHTML = modal);
    });



// topButton

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("topBtn").style.display = "block";
    }
    else {
        document.getElementById("topBtn").style.display = "none";
    }
}


// div info animation

// change opacity when mouseover
let change = document.getElementsByClassName('information')    
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseover", function() {
        const opacity = document.getElementsByClassName('img-info')
        const h = document.getElementsByClassName('info-h')
        const btn = document.getElementsByClassName('info-b')
        const res = document.getElementsByClassName('res')
        
        for (let i = 0; i < change.length; i++) {
           if( event.target === opacity[i] || event.target === res[i] || event.target === h[i] || event.target === btn[i]){

            opacity[i].style.opacity = '0.3'
           }
        }


    })
};

// change style.display for div 'res' when mouseover
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseover", function() {
        const res = document.getElementsByClassName('res')

        for (let i = 0; i < change.length; i++) {
    
            res[i].style.display = 'block';
        }
    })
};

// change style.display for div 'res' when mouseout
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseout", function() {
        const res = document.getElementsByClassName('res')
        for (let i = 0; i < change.length; i++) {

            res[i].style.display = 'none'

        }
    })
};

// change opacity for div 'img-info' when mouseout
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseout", function() {
        const opacity = document.getElementsByClassName('img-info')
        for (let i = 0; i < change.length; i++) {

            opacity[i].style.opacity = '1'
        }

    })
};