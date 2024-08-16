// This is the main application file

const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// Unused variable (SonarQube should detect this)
const unusedVar = 'I am not used';

// Duplicate code (SonarQube should detect this)
function duplicate1() {
  console.log('This is duplicate code');
  console.log('This is duplicate code');
  console.log('This is duplicate code');
}

function duplicate2() {
  console.log('This is duplicate code');
  console.log('This is duplicate code');
  console.log('This is duplicate code');
}