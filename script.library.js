fetchSmallAreas = function () {
    $.ajax({
        "url": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson",
        "dataType": "json",
        "success": function (result) {
            var guidsInParent = [];

            $.each(result.features, function (index, value) {
                guidsInParent.push(value.properties.code)
            });
            $('[name="results"]').show();

            renderPopulationMap(guidsInParent);
            renderHouseMap(guidsInParent);
            renderSmokingMap(guidsInParent);
            renderOccupationsMap(guidsInParent);

            $('[name="town"]').text($("select[name=select-area]  option:selected").text());

        }
    })
}

renderPopulationMap = function (guids) {

    var totalConfig = {
        "jsonrpc": "2.0",
        "method": "PxStat.Data.Cube_API.ReadDataset",
        "params": {
            "class": "query",
            "id": [
                "C04160V04929",
                "C03737V04485",
                "C03738V04487"
            ],
            "dimension": {
                "C04160V04929": {
                    "category": {
                        "index": [
                            $("select[name=select-area]").val()
                        ]
                    }
                },
                "C03737V04485": {
                    "category": {
                        "index": []
                    }
                },
                "C03738V04487": {
                    "category": {
                        "index": [
                            "B"
                        ]
                    }
                }
            },
            "extension": {
                "pivot": null,
                "codes": false,
                "language": {
                    "code": "en"
                },
                "format": {
                    "type": "JSON-stat",
                    "version": "2.0"
                },
                "matrix": "SAP2022T1T1ATOWN22"
            },
            "version": "2.0"
        }
    };


    var mapConfig = {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04172V04943",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T1T1ASA",
        "title": null,
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "data": {
            "datasets": [{
                "api": {
                    "query": {
                        "url": "https://ws.cso.ie/public/api.jsonrpc",
                        "data": {
                            "jsonrpc": "2.0",
                            "method": "PxStat.Data.Cube_API.ReadDataset",
                            "params": {
                                "class": "query",
                                "id": ["STATISTIC", "TLIST(A1)", "C04172V04943", "C03737V04485", "C03738V04487"],
                                "dimension": {
                                    "STATISTIC": {
                                        "category": {
                                            "index": ["SAP2022T1T1C01"]
                                        }
                                    },
                                    "TLIST(A1)": {
                                        "category": {
                                            "index": ["2022"]
                                        }
                                    },
                                    "C04172V04943": {
                                        "category": {
                                            "index": guids
                                        }
                                    },
                                    "C03737V04485": {
                                        "category": {
                                            "index": ["AGET"]
                                        }
                                    },
                                    "C03738V04487": {
                                        "category": {
                                            "index": ["B"]
                                        }
                                    }
                                },
                                "extension": {
                                    "language": {
                                        "code": "en"
                                    },
                                    "format": {
                                        "type": "JSON-stat",
                                        "version": "2.0"
                                    },
                                    "matrix": "SAP2022T1T1ASA"
                                },
                                "version": "2.0",
                                "m2m": false
                            }
                        }
                    },
                    "response": {}
                },
                "fluidTime": [0]
            }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T1T1ASA",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {}
            }
        },
        "options": {
            "mode": "q",
            "geojson": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson"
        },
        "baseMap": {
            "leaflet": [],
            "esri": [{
                "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
            }
            ]
        }
    };

    t4Sdk.pxWidget.create(
        "map",
        "population-widget-wrapper",
        true,
        mapConfig,
        "dropdown",
        "C03737V04485",
        null,
        "AGET"
    );

    $("#population-widget-wrapper select").on("change", function () {
        totalConfig.params.dimension.C03737V04485.category.index = [$(this).val()]
        $.getJSON("https://ws.cso.ie/public/api.jsonrpc?data=" + JSON.stringify(totalConfig), function (result) {
            var total = t4Sdk.dataConnector.parseSingleValue(result.result);
            $("#population-data-total").text(total.value);
            $("#population-data-total-label").text($("#population-widget-wrapper select option:selected").text());
        });
    });

}

