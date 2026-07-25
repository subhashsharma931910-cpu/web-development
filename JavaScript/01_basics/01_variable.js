const accountId = 123456;
let accountEmail = "Subhash123@gmail.com";
var accountPassword = "12345";
accountCity = "delhi";

// accountId = 789012; not allowed
accountEmail = "ABCD@gmail.com"
accountPassword = "7895985"
accountCity = "mumbai"

console.log(accountId);
/*
 Prefer not to use var 
 because is issue in block scope function scope
*/

console.log([accountId, accountEmail, accountPassword, accountCity]);

