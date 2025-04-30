// Generic Data Store

class DataStore<T> {
  data: T[];
  constructor(data: T[]) {
    this.data = data;
  }

  add(item: T): void {
    this.data.push(item);
  }

  getAll(): T[] {
    return this.data;
  }

  update(index: number, item: T): void {
    this.data[index] = item;
  }

  remove(index: number): void {
    this.data.splice(index, 1);
  }
  get(index: number): T | undefined {
    return this.data[index];
  }
}

interface UserT {
  id: number;
  name: string;
}

const userStore = new DataStore<UserT>([]);

userStore.add({ id: 1, name: "Shazil" });
userStore.add({ id: 2, name: "Ali" });

console.log(userStore.getAll());

userStore.update(1, { id: 2, name: "Updated Ali" });

console.log(userStore.get(1));

userStore.remove(0);

console.log(userStore.getAll());
