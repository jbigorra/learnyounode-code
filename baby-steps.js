const numArr = process.argv.splice(2);

const sum = numArr.reduce((acc, value) => acc + (+value), 0);

console.log(sum);