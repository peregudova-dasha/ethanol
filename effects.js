
$(".menu li").hover(
function(){
  $(this).find(".menu-hover").stop().animate({width:"90%"})
},
 function(){
  $(this).find(".menu-hover").stop().animate({width:"0"})
}
)

$(".profile .photo").hover(
function(){
 $(this).next().stop().fadeIn()  
},
function(){
  $(this).next().stop().fadeOut()
  
}
)

$(".team .worker").hover(
function(){
 $(this).find(".hover").stop().fadeIn()  
},
function(){
  $(this).find(".hover").stop().fadeOut()
  
}
)


$(".price .rate").hover(
function(){
  $(this).stop().animate({borderTopColor:"#ffcb00", borderBottomColor:"#ffcb00", borderLeftColor:"#ffcb00", borderRightColor:"#ffcb00",});
  $(this).find(".name").stop().animate({backgroundColor:"#ffcb00" });
  $(this).find(".price").stop().animate({borderBottomColor:"#ffcb00" });
  $(this).find(".button").stop().animate({backgroundColor:"#ffcb00" });
  
},
 function(){
   $(this).stop().animate({borderTopColor:"#6b6b6b", borderBottomColor:"#6b6b6b", borderLeftColor:"#6b6b6b", borderRightColor:"#6b6b6b",});
  $(this).find(".name").stop().animate({backgroundColor:"#222222" });
  $(this).find(".price").stop().animate({borderBottomColor:"#6b6b6b" });
  $(this).find(".button").stop().animate({backgroundColor:"#222222" });
}
)



// TABS

//END