renderHouseMap = function (guids,) {
    var totalConfig = {
        "jsonrpc": "2.0",
        "method": "PxStat.Data.Cube_API.ReadDataset",
        "params": {
            "class": "query",
            "id": [
                "STATISTIC",
                "C04160V04929",
                "C03782V04531"
            ],
            "dimension": {
                "STATISTIC": {
                    "category": {
                        "index": [
                            "SAP2022T6T2C01"
                        ]
                    }
                },
                "C04160V04929": {
                    "category": {
                        "index": [
                            $("select[name=select-area]").val()
                        ]
                    }
                },
                "C03782V04531": {
                    "category": {
                        "index": []
                    }
                }
            },
            "extension": {
                "pivot": null,
                "codes": false,
                "language": {
                    "code": "en"
                },
                "format": {
                    "type": "JSON-stat",
                    "version": "2.0"
                },
                "matrix": "SAP2022T6T2TOWN22"
            },
            "version": "2.0"
        }
    };


    var mapConfig = {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04172V04943",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T6T2SA",
        "title": null,
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "data": {
            "datasets": [{
                "api": {
                    "query": {
                        "url": "https://ws.cso.ie/public/api.jsonrpc",
                        "data": {
                            "jsonrpc": "2.0",
                            "method": "PxStat.Data.Cube_API.ReadDataset",
                            "params": {
                                "class": "query",
                                "id": ["STATISTIC", "TLIST(A1)", "C04172V04943", "C03782V04531"],
                                "dimension": {
                                    "STATISTIC": {
                                        "category": {
                                            "index": ["SAP2022T6T2C01"]
                                        }
                                    },
                                    "TLIST(A1)": {
                                        "category": {
                                            "index": ["2022"]
                                        }
                                    },
                                    "C04172V04943": {
                                        "category": {
                                            "index": guids
                                        }
                                    },
                                    "C03782V04531": {
                                        "category": {
                                            "index": ["PRE19"]
                                        }
                                    }
                                },
                                "extension": {
                                    "language": {
                                        "code": "en"
                                    },
                                    "format": {
                                        "type": "JSON-stat",
                                        "version": "2.0"
                                    },
                                    "matrix": "SAP2022T6T2SA"
                                },
                                "version": "2.0",
                                "m2m": false
                            }
                        }
                    },
                    "response": {}
                },
                "fluidTime": [0]
            }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T6T2SA",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {}
            }
        },
        "options": {
            "mode": "q",
            "geojson": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson"
        },
        "baseMap": {
            "leaflet": [],
            "esri": [{
                "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
            }
            ]
        }
    }
        ;

    t4Sdk.pxWidget.create(
        "map",
        "house-widget-wrapper",
        true,
        mapConfig,
        "dropdown",
        "C03782V04531",
        null,
        null
    );

    $("#house-widget-wrapper select").on("change", function () {
        totalConfig.params.dimension.C03782V04531.category.index = [$(this).val()];
        $.getJSON("https://ws.cso.ie/public/api.jsonrpc?data=" + JSON.stringify(totalConfig), function (result) {
            var total = t4Sdk.dataConnector.parseSingleValue(result.result);
            $("#house-data-total").text(total.value);
            $("#house-data-total-label").text($("#house-widget-wrapper select option:selected").text());

        });
    });

}

