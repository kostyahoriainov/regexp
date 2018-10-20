'use strict';

(function(){
    var reg = new RegExp('javascript', 'gi');
    var outText = document.querySelector('#out').innerText;
    var out = document.querySelector('#out');
    var button = document.querySelector('#btn');

    var a = reg.exec(outText);
    var b = a.toString();

    var newStr = outText.replace(reg, b.toUpperCase());
    console.log(neSstr);




    button.addEventListener('click', function(e){
        e.preventDefault();
        out.innerText = newStr;
    })
    
})();