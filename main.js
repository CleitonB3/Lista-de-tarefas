$(document).ready(function(){
    $('form').on('submit',function(e){
        e.preventDefault();
        const tarefaNova = $('#t-nova').val();
        const novoItem = $('<li> </li>');
        
        $(`<p>${tarefaNova}</p>`).appendTo(novoItem);
        $(novoItem).appendTo('ul');

        $('li').click(function () {
            $(this).toggleClass('line-through');
        });
    })
})