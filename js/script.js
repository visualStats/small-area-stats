$(document).ready(function () {

    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/js/urban_areas.json",
        "dataType": "json",
        "success": function (result) {
            renderThemes();
            $("select[name=select-area]").empty().append($("<option>")).select2({
                theme: 'bootstrap-5',
                minimumInputLength: 0,
                placeholder: "Select a Town/Urban Area",
                data: result
            }).on('select2:select', function (e) {
                if ($(this).val()) {
                    $("#results-wrapper").find('[name="title"]').hide();
                    $("#indicators-wrapper").empty();
                    fetchSmallAreas();
                }
            });
        }
    });

    $("select[name=theme]").on("change", function () {
        $("#indicators-wrapper").empty();
        renderData();
    });

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#back-to-top').fadeIn();
        } else {
            $('#back-to-top').fadeOut();
        }
    });
    // scroll body to 0px on click
    $('#back-to-top').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

});
