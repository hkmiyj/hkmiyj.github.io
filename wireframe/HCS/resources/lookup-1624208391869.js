(function(window, undefined) {
  var dictionary = {
    "70f0c5ba-796d-4158-b566-aa552b0075f5": "Home",
    "7190a803-8479-4aff-81aa-3fccc6509c23": "Manual Control",
    "5ea81192-f228-4992-9a2e-6ee8b74458f6": "Notification",
    "6aed63ce-3b48-4071-8a68-08ffc8d845d0": "Control2Add",
    "bd404998-b88e-4f65-83ad-d4f0d55108f4": "Iphone Page",
    "50aedd31-ced5-4d5e-ac6e-b78f46c4d8d5": "Setting",
    "fcfe0b4c-0c78-4061-b5d3-a9370dc9416e": "Iphone Lock",
    "9eaf3b65-233c-4786-9741-f050a4784ed3": "Planner",
    "1c38c44a-1c8a-40d7-97c3-63e4526a507c": "add time",
    "1102f0ea-aa2c-4e1a-bc43-4e4a85ce724f": "Control",
    "cc058563-f334-4060-bba8-b98be392be6e": "Register",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "18be993d-7571-49ca-8166-f133ec91f0da": "Home2",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);