const ul = document.getElementById('list');

$('form').on('submit', function(event) {

            
    event.preventDefault();
    
    var $input = $(this).find('input');
    var input = $input.val();
    $('#text-output').text("Você digitou: " + input);
   const linhaCima =  $('#linha-cima').val();
});
