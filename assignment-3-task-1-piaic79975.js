// Declare and initialize an array of education qualifications
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

// Get the element where you want to display the qualifications
var qualificationsList = document.getElementById("qualifications-list");

// Generate the HTML content for the qualifications list
var qualificationsHTML = "<ul>";
for (var i = 0; i < qualifications.length; i++) {
  qualificationsHTML += "<li>" + qualifications[i] + "</li>";
}
qualificationsHTML += "</ul>";

// Display the qualifications list in the browser
qualificationsList.innerHTML = qualificationsHTML;
