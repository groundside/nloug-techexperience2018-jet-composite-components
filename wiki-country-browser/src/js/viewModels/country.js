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
  