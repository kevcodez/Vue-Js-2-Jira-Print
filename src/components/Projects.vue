<template>
  <div id="projects" v-if="projects != null" class="container-fluid">
    <table class="table">
      <thead>
        <tr>
          <th></th>
          <th>Kürzel</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="project in projects">
          <td><img :src="project.findAvatarUrl(32,32).url"></td>
          <td>{{project.key}}</td>
          <td>{{project.name}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'projects',
    data () {
      return {
        projects: null
      }
    },
    created () {
      let self = this

      this.jiraService.findProjects().then(projects => {
        self.projects = projects
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
