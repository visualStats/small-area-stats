var smallAreaGuids = [];
renderThemes = function () {
    $.each(config.themes, function (index, value) {
        $("select[name=theme]").append($("<option>", {
            "value": value.id,
            "text": value.text
        }))
    });
};

fetchSmallAreas = function () {
    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson",
        "dataType": "json",
        "success": function (result) {
            smallAreaGuids = [];
            $.each(result.features, function (index, value) {
                smallAreaGuids.push(value.properties.code)
            });
            $('[name="town"]').empty();
            $('[name="data-total"]').empty();
            $('[name="data-total-label"]').empty();
            $("select[name=theme]").prop('disabled', false).trigger("change");
            $("#results-wrapper").find('[name="number-small-areas"]').text(smallAreaGuids.length.toLocaleString());
            $('[name="town"]').text($("select[name=select-area]  option:selected").text());
            $("#results-wrapper").find('[name="title"]').show();
        }
    })
};

renderData = function () {
    $.getJSON("indicators/" + $("select[name=theme]").val() + ".json", function (result) {
        $.each(result, function (index, value) {
            var indicatorCard = $('#templates [name="indicator-card"]').clone();
            indicatorCard.attr("id", "results-indicator-" + index);
            indicatorCard.find('[name="widget"]').attr("id", "results-indicator-widget-" + index);
            indicatorCard.find('[name="title"]').text(value.title);
            $("#indicators-wrapper").append(indicatorCard);

            var mapConfig = $.extend(true, {}, value.map.snippet);
            mapConfig.data.datasets[0].api.query.data.params.dimension.C04172V04943.category.index = smallAreaGuids;
            mapConfig.options.geojson = "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson";
            t4Sdk.pxWidget.create(
                "map",
                "results-indicator-widget-" + index,
                true,
                mapConfig,
                "dropdown",
                value.map.toggleDimension,
                value.map.toggleVariables,
                value.map.defaultVariable,
                {
                    "width": '100%',
                    "theme": "bootstrap-5"
                }
            );

            $('#results-indicator-widget-' + index + ' [name="toggle-select-label"]').addClass("form-label");
            $('#results-indicator-widget-' + index + ' .widget-toggle-input-group').addClass("mb-3");

            $("#results-indicator-widget-" + index + " select").on("change", function () {
                renderTotal($.extend(true, {}, value.total), value.map.toggleDimension, "#results-indicator-" + index);
            });

        });
    });

};

renderTotal = function (query, toggleDimension, indicator) {
    query.params.dimension.C04160V04929.category.index = [$("select[name=select-area]").val()];
    query.params.dimension[toggleDimension].category.index = [$("" + indicator + " select").val()];

    $.getJSON("https://ws.cso.ie/public/api.jsonrpc?data=" + JSON.stringify(query), function (result) {
        var total = t4Sdk.dataConnector.parseSingleValue(result.result);
        $(indicator).find('[name="data-total"]').text(total.value);
        $(indicator).find('[name="data-total-label"]').text($("" + indicator + " select option:selected").text());
    });
};
