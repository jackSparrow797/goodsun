$(document).ready(function () {

    $(document).on('click', ".to-cancel", function (e) {
        e.preventDefault();
        $('#catalog-filters')[0].reset();
        let data = $('#catalog-filters').serialize();
        ajax_catalog(data);
    });

    $(document).on('change', "#catalog-filters input", function () {
        let data = $('#catalog-filters').serialize();
        ajax_catalog(data);

    });

    let ajax_catalog = function (data) {

        console.log("data: ", data);
        $.ajax({
            type: 'GET',
            data: data,
            url: '/ajax-catalog',
            success: function (data) {
                $('#catalog').html(data);
            },
            error: function (xhr, str) {
                alert('Ошибка: ' + xhr.responseCode);
            }
        });
    };

});
