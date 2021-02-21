/**
 * This script is loaded on the Menu page.
 * 
 * It dynamically loads the list of countries from the data,
 * and creates a list that links to each individual country pages.
 */

// Load the script when the document is ready
$( document ).ready(function() {

    // Iterate through the list of countries
    for(var key in country_codes){

        // Create HTML list item for each country
        var country_row = 
            '<a href="./country.html?country='
            + country_codes[key]["country_iso_2_char_code"]
            + '"><li>' + country_codes[key]["country"]
            + "</li></a>";

        // Add the HTML list item to the list of countries
        $("#countrylist").append(country_row);
    }
  });
