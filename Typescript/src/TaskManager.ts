// Perfect — let’s lay down a **step-by-step guide** (not full code) for building **Project 1: Task Manager App**, focusing on **realistic structure** and covering almost **all major TypeScript concepts** you've learned.

// ---

// ## ✅ Project: Task Manager App (Console-based)

// **Goal:** Manage users, assign tasks, log actions, calculate bonuses — all in TypeScript with clean structure.

// ---

// ### 🔶 Step-by-Step Guide

// ---

// ### 1️⃣ **Set Up Basic Types and Interfaces**
// - Create a `User` interface with:
//   - `id: number`
//   - `name: string`
//   - `role: Role` (you’ll define `enum Role` later)
//   - `bonusPercentage?: number`

// - Create a `Task` interface with:
//   - `id: string`
//   - `title: string`
//   - `description?: string`
//   - `assignee?: User`
//   - `completed: boolean`

// ---

// ### 2️⃣ **Enums**
// - Define a `Role` enum:
//   ```ts
//   enum Role {
//     Admin = "admin",
//     Member = "member",
//     Guest = "guest"
//   }
//   ```

// - Also define a `LogLevel` enum for logging:
//   ```ts
//   enum LogLevel {
//     Info = 1,
//     Warning,
//     Error
//   }
//   ```

// ---

// ### 3️⃣ **Classes for Users**
// - Create a base `UserClass` with constructor and method `greet()`.
// - Extend it with:
//   - `AdminClass`: Can assign tasks and see all tasks.
//   - `MemberClass`: Can only view their tasks.

// Use **method overriding** here.

// ---

// ### 4️⃣ **TaskManager Class**
// - Create class `TaskManager`:
//   - Stores tasks using `index signatures` like:
//     ```ts
//     private tasks: { [id: string]: Task } = {};
//     ```
//   - Methods:
//     - `addTask(task: Task)`
//     - `assignTask(taskId: string, user: User)`
//     - `getTasksByUser(userId: number)`
//     - `completeTask(taskId: string)`

// ---

// ### 5️⃣ **Generic Utility Class**
// - Create a generic class `Storage<T>` with:
//   - `add(item: T)`
//   - `getAll(): T[]`
//   - `findById(id: string | number): T | undefined`

// ---

// ### 6️⃣ **Bonus Calculator**
// - Define `BonusCalculator` interface:
//   ```ts
//   interface BonusCalculator {
//     (salary: number, percentage: number): number;
//   }
//   ```

// - Use optional chaining to calculate bonus only if user has `bonusPercentage`.

// ---

// ### 7️⃣ **Logger Utility (Static)**
// - `Logger` class with static method `log(message: string, level: LogLevel)`.

// ---

// ### 8️⃣ **Custom Type Guard**
// - Write a function `isAdmin(user: any): user is AdminClass`.

// ---

// ### 9️⃣ **Type Guards with Union**
// - Create a function that accepts either a `Task` or `string`, and behaves differently based on type.

// ---

// ### 🔟 **Extra Features (Optional but Recommended)**
// - CLI-like interface with basic input/output.
// - Use rest parameters or default parameters for logging or notifications.

// ---

// ### 📌 Final Touch
// - Show all tasks.
// - Show user-wise tasks.
// - Show tasks with or without assignee.
// - Log all actions using the `Logger`.

// ---

// Do you want to start **step 1** together now — like defining `User`, `Role`, and `Task` interfaces — or would you prefer to build it on your own and get review after each step?

console.log("let's started");
