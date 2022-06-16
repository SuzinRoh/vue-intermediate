<template>
  <div>
    <TodoHeader></TodoHeader>
    <TodoInput v-on:throwTodoItem="addOneItem"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" 
      v-on:throwRemoveItem="removeOneItem" 
      v-on:throwToggleItem="toggleOneItem"></TodoList>
    <TodoFooter v-on:throwClearAll="clearAllItems"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue'
import TodoInput from './components/TodoInput.vue'
import TodoList from './components/TodoList.vue'
import TodoFooter from './components/TodoFooter.vue'

export default {
  name: 'App'
  , data() {
    return {
      todoItems: []
    }
  }
  , methods: {
    addOneItem(todoItem) {
      const obj = {completed: false, item: todoItem};
      localStorage.setItem(todoItem, JSON.stringify(obj));
      this.todoItems.push(obj);
    }
    , removeOneItem(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    }
    , toggleOneItem(todoItem, index) {
      this.todoItems[index].completed = !this.todoItems[index].completed ;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
    , clearAllItems() {
      localStorage.clear();
      this.todoItems = [];
    }
  }
  , components: {
    TodoHeader
    , TodoInput
    , TodoList
    , TodoFooter 
  }
}


/**
 * js import 
 * 
 * import util from 'util.js';
 * 
 *  
 * 
 * 
 */
</script>

<style>
  body {
    text-align: center;
    background-color: #F6F6F6
  }

  input {
    border-style: groove;
    width: 200px;
  }

  button {
    border-style: groove;
  }

  .shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
  }
</style>