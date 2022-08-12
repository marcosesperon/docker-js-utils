$( document ).ready(function() {

  var $dom = {
    fieldset: $('#fieldset'),
    txt_code: $('#code'),
    txt_resultado: $('#resultado'),
    procesar: $('#procesar')
  };

  $dom.procesar.on('click', function(e){

    $dom.txt_resultado.val('En proceso...');
    $dom.fieldset.attr('disabled', true);

    var v_code = $dom.txt_code.val();

    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
      if (this.readyState != 4) return;
      if (this.status === 200) v_code = this.responseText;
      $dom.txt_resultado.val(v_code);
      $dom.fieldset.attr('disabled', false);
    };
    xhr.open('POST', './' + $dom.procesar.data('url'), true);
    xhr.send(v_code);

  });

});