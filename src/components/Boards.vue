<template>
  <div id="boards" v-if="boards != null" class="container-fluid">
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Typ</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="board in boards">
        <td>
          <router-link :to="`/board/${board.id}`">{{board.name}}</router-link>
        </td>
        <td>{{board.type}}</td>
        <td>{{board.date}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'boards',
    data () {
      return {
        boards: null
      }
    },
    created () {
      let self = this

      this.jiraService.findBoards().then(boards => {
        self.boards = boards
      })
    },
    components: {},
    inject: [
      'jiraService'
    ]
  }
</script>

<style lang="scss" scoped>
  @import '../scss/main';
</style>
