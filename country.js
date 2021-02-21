/**
 * This script is loaded on the Country page.
 * 
 * It dynamically loads the country code from the URL parameter,
 * loads the data from the sources and displays the country name
 * and the current description of the situation.
 */

// Load the script when the document is ready
$( document ).ready(function() {

    // Get the country code from the URL parameter
    var country_code = getParameter("country");
    var country_status = getCountryInfo(country_code);
  
    // Display the country name and description of the situation
    $("#countryname").text(getNameFromISO2(country_code));
    $("#countrydesc").html(country_status.description);
  
    if(country_status.restriction_level == "Fully restrictive"){
      $("#countrydesc").addClass("alert-danger")
    } else if (country_status.restriction_level == "Partially restrictive"){
      $("#countrydesc").addClass("alert-warning")
    } else if (country_status.restriction_level == "Not restrictive"){
      $("#countrydesc").addClass("alert-success")
    } else {
      $("#countrydesc").addClass("alert-primary")
    }
  
  }); 