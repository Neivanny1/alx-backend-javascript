//  program named 1-stdin.js that will be executed through command line
process.stdout.write('Welcome to Holberton School, what is your name?\n');
process.stdin.once('data', function (input) {
  process.stdout.write('Your name is: {input}');
  process.stdout.write('This important software is now closing\n');
  process.exit();
});
