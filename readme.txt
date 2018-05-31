ojet create input-country-testbed --template=basic

cd input-country-testbed

ojet create component input-country


open component.json in input-country-testbed\src\js\jet-composites\input-country

{
  "name": "input-country",
  "displayName": "input-country",
  "description": "This component allows users to input the name of a country - 
  either by typing it or by selecting it on a map presented in a popup.",
  "version": "1.0.0",
  "jetVersion": "^4.1.0",
  "properties": { 
    "countryName": {
      "description": "Property to hold the name of the selected country; a string can be passed in, or a data bound expression",
      "type": "string",
      "writeback": true
    }
  },
  "methods": {},
  "events" : {},
  "slots": {}
}

cd input-country-testbed\src\js

mkdir views
mkdir viewModels

create view views\workarea.html

<body class="demo-disable-bg-image">
    <h1>Country Browser</h1>
    <p>Click on World icon to open a popup with the currently selected country highlight. Select a country and click or press Save to confirm the selection - and the corresponding Wikipedia article is shown </p>
      <div>
          <input-country country-name="{{country}}" />
      </div>
</body>  

create viewModel viewModels\workarea.js

requirejs.config(
    {
      // create path mapping for input-country module
      paths:
      {
        'input-country':'jet-composites/input-country'
      }
    });
define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojknockout', 'ojs/ojinputtext'
    , 'input-country/loader'
],
    function (oj, ko, $) {
        'use strict';
        function WorkareaViewModel() {
            var self = this;
            // initialize two country observables
            self.country = ko.observable("Italy");
           }

        return new WorkareaViewModel();
    }
);



index.html - between header and footer
      <div role="main" class="oj-web-applayout-max-width oj-web-applayout-content">          
        <div data-bind="ojModule:'workarea'"/>          
      </div>


main.js:
replace
require(['ojs/ojcore', 'knockout', 'appController', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu','ojs/ojmodule'],  function (oj, ko, app) { // this callback gets executed when all required modules are loaded
