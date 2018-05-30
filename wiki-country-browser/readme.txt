on commandline

ojet create wiki-country-browser --template=basic

cd wiki-country-browser/src/js

mkdir views
mkdir viewModels
mkdir jet-composites


git clone https://github.com/lucasjellema/jet-composite-component-showroom


move jet-composite-component-showroom\src\js\jet-composites\input-country .\jet-composites


create view views/country.html

<body class="demo-disable-bg-image">
    <h1>Country Browser</h1>
    <p>Click on World icon to open a popup with the currently selected country highlight. Select a country and click or press Save to confirm the selection - and the corresponding Wikipedia article is shown </p>
      <div>
          <input-country country-name="{{country}}" />
      </div>
</body>  


create viewModel viewModels/country.js
requirejs.config(
    {
      // create path mapping for input-country module
      paths:
      {
        'input-country':'jet-composites/input-country'
      }
    });
  define(['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojcomposite', 'jet-composites/input-country/loader'],
    function (oj, ko, $) {
  
      function CountryViewModel() {
        var self = this;
  
        self.country = ko.observable("Italy");
        self.upperCountry = ko.computed(function() {
            return this.country().toUpperCase();                
        }, self);
  
        self.handleCountrySelection= function (selectedCountryName, selectedCountryCode) {
            console.log(`Handle Country Selection name ${selectedCountryName} and code ${selectedCountryCode}`);
        }
      }
  
      return new CountryViewModel();
    }
  );
  

main.js:

replace define line:

require(['ojs/ojcore', 'knockout', 'appController', 'ojs/ojknockout', 'ojs/ojbutton', 'ojs/ojtoolbar', 'ojs/ojmenu','ojs/ojmodule'],


in index.html between header and footer:
<div role="main" class="oj-web-applayout-max-width oj-web-applayout-content">          
        <h3>index.html: Module Country</h3>          
        <div data-bind="ojModule:'country'"/>          
</div>  



from root directory of application:

ojet serve

edit view views/country.html

<body class="demo-disable-bg-image">
    <h1>Country Browser</h1>
    <p>Click on World icon to open a popup with the currently selected country highlight. Select a country and click or press Save to confirm the selection - and the corresponding Wikipedia article is shown </p>
      <div>
          <input-country country-name="{{country}}" country-selection-handler={{handleCountrySelection}} />
      </div>
      <h2 data-bind="text: upperCountry"></h2>
      <iframe id="countryIframe" data-bind="attr: {src:  'https://en.wikipedia.org/wiki/'+country()}" style="overflow-y : hidden ; height : 600px ; width :  100% ;border-width:0;" scrolling="yes" /></div>
</body>  
