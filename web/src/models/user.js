// /fitness_tracker/web/src/models/user.js

// Definición del modelo User
class User {
  constructor(name, age, height, weight) {
    this.name = name;
    this.age = age;
    this.height = height;
    this.weight = weight;
  }

  // Métodos getter y setter para acceder y modificar los atributos del usuario
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }

  getAge() {
    return this.age;
  }

  setAge(age) {
    this.age = age;
  }

  getHeight() {
    return this.height;
  }

  setHeight(height) {
    this.height = height;
  }

  getWeight() {
    return this.weight;
  }

  setWeight(weight) {
    this.weight = weight;
  }
}

export default User;