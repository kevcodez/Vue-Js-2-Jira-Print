export class Board {

  constructor(public id: number, public name: string, public type: string) {

  }

  static fromJson(json: any) {
    return new Board(json.id, json.name, json.type);
  }

}
