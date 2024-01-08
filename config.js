var config = {
    "themes": [
        {
            "text": "Sex, Age and Marital Status",
            "id": "#population-results",
            "indicators": [
                {
                    "title": "Population by Sex",
                    "total": {
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
                                        "index": []
                                    }
                                },
                                "C03737V04485": {
                                    "category": {
                                        "index": ["AGET"]
                                    }
                                },
                                "C03738V04487": {
                                    "category": {
                                        "index": [
                                            null
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
                    },
                    "map": {
                        "toggleDimension": "C03738V04487",
                        "toggleVariables": null,
                        "defaultVariable": "B",
                        "snippet": {
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
                                                                "index": null
                                                            }
                                                        },
                                                        "C03737V04485": {
                                                            "category": {
                                                                "index": ["AGET"]
                                                            }
                                                        },
                                                        "C03738V04487": {
                                                            "category": {
                                                                "index": []
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
                                "mode": "k",
                                "geojson": null
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
                    }
                },
                {
                    "title": "Population by Age",
                    "total": {
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
                                        "index": []
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
                    },
                    "map": {
                        "toggleDimension": "C03737V04485",
                        "toggleVariables": null,
                        "defaultVariable": null,
                        "snippet": {
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
                                                                "index": null
                                                            }
                                                        },
                                                        "C03737V04485": {
                                                            "category": {
                                                                "index": []
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
                                "mode": "k",
                                "geojson": null,
                                "identifier": "SA_GUID"
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
                    }
                },
                {
                    "title": "Population by Martial Status",
                    "total": {
                        "jsonrpc": "2.0",
                        "method": "PxStat.Data.Cube_API.ReadDataset",
                        "params": {
                            "class": "query",
                            "id": [
                                "C04160V04929",
                                "C03739V04488",
                                "C03738V04487"
                            ],
                            "dimension": {
                                "C04160V04929": {
                                    "category": {
                                        "index": []
                                    }
                                },
                                "C03739V04488": {
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
                                "matrix": "SAP2022T1T2TOWN22"
                            },
                            "version": "2.0"
                        }
                    },
                    "map": {
                        "toggleDimension": "C03739V04488",
                        "toggleVariables": null,
                        "defaultVariable": null,
                        "snippet": {
                            "autoupdate": true,
                            "matrix": null,
                            "mapDimension": "C04172V04943",
                            "copyright": true,
                            "link": "https://data.cso.ie/table/SAP2022T1T2SA",
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
                                                            "C04172V04943",
                                                            "C03739V04488",
                                                            "C03738V04487"
                                                        ],
                                                        "dimension": {
                                                            "STATISTIC": {
                                                                "category": {
                                                                    "index": [
                                                                        "SAP2022T1T2C01"
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
                                                            "C04172V04943": {
                                                                "category": {
                                                                    "index": null
                                                                }
                                                            },
                                                            "C03739V04488": {
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
                                                            "language": {
                                                                "code": "en"
                                                            },
                                                            "format": {
                                                                "type": "JSON-stat",
                                                                "version": "2.0"
                                                            },
                                                            "matrix": "SAP2022T1T2SA"
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

                                        ]
                                    }
                                ]
                            },
                            "metadata": {
                                "api": {
                                    "query": {

                                    },
                                    "response": {

                                    }
                                }
                            },
                            "options": {
                                "mode": "k",
                                "geojson": null
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
                        }
                    }
                }
            ]
        },
        {
            "text": "Housing",
            "id": "#housing-results",
            "indicators": [
                {
                    "title": "Year house built",
                    "total": {
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
                                        "index": []
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
                    },
                    "map": {
                        "toggleDimension": "C03782V04531",
                        "toggleVariables": null,
                        "defaultVariable": null,
                        "snippet": {
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
                                                                "index": null
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
                                "mode": "k",
                                "geojson": null
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
                    }
                }
            ]
        },
        {
            "text": "Disability, Carers and General Health",
            "id": "#health-results",
            "indicators": [
                {
                    "title": "Smoking",
                    "total": {
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
                                "matrix": "SAP2022T12T4TOWN22"
                            },
                            "version": "2.0"
                        }
                    },
                    "map": {
                        "toggleDimension": "C04096V04858",
                        "toggleVariables": "500, 600, 999",
                        "defaultVariable": null,
                        "snippet": {
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
                                                                    "index": []
                                                                }
                                                            },
                                                            "C04172V04943": {
                                                                "category": {
                                                                    "index": null
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
                                "mode": "k",
                                "geojson": null
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
                        }
                    }
                }
            ]
        },
        {
            "text": "Occupations",
            "id": "#occupations-results",
            "indicators": [
                {
                    "title": "Occupation",
                    "total": {
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
                                "matrix": "SAP2022T13T1TOWN22"
                            },
                            "version": "2.0"
                        }
                    },
                    "map": {
                        "toggleDimension": "C03773V04522",
                        "toggleVariables": null,
                        "defaultVariable": null,
                        "snippet": {
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
                                                                    "index": []
                                                                }
                                                            },
                                                            "C04172V04943": {
                                                                "category": {
                                                                    "index": null
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
                                "mode": "k",
                                "geojson": null
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
                        }
                    }
                }
            ]
        }
    ]
};