// password-generator.js
const generatePassword = require('generate-password');

// Function to generate random passwords
function generateRandomPassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true,
    symbols: true,
    uppercase: true,
    excludeSimilarCharacters: true,
  });

  console.log(password);
}

// Generate and log a random password
generateRandomPassword();
