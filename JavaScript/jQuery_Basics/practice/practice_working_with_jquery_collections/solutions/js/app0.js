//1. Add a "featured" tag to the second item in the list:
  //  Append a new span element containing the word "Featured" to the list item
  const $newFeature = $('#restaurantList li').eq(1);
  $newFeature.append(`<span>Featured</span>`);
  //  Add a class of "featured" to the new span element.
  $newFeature.find('span').addClass('featured');

//2. Add a class of "new" to the last item in the list. You can traverse to the last item or find a jQuery method that helps you select the last item in the list.
$('#restaurantList li').last().addClass('new');

//3. Add an attribute to each link so that all anchor tags open in a new tab.
$('a').attr('target', '_blank');

//4. Select and print the index and text of each anchor tag to the console
$('a').each(function(index, element){
  console.log(`index: ${index}`);
  console.log(`text: ${element.text}`)
});

//5. Refactor question #4 using the 'this' keyword.
$('a').each(function(index){
  console.log(`index: ${index}`);
  console.log(`text: ${this.text}`)
});
