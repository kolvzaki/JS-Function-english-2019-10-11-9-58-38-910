function countWords(message){
  let regex = /\b[a-zA-Z]+\b/g

  return message.match(regex).length
}