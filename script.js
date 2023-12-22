$(document).ready(function () {

    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/urban_areas.json",
        "dataType": "json",
        "success": function (result) {
            debugger
            $("select[name=select-area]").empty().append($("<option>")).select2({
                theme: 'bootstrap-5',
                minimumInputLength: 0,
                //  width: '100%',
                placeholder: "Select a Town/Urban Area",
                data: result
            }).on('select2:select', function (e) {
                if ($(this).val()) {
                    fetchSmallAreas(true);
                }
            });
        }
    });

    $("select[name=theme]").on("change", renderData);

});
