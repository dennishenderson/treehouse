// Print Error Mesages
function printError(error) {
  const message = `There was an error processing your request. Error Message: (${error.message})`;
  console.error(message);
}

// Function to print message to console
function printMessage(username, badgeCount, points) {
  const message = `${username} has ${badgeCount} total badge(s) an ${points} points in JavaScript`
  console.log(message);
}

module.exports.printError = printError;
module.exports.printMessage = printMessage;
