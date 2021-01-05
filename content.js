
chrome.runtime.sendMessage({todo:"showPageAction"});

chrome.storage.sync.get('imageLink', function(customBackground){
  if(customBackground.imageLink) {
    $('body').css({'background-image':`url(${customBackground.imageLink})`,"background-size":"cover","background-attachment":"fixed"})
    $('#fbar').css('display','none');
  }
});

chrome.runtime.onMessage.addListener(function(request,sender,sendMessage){
  if(request.todo== "changeBg") {
    var image_chosen = request.imageLink;
    let imageUrl = image_chosen;
    chrome.storage.sync.set({"imageLink":imageUrl}, function(){});
    $('body').css({'background-image':`url${imageUrl}`,"background-size":"cover","background-attachment":"fixed"});
    $('#fbar').css('display','none');
  }
});



