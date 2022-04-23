var userInput;
var userName;
userInput = 5;
userInput = "str";
if (typeof userInput === "string") {
    userName = userInput;
}
function generateError(message, code) {
    throw { errorMessage: message, errorCode: code };
}
generateError("An error occured", 500);
