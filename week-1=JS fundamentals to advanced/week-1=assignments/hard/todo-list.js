/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {

  constructor(){
    this.mytodos=[];
  }

  remove(indexOfTodo){
    this.mytodos.splice(indexOfTodom,1);
  }

  add(todo){
    this.mytodos.push(todo);
  }

  clear(){
    this.mytodos=[];
  }

  get(indexOfTodo){
    return this.mytodos[indexOfTodo];
  }

  getAll(){
    return this.mytodos.slice();
  }

  update(index,updatedTodo){
    this.mytodos[index]=updatedTodo;
  }

}

module.exports = Todo;
