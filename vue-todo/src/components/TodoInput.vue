<template>
  <div class="inputBox shadow">
      <input v-model="newTodoItem" v-on:keyup.enter="addTodo" type="text">
      <span class="addContainer" v-on:click="addTodo">
        <font-awesome-icon :icon="['fas', 'plus']" class="addIcon" />
      </span>

      <AlertModal v-if="showModal" @close="showModal = true"> 
        <template v-slot:header>
          <h3>
            경고 !
            <font-awesome-icon :icon="['fas','circle-xmark']" 
              class="closeModalBtn" @click="showModal = false"/>
          </h3>
        </template>
        <template v-slot:body>
          아무것도 입력되지 않았습니다.
        </template>
        <template v-slot:footer>
          <div v-on:close="closeModal">

          </div>
        </template>
      </AlertModal>
  </div>
</template>

<script>
import AlertModal from './common/AlertModal.vue'

export default {
  data: function() {
    return {
      newTodoItem: ''
      , showModal: false
    }
  }
  , methods: {
    addTodo: function() {
      if (this.newTodoItem !== '') {
        this.$emit('throwTodoItem', this.newTodoItem);
        this.clearInput();
      } else {
        this.showModal = !this.showModal;
      }
    }
    , clearInput: function() {
       this.newTodoItem = '';
    }
  }
  , components: {
    AlertModal
  }
}
</script>

<style scoped>
  input:focus {
    outline: none;
  }

  .inputBox {
    border: none;
    background: white;
    height: 50px;
    line-height: 50px;
    border-radius: 5px;
  }

  .inputBox input {
    border-style: none;
    font-size: 0.9rem;
  }

  .addContainer {
    float: right;
    background: linear-gradient(to right, #6478FB, #8763FB);
    display: block;
    width: 3rem;
    border-radius: 0 5px 5px 0;
  }

  .addIcon {
    color: white;
  }

  .closeModalBtn {
    color: #42b983;
  }
</style>