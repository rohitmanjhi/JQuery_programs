$('h1').on('mouseover',function(){
  $(this).text('Gwalior')
  $(this).css({background:'red',color:'white'})
})
$('h1').on('mouseout',function(){
  $(this).text('Delhi')
  $(this).css({background:'green',color:'white'})
})

$('button:first').on('click',function(){
  alert('Hello stupid dont click me')
})

$('button:last').on('dblclick',function(){
  alert('Hello animal dont double click ,estupid dont click me')
})
