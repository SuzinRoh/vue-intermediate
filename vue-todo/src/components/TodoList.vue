<template>
  <div>
     <transition-group name="list" tag="ul">
        <li v-for="(todoItem, index) in this.storedTodoItems" v-bind:key="todoItem.item" class="shadow">
          <span class="checkBtn" v-bind:class="{checkBtnCompleted: todoItem.completed}" v-on:click="toggleComplete({todoItem, index})">
              <font-awesome-icon :icon="['fas', 'check']" />
          </span>
          <span v-bind:class="{textCompleted: todoItem.completed}">{{ todoItem.item }}</span>
          <span class="removeBtn" v-on:click="removeTodo({todoItem, index})">
              <font-awesome-icon :icon="['fas', 'circle-minus']" />
          </span>
        </li>
      </transition-group>
  </div>
</template>

<script scoped>
import { mapGetters,  mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      removeTodo: 'removeOneItem'
      , toggleComplete: 'toggleOneItem'

    })
    // removeTodo(todoItem, index) {
    //   // {data, data} 객체 단축
    //   this.$store.commit('removeOneItem', {todoItem, index});
    // }
    // , toggleComplete(todoItem, index) {
    //   this.$store.commit('toggleOneItem', {todoItem, index});
    // }
  }
  , computed: {
     ...mapGetters(['storedTodoItems'])
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

  /**  list item transition effect */
  .list-enter-active, .list-leave-active {
    transition: all 0.5s;
  }
  .list-enter-from, .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>