renderSmokingMap = function (guids) {

    var totalConfig = {
        "jsonrpc": "2.0",
        "method": "PxStat.Data.Cube_API.ReadDataset",
        "params": {
            "class": "query",
            "id": [
                "C04096V04858",
                "C04160V04929"
            ],
            "dimension": {
                "C04096V04858": {
                    "category": {
                        "index": []
                    }
                },
                "C04160V04929": {
                    "category": {
                        "index": [
                            $("select[name=select-area]").val()
                        ]
                    }
                }
            },
            "extension": {
                "pivot": null,
                "codes": false,
                "language": {
                    "code": "en"
                },
                "format": {
                    "type": "JSON-stat",
                    "version": "2.0"
                },
                "matrix": "SAP2022T12T4TOWN22"
            },
            "version": "2.0"
        }
    };

    var mapConfig = {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04172V04943",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T12T4SA",
        "title": null,
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "data": {
            "datasets": [
                {
                    "api": {
                        "query": {
                            "url": "https://ws.cso.ie/public/api.jsonrpc",
                            "data": {
                                "jsonrpc": "2.0",
                                "method": "PxStat.Data.Cube_API.ReadDataset",
                                "params": {
                                    "class": "query",
                                    "id": [
                                        "STATISTIC",
                                        "TLIST(A1)",
                                        "C04096V04858",
                                        "C04172V04943"
                                    ],
                                    "dimension": {
                                        "STATISTIC": {
                                            "category": {
                                                "index": [
                                                    "SAP2022T12T4C01"
                                                ]
                                            }
                                        },
                                        "TLIST(A1)": {
                                            "category": {
                                                "index": [
                                                    "2022"
                                                ]
                                            }
                                        },
                                        "C04096V04858": {
                                            "category": {
                                                "index": [
                                                    "-"
                                                ]
                                            }
                                        },
                                        "C04172V04943": {
                                            "category": {
                                                "index": guids
                                            }
                                        }
                                    },
                                    "extension": {
                                        "language": {
                                            "code": "en"
                                        },
                                        "format": {
                                            "type": "JSON-stat",
                                            "version": "2.0"
                                        },
                                        "matrix": "SAP2022T12T4SA"
                                    },
                                    "version": "2.0",
                                    "m2m": false
                                }
                            }
                        },
                        "response": {

                        }
                    },
                    "fluidTime": [
                        0
                    ]
                }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T12T4SA",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {

                }
            }
        },
        "options": {
            "mode": "q",
            "geojson": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson"
        },
        "baseMap": {
            "leaflet": [

            ],
            "esri": [
                {
                    "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                    "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
                }
            ]
        }
    };

    t4Sdk.pxWidget.create(
        "map",
        "smoking-widget-wrapper",
        true,
        mapConfig,
        "dropdown",
        "C04096V04858",
        "500, 600, 999",
        null
    );

    $("#smoking-widget-wrapper select").on("change", function () {
        totalConfig.params.dimension.C04096V04858.category.index = [$(this).val()];
        $.getJSON("https://ws.cso.ie/public/api.jsonrpc?data=" + JSON.stringify(totalConfig), function (result) {
            var total = t4Sdk.dataConnector.parseSingleValue(result.result);
            $("#smoking-data-total").text(total.value);
            $("#smoking-data-total-label").text($("#smoking-widget-wrapper select option:selected").text());
        });
    });

};

