$(function(){
    $('#submit').click(function() {
       var imageLink = $('#imageLink').val();
       chrome.tabs.query({active: true, currentWindow:true}, function(tabs){
           chrome.tabs.sendMessage(tabs[0].id, {todo:"changeBg", imageLink:imageLink});
           close();
       });
    });
   
});