<template>
  <div>
      <ul >
        <li v-for="(todoItem, index) in todoItems" v-bind:key="todoItem.item" class="shadow">
          <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete(todoItem, index)">
              <font-awesome-icon :icon="['fas', 'check']" />
          </span>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo(todoItem, index)">
              <font-awesome-icon :icon="['fas', 'circle-minus']" />
          </span>
        </li>

      </ul>
  </div>
</template>

<script scoped>
export default {
  data: function() {
    return {
      todoItems: []
    }
  }
  , methods: {
    removeTodo: function(todoItem, index) {
      localStorage.removeItem(todoItem.item);
      this.todoItems.splice(index, 1);
    }
    , toggleComplete: function(todoItem, index) {
      todoItem.completed = !todoItem.completed;
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    }
  }
  , created: function() {
    var len = localStorage.length;
    if (len > 0) {
      for (var i = 0; i < len; i++) {
        if (localStorage.key(i) !== 'loglevel:webpack-dev-server') {
          this.todoItems.push(JSON.parse(localStorage.getItem(localStorage.key(i))));
        }
      }
    }   
  }
}
</script>

<style>
  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
    justify-content: center;
  }

  .removeBtn {
    margin-left: auto;
    color: tomato;
  }

  .checkBtn {
    line-height: 45px;
    color: #125480;
    margin-right: 5px;
    align-self: start;
     margin-right: 10px;
  }

  .checkBtnCompleted {
    color: #b3adad;
  }

  .textCompleted {
    text-decoration: line-through;
    color: #b3adad;
  }
</style>