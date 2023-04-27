let title = "JavaScriptが使えました";
alert(title);

$(function(){
  $('.jquery').on('click',function(){
    $(this).css('color','red');
  });
});