import {IssueType} from "./IssueType";
import {Priority} from "./Priority";
import {Epic} from "./Epic";

export class Issue {

  id: string;
  key: string;
  summary: String;
  description: String;
  creator: String;
  storyPoints: number;
  issueType: IssueType;
  priority: Priority;
  epic: Epic;

  static fromJson(json: any) {
    let fields = json['fields']
    let issue = new Issue();
    issue.id = json.id;
    issue.key = json.key;
    issue.summary = json.fields.summary;
    issue.description = json.fields.description;
    issue.creator = json.fields.creator.displayName;
    issue.storyPoints = json.fields.customfield_10008;
    issue.issueType = IssueType.fromJson(fields.issuetype);
    issue.priority = Priority.fromJson(fields.priority);
    issue.epic = Epic.fromJson(fields.epic);

    return issue;
  }

}
