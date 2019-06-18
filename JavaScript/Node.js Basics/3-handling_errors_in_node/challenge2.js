const jsonString = 'This is not a JSON String';

try{
  const jsonObject = JSON.parse(jsonString);
} catch (error) {
  console.error(error.message);
}
