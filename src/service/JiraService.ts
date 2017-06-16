import axios from "axios";
import { AxiosInstance } from 'axios';
import { Project } from "../model/Project";
import { Sprint } from "../model/Sprint";
import { Board } from "../model/Board";
import { Issue } from "../model/Issue";

/**
 * Service for querying Jira. Configure the authentication for the REST API here. There are multiple ways to authenticate against the REST API - 
 * see https://developer.atlassian.com/jiradev/jira-apis/jira-rest-apis/jira-rest-api-tutorials/jira-rest-api-version-2-tutorial#JIRARESTAPIVersion2Tutorial-UserAuthentication.
 * 
 * The most simple authentication is the basic authentication, it only requires you to define the Authorization header on the request. Make sure your host is whitelisted on Jira to handle CORS. 
 * Most webbrowsers trigger an OPTIONS request before doing the actual request when requesting cross-domain. The server must then provide a Access-Control-Allow-Origin-Header, otherwise the request will fail.
 */
class JiraService {

  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://jira.foo.de/rest',
      headers: {
        'Content-Type': 'text/plain'
        // 'Authorization': 'Basic xxxx'
      }
    });
  }

  findProjects(): Promise<Array<Project>> {
    const url = `/api/2/project`

    return this.axiosInstance.get(url)
      .then(response => response.data)
      .then(data => data.map(Project.fromJson));
  }

  findBoards(): Promise<Array<Board>> {
    const url = `/agile/1.0/board`

    return this.axiosInstance.get(url)
      .then(response => response.data)
      .then(data => data.values)
      .then(data => data.map(Board.fromJson));
  }

  findSprints(boardId: number): Promise<Array<Sprint>> {
    const url = `/agile/1.0/board/${boardId}/sprint`

    return this.axiosInstance.get(url)
      .then(response => response.data)
      .then(data => data.values)
      .then(data => data.map(Sprint.fromJson));
  }

  findIssues(boardId: number, sprintId: number): Promise<Array<Issue>> {
    const url = `/agile/1.0/board/${boardId}/sprint/${sprintId}/issue`

    return this.axiosInstance.get(url)
      .then(response => response.data)
      .then(data => data.issues)
      .then(data => data.map(Issue.fromJson));
  }

}

export default JiraService;
