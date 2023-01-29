(function(window, undefined) {
  var dictionary = {
    "bd98fb97-c731-4ab2-ac90-4303705c62dd": "Menu",
    "7661a68e-daf3-463d-9e7f-766fd71a4baf": "Timetable",
    "a48e8b2e-8375-43bd-a6d1-88d5c38c41eb": "Notes",
    "d9c5d2a1-a1de-46e2-991b-a502f012afae": "notification reply",
    "52e33efd-f907-4a8e-a7bb-380cd9ff8d87": "Group SPM",
    "957a3195-44dc-468a-9028-8f2a401ac6e3": "Note View",
    "c3c239ec-5b6e-4b32-bf5f-0b94d1b29c65": "Groups",
    "923d9e68-8c6e-4d91-bae3-03c5d7d1c0bb": "Register",
    "dc1cac0e-cc7b-49db-b7db-63b9978b90bb": "note editor",
    "61e61ea9-0c22-4ce3-ad4e-73b05e754ee4": "Setting",
    "c4cfbce6-2ba4-4243-8e90-065138619b9a": "Tasks",
    "715612e1-2eba-4a6f-80c2-a330ca12e871": "savenote",
    "77afa894-9253-4a18-95c7-8eba99987260": "Home",
    "ce0dbf8a-a79c-45ba-befd-e6c5c841bbcf": "Friends",
    "3b46ee9b-ea23-40d2-9b59-57954d98bb93": "Notification",
    "9aa3fd57-47fb-4584-b9ea-83740df1df6a": "comment group",
    "29eced02-323b-40ba-9aca-311cca7b887d": "Calendar",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login ",
    "57a9b991-ec4e-4007-ad8b-7d8a626b95a8": "Group SPM ms2",
    "28be4074-92a1-4c4a-abb7-8f29a6bd119e": "Note View Group",
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