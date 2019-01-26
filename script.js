keyword.oninput = function(e){
    if(keyword.value){
         selection.classList.add('active');
    }else{
         selection.classList.remove('active');
    }
};