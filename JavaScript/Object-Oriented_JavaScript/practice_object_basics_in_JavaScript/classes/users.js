class User {
  constructor(email, username, birthday) {
    this.email = email;
    this.username = username;
    this.birthday = birthday;
  }

  changeUsername(username) {
    this.username = username;
  }
}

const user1 = new User("JavaScriptStudent@teamtreehouse.com", "JSUser1", "1/08/1991");

user1.changeUsername("TreehouseStudent2");
