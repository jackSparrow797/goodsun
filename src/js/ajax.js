$(document).ready(function () {

    $(document).on('click', '.ajax-link', function (e) {
       e.preventDefault();
       let target = $(this).attr('href');
        $.ajax({
            type: 'GET',
            url: target,
            success: function (data) {
                $('#modal-ajax .modal-content').html(data);
                $('#modal-ajax').modal('show');
            },
            error: function (xhr, str) {
                alert('Ошибка: ' + xhr.responseCode);
            }
        });
    });

});