$('button').click(function() {
  const newName = $('#name-input').val();
  $('.profile-name').text(newName);
});
