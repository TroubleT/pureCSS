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

document.getElementById('topBtn')
    .addEventListener('click', function() {
        document.documentElement.scrollTop = 0;
    });

// info animation
let change = document.getElementsByClassName('information')
for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseover", function() {
        const opacity = document.getElementsByClassName('img-info')
        for (let i in opacity) {

            opacity[i].style.opacity = '0.3'
        }


    })
};

for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseover", function() {
        const res = document.getElementsByClassName('res')

        for (let i in res) {

            res[i].style.display = 'block';
        }
    })
};


for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseout", function() {
        const res = document.getElementsByClassName('res')
        for (let i in res) {

            res[i].style.display = 'none'

        }
    })
};

for (let i = 0; i < change.length; i++) {
    change[i].addEventListener("mouseout", function() {
        const opacity = document.getElementsByClassName('img-info')
        for (let i in opacity) {

            opacity[i].style.opacity = '1'
        }

    })
};