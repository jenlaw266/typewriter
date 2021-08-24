const sentence = "hello there from lighthouse labs";
let i = 0;

const typewriter = setInterval(
  (string) => {
    const array = string.split("");
    process.stdout.write(array[i]);
    if (i === array.length - 1) {
      console.log("");
      clearInterval(typewriter);
    }
    i++;
  },
  100,
  sentence
);
