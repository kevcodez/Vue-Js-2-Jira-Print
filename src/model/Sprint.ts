export class Sprint {

  id: number;
  state: string;
  name: string;
  startDate: Date;
  endDate: Date;
  completeDate: Date;
  originBoardId: number;

  static fromJson(json: any) {
    let sprint = new Sprint();
    sprint.id = json.id;
    sprint.state = json.state;
    sprint.name = json.name;
    sprint.startDate = new Date(json.startDate);
    sprint.endDate = new Date(json.endDate);
    sprint.completeDate = new Date(json.completeDate);
    sprint.originBoardId = json.originBoardId;

    return sprint
  }


}
