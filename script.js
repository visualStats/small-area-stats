$(document).ready(function () {

    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/urban_areas.json",
        "dataType": "json",
        "success": function (result) {
            $("select[name=select-area]").empty().append($("<option>")).select2({
                theme: 'bootstrap-5',
                minimumInputLength: 0,
                allowClear: true,
                width: '80%',
                placeholder: "Select an Area",
                data: result
            }).on('select2:select', function (e) {
                if ($(this).val()) {
                    fetchSmallAreas();
                }
            });
        }
    })
});
