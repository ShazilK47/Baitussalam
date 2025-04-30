enum Color {
  Red,
  Green,
  Blue,
}

console.log(Color);

function getColorName(color: Color): string {
  console.log(Color[color]);
  return Color[color];
}

console.log(getColorName(Color.Red));
console.log(getColorName(Color.Green));
console.log(getColorName(0));

//2

enum LogLevel {
  Info = 1,
  Warning,
  Error,
}

function logMessage(level: LogLevel, message: string): void {
  if (level === LogLevel.Error) {
    console.error(`❗ERROR: ${message}`);
  } else if (level === LogLevel.Warning) {
    console.warn(`⚠️ WARNING: ${message}`);
  } else {
    console.log(`ℹ️ INFO: ${message}`);
  }
}

logMessage(LogLevel.Info, "System is running.");
logMessage(LogLevel.Error, "System crash!");

//  3
enum UserRole {
  Admin = "ADMIN",
  Editor = "EDITOR",
  Viewer = "VIEWER",
}

function getPermission(role: UserRole): string[] {
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

enum Direction {
  North,
  South,
  East,
  West,
}

for (let dir in Direction) {
  if (isNaN(Number(dir))) {
    console.log(`${dir} : ${Direction[dir as keyof typeof Direction]}`);
  }
}

// 5 : enum with custom values

enum StatusCode {
  OK = 200,
  NotFound = 404,
  ServerError = 500,
}

function getStatusAction(code: StatusCode): string {
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
