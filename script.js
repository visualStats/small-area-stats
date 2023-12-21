$(document).ready(function () {

    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/urban_areas.json",
        "dataType": "json",
        "success": function (result) {
            $("select[name=select-area]").empty().append($("<option>")).select2({
                theme: 'bootstrap-5',
                minimumInputLength: 0,
                width: '100%',
                placeholder: "Select a Town/Urban Area",
                data: result
            }).on('select2:select', function (e) {
                if ($(this).val()) {
                    $("#results-wrapper").hide();
                    $('#theme-accordion').collapse("hide");
                    $("#theme-accordion").find(".widget-toggle-wrapper").empty();
                    $('[name="town"]').empty();
                    $('[name="data-total"]').empty();
                    $('[name="data-total-label"]').empty();
                    fetchSmallAreas();
                }
            });

            $("select[name=select-area]").show();
        }
    });

    $('#theme-accordion').on('shown.bs.collapse', function (e) {
        switch (e.target.attributes.id.value) {
            case "populationCollapse":
                if ($("#populationCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderPopulationSexMap();
                    renderPopulationAgeMap();
                    renderPopulationMartialStatusMap();
                }
                break;
            case "housingCollapse":
                if ($("#housingCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderHouseMap();
                }
                break;
            case "healthCollapse":
                if ($("#healthCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderSmokingMap();
                }
                break;
            case "occupationsCollapse":
                if ($("#occupationsCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderOccupationsMap();
                };
                break;
            default:
                break;
        }

    })

});
