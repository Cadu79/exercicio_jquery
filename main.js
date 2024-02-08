$('form').on('submit', function() {
    e.preventDefault();

    let tarefa = $('texto').val();
    const linha = $('<li>'+tarefa+'</li>');

    
    $("#lista").append(linha);
});

$('ul').on("click", "li", function() {
    $('this').css('text-decoration', 'line-throught');
});
