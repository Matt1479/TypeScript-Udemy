let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "str";
if (typeof userInput === "string") {
  userName = userInput;
}

function generateError(message: string, code: number): never {
  throw { errorMessage: message, errorCode: code };
}

generateError("An error occured", 500);
