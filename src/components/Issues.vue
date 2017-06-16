<template>
  <div>
    <div id="issues" v-if="issues != null" class="container-fluid">
      <div id="visible-issues" class="hidden-print">
        <table class="table">
          <thead>
          <tr>
            <th>Prio</th>
            <th>Key</th>
            <th>Name</th>
            <th>Story-Points</th>
            <th>Erstellt von</th>
            <th>Typ</th>
          </tr>
          </thead>
          <tbody>
          <tr v-for="issue in issues">
            <td><img :src="issue.priority.iconUrl"></td>
            <td>{{issue.key}}</td>
            <td>{{issue.summary}}</td>
            <td>{{issue.storyPoints}}</td>
            <td>{{issue.creator}}</td>
            <td><img :src="issue.issueType.iconUrl"></td>
          </tr>
          </tbody>
        </table>

        <button class="btn btn-primary" onclick="window.print()">Alle drucken</button>

      </div>

      <div id="printable-issues" class="visible-print-block">
        <div class="row">
          <div v-for="issue in printIssues" class="col-12 card-container" style="padding-bottom: 10px;">
            <div class="card" style="height: 15rem">
              <div class="card-header">
                <img :src="issue.priority.iconUrl"> {{issue.key}}
                <img :src="issue.issueType.iconUrl" style="float: right">
              </div>
              <div class="card-block" style="height: 100%">
                <h4 class="card-title">{{issue.summary}}</h4>
                <h6 class="card-subtitle mb-2 text-muted">
                  {{issue.storyPoints}} Storypoints | Erstellt von {{issue.creator}}</h6>
              </div>
            </div>

            <hr />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'issues',
    data () {
      return {
        issues: null,
        printIssues: null
      }
    },
    created () {
      let self = this

      let boardId = self.$route.params.boardId
      let sprintId = self.$route.params.sprintId

      this.jiraService.findIssues(boardId, sprintId).then(issues => {
        self.issues = issues
        self.printIssues = issues
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

  @media print {

    hr {
      border:none;
      border-top:2px dotted #000;
      color:#fff;
      background-color:#fff;
      height:2px;
      width:100%;
    }

    h4.card-title {
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    #visible-issues {
      display: none;
    }
    #header {
      display: none;
    }

  }
</style>
