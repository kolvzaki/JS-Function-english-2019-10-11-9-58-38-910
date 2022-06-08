function palindrome(message){
  let str = message.split("").reverse().join("")
  return str === message
}