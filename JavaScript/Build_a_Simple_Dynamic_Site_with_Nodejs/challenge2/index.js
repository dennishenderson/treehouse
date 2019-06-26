var utilities = require("./utilities");

var mailValues = {};

mailValues.first_name = "Janet";

var emailTemplate = "Hi %first_name%! Thanks for completing this code challenge :)";

var mergedContent = utilities.merge(emailTemplate, mailValues);

//mergedContent === "Hi Janet! Thanks for completing this code challenge :)";

console.log(mailValues);
console.log(mergedContent);
