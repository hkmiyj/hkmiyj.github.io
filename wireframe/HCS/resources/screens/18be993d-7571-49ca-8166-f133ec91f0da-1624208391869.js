jQuery("#simulation")
  .on("click", ".s-18be993d-7571-49ca-8166-f133ec91f0da .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Rectangle_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eaf3b65-233c-4786-9741-f050a4784ed3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9": {
                      "attributes": {
                        "stroke": "#FF0000"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FF0000"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10": {
                      "attributes": {
                        "stroke": "#1490FB"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#1490FB"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11": {
                      "attributes": {
                        "stroke": "#F000FF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#F000FF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Ellipse_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ],
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12": {
                      "attributes": {
                        "stroke": "#FF8C00"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_12 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FF8C00"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_10 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_11 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9": {
                      "attributes": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-18be993d-7571-49ca-8166-f133ec91f0da #s-Ellipse_9 > .borderLayer": {
                      "attributes-ie": {
                        "stroke": "#FFFFFF"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1102f0ea-aa2c-4e1a-bc43-4e4a85ce724f"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/5ea81192-f228-4992-9a2e-6ee8b74458f6"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/50aedd31-ced5-4d5e-ac6e-b78f46c4d8d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70f0c5ba-796d-4158-b566-aa552b0075f5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/9eaf3b65-233c-4786-9741-f050a4784ed3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "pop",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("pageload", ".s-18be993d-7571-49ca-8166-f133ec91f0da .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Text_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Text_2" ],
                    "value": {
                      "action": "jimSubstring",
                      "parameter": [ {
                        "action": "jimSystemTime"
                      },"0","5" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });