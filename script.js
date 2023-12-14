$(document).ready(function () {

    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/urban_areas.json",
        "dataType": "json",
        "success": function (result) {
            $("select[name=select-area]").empty().append($("<option>")).select2({
                theme: 'bootstrap-5',
                minimumInputLength: 0,
                width: '100%',
                placeholder: "Select an Town or Urban Area",
                data: result
            }).on('select2:select', function (e) {
                if ($(this).val()) {
                    $("#theme-accordion").hide();
                    $('#theme-accordion').collapse("hide");
                    fetchSmallAreas();
                }
            });
        }
    });

    $('#theme-accordion').on('shown.bs.collapse', function (e) {
        switch (e.target.attributes.id.value) {
            case "populationCollapse":
                if ($("#populationCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderPopulationSexMap(guidsInParent);
                    renderPopulationAgeMap(guidsInParent);
                    renderPopulationMartialStatusMap(guidsInParent);
                }
                break;
            case "housingCollapse":
                if ($("#housingCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderHouseMap(guidsInParent);
                }
                break;
            case "healthCollapse":
                if ($("#healthCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderSmokingMap(guidsInParent);
                }
                break;
            case "occupationsCollapse":
                if ($("#occupationsCollapse .widget-toggle-wrapper").first().is(':empty')) {
                    renderOccupationsMap(guidsInParent);
                };
                break;
            default:
                break;
        }

    })

});
