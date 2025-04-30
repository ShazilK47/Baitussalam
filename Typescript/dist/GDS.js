"use strict";
// Generic Data Store
class DataStore {
    constructor(data) {
        this.data = data;
    }
    add(item) {
        this.data.push(item);
    }
    getAll() {
        return this.data;
    }
    update(index, item) {
        this.data[index] = item;
    }
    remove(index) {
        this.data.splice(index, 1);
    }
    get(index) {
        return this.data[index];
    }
}
const userStore = new DataStore([]);
userStore.add({ id: 1, name: "Shazil" });
userStore.add({ id: 2, name: "Ali" });
console.log(userStore.getAll());
userStore.update(1, { id: 2, name: "Updated Ali" });
console.log(userStore.get(1));
userStore.remove(0);
console.log(userStore.getAll());
