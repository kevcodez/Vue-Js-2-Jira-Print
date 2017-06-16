<template>
  <div id="sprints" v-if="sprints != null" class="container-fluid">
    <table class="table">
      <thead>
      <tr>
        <th>Name</th>
        <th>Status</th>
        <th>Start-Datum</th>
        <th>End-Datum</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="sprint in sprints">
        <td><router-link :to="`/board/${boardId}/${sprint.id}`">{{sprint.name}}</router-link></td>
        <td>{{sprint.state}}</td>
        <td>{{sprint.startDate}}</td>
        <td>{{sprint.endDate}}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'sprints',
    data () {
      return {
        sprints: null,
        boardId: 0
      }
    },
    created () {
      let self = this

      self.boardId = self.$route.params.id

      this.jiraService.findSprints(self.boardId).then(sprints => {
        self.sprints = sprints

        self.sprints.sort(function (sprint1, sprint2) {
          return sprint2.startDate - sprint1.startDate
        })
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
