document.querySelector('.big_button').addEventListener('click', function(){
    var ekran = document.querySelector('.screen');
    console.log( typeof parseInt(ekran.value));
    ekran.value = parseInt(ekran.value) + 1;
});
document.querySelector('.small_button').addEventListener('click', function(){
    document.querySelector('.screen').value = 0;
});