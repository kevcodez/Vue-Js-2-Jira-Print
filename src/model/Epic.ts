export class Epic {

  constructor(public id: number, public key: string, public name: string, public summary: string) {

  }

  static fromJson(json: any) {
    if (json == null) {
      return null;
    }

    return new Epic(json.id, json.key, json.name, json.summary);
  }

}
