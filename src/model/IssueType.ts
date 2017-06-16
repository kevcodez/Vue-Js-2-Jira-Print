export class IssueType {

  constructor(public id: string, public name: string, public iconUrl: string) {

  }

  static fromJson(json: any) {
    return new IssueType(json.id, json.name, json.iconUrl);
  }

}
