let score = "true";

console.log(typeof score); // string

score = Number(score);

console.log(typeof score); // number
console.log(score);

/**
 * Number Conversion
 * "330" => 330
 * "saurav" => Nan
 * true => 1
 * false => 0
 * nule => 0
 * undefined => Nan
 *
 *
 * Boolean conversion
 * 0 => false
 * 1 => true
 * "saurav" => true
 * "" => false
 */
