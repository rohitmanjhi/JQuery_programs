/*$('input').keypress(function(){
  alert("Insert a one Character")
})*/
$('input').keypress(function(event){
  if(event.which==13){
    alert("Hello you just press enter your typed contend is:"+$(this).val())
  }
})

$('input').keypress(function(event){
  if(event.which==88 || event.which==120){
    alert("you are under monitoring!!!")
  }
})
