export class Priority {

  constructor(public id: string, public name: string, public iconUrl: string) {

  }

  static fromJson(json: any) {
    return new Priority(json.id, json.name, json.iconUrl);
  }

}
