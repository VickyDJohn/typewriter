const sentence = "hello there from Lighthouse Labs";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, 50);
}