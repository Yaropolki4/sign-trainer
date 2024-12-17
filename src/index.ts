//import { add } from "./module";

const unusedVariable = 42;

function add(a, b) {
  return a + b;
}

const a = 5;

const b = {
  '1': '1',
  '2': '2',
};

// Использование any
function logMessage(message) {
  console.log(message);
}
logMessage('ello, world!');

[1, 2, 3].map(item => {
  return item * 2;
});
