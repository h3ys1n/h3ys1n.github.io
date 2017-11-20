//очистка поля поиска
var search = document.getElementById('js-search')
var searchEmpty = false
search.onclick = function(){
   if(!searchEmpty){search.value=''}
   else return 
searchEmpty = true           
}