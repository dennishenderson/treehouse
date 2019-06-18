const personString = '{"name": "Lauren"}';
try {
  const person = JSON.parse(personString);
  console.log(person.name);
} catch(err) {
  console.error("Couldn't parse the JSON");
}

https.get("https://wwwteamtreehouse.com/chalkers.json", function(response) {
  console.log(response.statusCode);
}).on("error", function(error) {
  console.error("Something went wrong with the connection!");
});
