function merge(content, values) {

  for (let key in values) {
    // Replace all {{key}} with the value from the values object
    content = content.replace("%" + key + "%", values[key]);
  }
  
  return content;
}


module.exports.merge = merge;
