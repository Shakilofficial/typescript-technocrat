//type-assertion

const message: unknown = "Hello, Shakil";

const messageLength = (message as string).length;

console.log(messageLength);
