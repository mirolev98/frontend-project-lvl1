import readlineSync from 'readline-sync';

export default () => {
  console.log('Welcome to the Brain Games!');
  // Wait for user's response.
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  return userName;
};
