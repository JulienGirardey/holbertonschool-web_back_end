/* this file display a message,
 * the user is able to input their name
 * the program display Your name is: INPUT
 * when the user end the program, it should
 * display 'This important software is now closing'
 **/
process.stdin.setDefaultEncoding('utf-8');
console.log('Welcome to Holberton School, what is your name?');
process.stdin.on('readable', () => {
  var chunk = process.stdin.read();
  if (chunk !== null) {
    process.stdout.write(`Your name is: ${chunk}`);
  }
});
process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});

