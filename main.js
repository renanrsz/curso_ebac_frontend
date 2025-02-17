$(document).ready(function(){
    $('form').on('submit', function(e) {
        e.preventDefault();
    
        const novaTarefa = $('#nova_tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $(novoItem).appendTo('ul');

        $('#nova_tarefa').val('');

        $('ul').on('click','li', function(){
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', '#075515');
        })

        $('ul').on('dblclick','li', function(){
            $(this).css('text-decoration', 'none');
            $(this).css('color', 'black');
        })
    });
})