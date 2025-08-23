$(document).ready(function(){
    $('header button').click(function(){
        $('form').slideDown();
    });

    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    });

    $('form').on('submit',function(e){
        e.preventDefault();
        const adressNewImage = $('#new-image-adress').val();
        const newItem = $('<li style="display:none"></li>');
        $(`<img src="${adressNewImage}"/>`).appendTo(newItem);
        $(`<div class="ouverlay-image-link">
                <a href="${adressNewImage}" title="Ver imagem em tamanho real" target="_blank">
                Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(newItem);
        $(newItem).appendTo('ul');
        $(newItem).fadeIn(1000);
        $('#new-image-adress').val('');
    });
});