renderOccupationsMap = function (guids) {

    var totalConfig = {
        "jsonrpc": "2.0",
        "method": "PxStat.Data.Cube_API.ReadDataset",
        "params": {
            "class": "query",
            "id": [
                "C03738V04487",
                "C03773V04522",
                "C04160V04929"
            ],
            "dimension": {
                "C03738V04487": {
                    "category": {
                        "index": [
                            "B"
                        ]
                    }
                },
                "C03773V04522": {
                    "category": {
                        "index": []
                    }
                },
                "C04160V04929": {
                    "category": {
                        "index": [
                            $("select[name=select-area]").val()
                        ]
                    }
                }
            },
            "extension": {
                "pivot": null,
                "codes": false,
                "language": {
                    "code": "en"
                },
                "format": {
                    "type": "JSON-stat",
                    "version": "2.0"
                },
                "matrix": "SAP2022T13T1TOWN22"
            },
            "version": "2.0"
        }
    };

    var mapConfig = {
        "autoupdate": true,
        "matrix": null,
        "mapDimension": "C04172V04943",
        "copyright": true,
        "link": "https://data.cso.ie/table/SAP2022T13T1SA",
        "title": null,
        "borders": true,
        "colorScale": "red",
        "tooltipTitle": null,
        "defaultContent": "..",
        "fullScreen": {
            "title": "View Fullscreen",
            "titleCancel": "Exit Fullscreen"
        },
        "data": {
            "datasets": [
                {
                    "api": {
                        "query": {
                            "url": "https://ws.cso.ie/public/api.jsonrpc",
                            "data": {
                                "jsonrpc": "2.0",
                                "method": "PxStat.Data.Cube_API.ReadDataset",
                                "params": {
                                    "class": "query",
                                    "id": [
                                        "STATISTIC",
                                        "TLIST(A1)",
                                        "C03738V04487",
                                        "C03773V04522",
                                        "C04172V04943"
                                    ],
                                    "dimension": {
                                        "STATISTIC": {
                                            "category": {
                                                "index": [
                                                    "SAP2022T13T1C01"
                                                ]
                                            }
                                        },
                                        "TLIST(A1)": {
                                            "category": {
                                                "index": [
                                                    "2022"
                                                ]
                                            }
                                        },
                                        "C03738V04487": {
                                            "category": {
                                                "index": [
                                                    "B"
                                                ]
                                            }
                                        },
                                        "C03773V04522": {
                                            "category": {
                                                "index": [
                                                    "MDSO"
                                                ]
                                            }
                                        },
                                        "C04172V04943": {
                                            "category": {
                                                "index": guids
                                            }
                                        }
                                    },
                                    "extension": {
                                        "language": {
                                            "code": "en"
                                        },
                                        "format": {
                                            "type": "JSON-stat",
                                            "version": "2.0"
                                        },
                                        "matrix": "SAP2022T13T1SA"
                                    },
                                    "version": "2.0",
                                    "m2m": false
                                }
                            }
                        },
                        "response": {

                        }
                    },
                    "fluidTime": [
                        0
                    ]
                }
            ]
        },
        "metadata": {
            "api": {
                "query": {
                    "url": "https://ws.cso.ie/public/api.jsonrpc",
                    "data": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadMetadata",
                        "params": {
                            "matrix": "SAP2022T13T1SA",
                            "language": "en",
                            "format": {
                                "type": "JSON-stat",
                                "version": "2.0"
                            }
                        },
                        "version": "2.0"
                    }
                },
                "response": {

                }
            }
        },
        "options": {
            "mode": "q",
            "geojson": "https://cdn.jsdelivr.net/gh/visualStats/small-area-stats/small_area_geojson/" + $("select[name=select-area]").val() + ".geojson"
        },
        "baseMap": {
            "leaflet": [

            ],
            "esri": [
                {
                    "url": "https://utility.arcgis.com/usrsvcs/servers/88f1db9e4ae04df69e499223b8295843/rest/services/MapGeniePremiumWM/MapServer",
                    "disclaimer": "You can use the OSi basemap layer only in conjunction with the CSO map widgets, all other rights are reserved by OSi."
                }
            ]
        }
    };
    t4Sdk.pxWidget.create(
        "map",
        "occupations-widget-wrapper",
        true,
        mapConfig,
        "dropdown",
        "C03773V04522",
        null,
        null
    );

    $("#occupations-widget-wrapper select").on("change", function () {
        totalConfig.params.dimension.C03773V04522.category.index = [$(this).val()];
        $.getJSON("https://ws.cso.ie/public/api.jsonrpc?data=" + JSON.stringify(totalConfig), function (result) {
            var total = t4Sdk.dataConnector.parseSingleValue(result.result);
            $("#occupations-data-total").text(total.value);
            $("#occupations-data-total-label").text($("#occupations-widget-wrapper select option:selected").text());

        });
    });

}