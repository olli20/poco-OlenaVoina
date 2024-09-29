console.log(parseInt("123abc"));  // 123
console.log(parseInt("123", 10)); // 123 (parsed in base 10)
// the string "123" is interpreted as a decimal (base 10)
console.log(parseInt("101", 2));  // 5 (parsed in base 2, binary)
console.log(parseInt("abc123"));  // NaN (unparseable string)
