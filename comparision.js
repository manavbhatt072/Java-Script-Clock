console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 == 1); // false
console.log(2 != 1); // true
console.log(2 === 1); // false
console.log(2 !== 1); // true
console.log("2" > 1);
console.log("2" < 1);
console.log("2" >= 1);
console.log("2" <= 1);

console.log(2 == "2"); // true (loose equality)
console.log(2 === "2"); // false (strict equality)
console.log(2 != "2"); // false (loose inequality)
console.log(2 !== "2"); // true (strict inequality)
console.log("2" > "1"); // true (string comparison)
console.log("2" < "1"); // false (string comparison)
console.log("2" >= "1"); // true (string comparison)
console.log("2" <= "1"); // false (string comparison)
console.log("2" == 2); // true (loose equality)
console.log("2" === 2); // false (strict equality)
console.log("2" != 2); // false (loose inequality)
console.log("2" !== 2); // true (strict inequality)
console.log(null == undefined); // true (loose equality)
console.log(null === undefined); // false (strict equality)   
console.log(null != undefined); // false (loose inequality)
console.log(null !== undefined); // true (strict inequality)
console.log(true == 1); // true (loose equality)
console.log(true === 1); // false (strict equality)
console.log(true != 1); // false (loose inequality)
console.log(true !== 1); // true (strict inequality)    
console.log(false == 0); // true (loose equality)
console.log(false === 0); // false (strict equality)
console.log(false != 0); // false (loose inequality)
console.log(false !== 0); // true (strict inequality)
console.log("abc" == "abc"); // true (string comparison)
console.log("abc" === "abc"); // true (strict equality)
console.log("abc" != "abc"); // false (loose inequality)
console.log("abc" !== "abc"); // false (strict inequality)
console.log("abc" == "ABC"); // false (case-sensitive comparison)
console.log("abc" === "ABC"); // false (case-sensitive comparison)
console.log("abc" != "ABC"); // true (case-sensitive comparison)
console.log("abc" !== "ABC"); // true (case-sensitive comparison)
console.log(1 < 2 < 3); // true (1 < 2 is true, then true < 3 is also true)
console.log(3 > 2 > 1); // false (3 > 2 is true, then true > 1 is false)
console.log(1 < 2 > 3); // false (1 < 2 is true, then true > 3 is false)
console.log(1 < 2 < 3 > 4); // false (1 < 2 is true, then true < 3 is true, but true > 4 is false)
console.log(1 < 2 && 2 < 3); // true (both conditions are true)
console.log(1 < 2 || 2 > 3); // true (first condition is true)
console.log(!(1 < 2)); // false (negation of true)
console.log(!!(1 < 2)); // true (double negation of true)
console.log(1 < 2 && 2 > 3 || 3 < 4); // true (first condition is false, second is true)
console.log((1 < 2 && 2 > 3) || (3 < 4)); // true (first condition is false, second is true)
console.log((1 < 2 || 2 > 3) && (3 < 4)); // true (first condition is true, second is true)
console.log((1 < 2 && 2 > 3) && (3 < 4)); // false (first condition is false, second is true)
console.log(1 < 2 ? "Yes" : "No"); // "Yes" (ternary operator)
console.log(1 > 2 ? "Yes" : "No"); // "No" (ternary operator)
console.log(1 < 2 ? (2 < 3 ? "Yes" : "No") : "No"); // "Yes" (nested ternary operator)
console.log(1 > 2 ? (2 < 3 ? "Yes" : "No") : "No"); // "No" (nested ternary operator)
console.log(1 < 2 ? "Yes" : 2 < 3 ? "Maybe" : "No"); // "Yes" (ternary operator with nested condition)
console.log(1 > 2 ? "Yes" : 2 < 3 ? "Maybe" : "No"); // "Maybe" (ternary operator with nested condition)
console.log(1 < 2 ? (2 < 3 ? "Yes" : "No") : (3 < 4 ? "Maybe" : "No")); // "Yes" (nested ternary operator with multiple conditions)
console.log(1 > 2 ? (2 < 3 ? "Yes" : "No") : (3 < 4 ? "Maybe" : "No")); // "Maybe" (nested ternary operator with multiple conditions)
console.log(1 < 2 ? "Yes" : (2 < 3 ? "Maybe" : "No")); // "Yes" (ternary operator with nested condition)
console.log(1 > 2 ? "Yes" : (2 < 3 ? "Maybe" : "No")); // "Maybe" (ternary operator with nested condition)
console.log(1 < 2 ? (2 < 3 ? "Yes" : "No") : (3 < 4 ? "Maybe" : "No")); // "Yes" (nested ternary operator with multiple conditions)      