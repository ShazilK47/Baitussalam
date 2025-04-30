"use strict";
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
console.log(Color);
function getColorName(color) {
    console.log(Color[color]);
    return Color[color];
}
console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(0));
//2
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["Info"] = 1] = "Info";
    LogLevel[LogLevel["Warning"] = 2] = "Warning";
    LogLevel[LogLevel["Error"] = 3] = "Error";
})(LogLevel || (LogLevel = {}));
function logMessage(level, message) {
    if (level === LogLevel.Error) {
        console.error(`❗ERROR: ${message}`);
    }
    else if (level === LogLevel.Warning) {
        console.warn(`⚠️ WARNING: ${message}`);
    }
    else {
        console.log(`ℹ️ INFO: ${message}`);
    }
}
logMessage(LogLevel.Info, "System is running.");
logMessage(LogLevel.Error, "System crash!");
//  3
var UserRole;
(function (UserRole) {
    UserRole["Admin"] = "ADMIN";
    UserRole["Editor"] = "EDITOR";
    UserRole["Viewer"] = "VIEWER";
})(UserRole || (UserRole = {}));
function getPermission(role) {
    switch (role) {
        case UserRole.Admin:
            return ["read", "write", "delete"];
        case UserRole.Editor:
            return ["read", "write"];
        case UserRole.Viewer:
            return ["read"];
        default:
            return [];
    }
}
console.log(getPermission(UserRole.Admin));
// 4
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["South"] = 1] = "South";
    Direction[Direction["East"] = 2] = "East";
    Direction[Direction["West"] = 3] = "West";
})(Direction || (Direction = {}));
for (let dir in Direction) {
    if (isNaN(Number(dir))) {
        console.log(`${dir} : ${Direction[dir]}`);
    }
}
// 5 : enum with custom values
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["OK"] = 200] = "OK";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
function getStatusAction(code) {
    switch (code) {
        case StatusCode.OK:
            return "Success!";
        case StatusCode.NotFound:
            return "Resource not found.";
        case StatusCode.ServerError:
            return "internal server error";
        default:
            return "Unkown Status";
    }
}
console.log(getStatusAction(StatusCode.NotFound));
