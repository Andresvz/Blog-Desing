var $form = $("#form"),
    $title = $("#title"),
    $url = $("#url"),
    $button = $("#view-form"),
    $list = $("#contenido"),
    $post = $(".item").first();


function mostrarForm(){
  $form.slideToggle();

  return false;
}
function agregarPost(){
  var url = $url.val(),
      title = $title.val(),
      $clone = $post.clone();  
  
      $clone.find('.titulo_item a').text(title).attr('href',url);
      $clone.hide();

      $list.prepend($clone);

      $clone.fadeIn();
  return false;
}
// eventos

$button.click(mostrarForm);
$form.on("submit" , agregarPost);