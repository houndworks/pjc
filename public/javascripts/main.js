function equalizeHeights(items) {
  var maxHeight = 0;
  items.each(function() {
    if ($(this).height() > maxHeight) { maxHeight = $(this).height(); }
  });
  items.each(function() { $(this).css('min-height',(maxHeight+10)+"px"); });
}

function formatPostListings() {
  var posts = $('body.posts div.posts div.thumbnail');
  posts.each(function(){ $(this).css('min-height',"0px"); });
  if( $(window).width() >= 992 ) {
    for(var i = 0; i < posts.length; i+=3) { equalizeHeights( posts.slice(i, i+3) ); }
  } else if ( $(window).width() >= 768 ) {
    for(var i = 0; i < posts.length; i+=2) { equalizeHeights( posts.slice(i, i+2) ); }
  }
}


;
