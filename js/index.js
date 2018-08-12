document.getElementById('myBtnH')
    .addEventListener('click', function () {
    fetch('history.html?r='+Math.random())
        .then( response => response.text() )
        .then( modal => document.getElementById('placeholderH').innerHTML = modal );
});

document.getElementById('myBtnC')
    .addEventListener('click', function() {
    fetch('cellar.html?r='+Math.random())
        .then( response => response.text() )
        .then( modal => document.getElementById('placeholderC').innerHTML = modal );
});

document.getElementById('myBtnW')
    .addEventListener('click', function() {
    fetch('wines.html?r='+Math.random())
        .then( response => response.text() )
        .then( modal => document.getElementById('placeholderW').innerHTML = modal );
});