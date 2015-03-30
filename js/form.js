var $form = $("#form"),
    $title = $("#title"),
    $url = $("#url"),
    $button = $("#view-form"),
    $list = $("#contenido"),
    $post = $(".item").first();

if(localStorage.getItem('autosave')){
$title.val(sessionStorage.getItem('title'));
$url.val(sesisonStorage.getItem('url'));

}var id = setInterval(function(){
  sessionStorage.setItem('title', $title.val());
  sessionStorage.setItem('url', $url.val());
},1000);
function mostrarForm(){
  $form.slideToggle();
  $list.slideToggle();

  return false;
}
function agregarPost(){
  var url = $url.val(),
      title = $title.val(),
      $clone = $post.clone();  
  
      $clone.find('.titulo_item a')
      .text(title)
      .attr('href',url);
      
      $clone.hide();

      $list.prepend($clone);
      mostrarForm();
      $title.val('');
      $url.val('');

      $clone.fadeIn();
  return false;
}
// eventos

$button.click(mostrarForm);
$form.on("submit" , agregarPost);