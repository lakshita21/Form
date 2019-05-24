
$(document).ready(function(){
    $("input").focus(function(){
    $(this).css("background-color", "#cccccc");
  });
  
  $(function(){
    $("button").click(function(){
{   console.log('successful');

if($("#name").val()=="")
{
   $("#p1").text("Please enter a name");
    $("#name").focus();
    setTimeout('$("#p1").text("");',1000);
   
}



else if($("#email").val()=="")
{ $("#p2").text("Please enter an email");
   $("#email").focus();
   setTimeout('$("#p2").text("");',1000);
    }

else if($("#mobile").val()=="")
{ $("#p3").text("Please enter a Mobile number");
   $("#mobile").focus();
   setTimeout('$("#p3").text("");',1000);
     
}
 

}}); 
});
$("#name").keypress(function(){
 if($("#name").val().length<4)
	{
        $("#p1").text("Please enter at least 4 letters");
        setTimeout('$("#p1").text("");',1000);
  }
  });




$("#email").keypress(function(){
    var reg =   /^([_a-zA-Z0-9-]+)(\.[_a-zA-Z0-9-]+)*@([a-zA-Z0-9-]+\.)+([a-zA-Z]{2,3})$/;
    if(!reg.test($("#email").val()))
    {
        $("#p2").text("Please enter a valid email");
        setTimeout('$("#p2").text("");',1000);
  } });

  $("#mobile").keypress(function(){
   var m=/[0-9]{10}/;
    if(!m.test($("#mobile").val())&&($("#mobile").val().length<10))
    { 
        $("#p3").text("Please enter a valid number");
        setTimeout('$("#p3").text("");',1000);
    
  } });

  $("#mobile").keypress(function(evt){
  var charCode = evt.which;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
  }
  return true;

});
$(".block").keyup(function(event) {
    if (event.keyCode === 13) {
        $(".block").click();
    }
});

$("#flip").click(function(){
    $("#panel").slideDown("slow");
  });
});
 
 