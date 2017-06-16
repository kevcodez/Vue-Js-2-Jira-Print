import {AvatarUrl} from "./AvatarUrl";
export class Project {

  id: number;
  key: string;
  name: string;
  avatarUrls: Array<AvatarUrl>;

  static fromJson(json: any) {
    let project = new Project();
    project.id = json.id;
    project.key = json.key;
    project.name = json.name;

    project.avatarUrls = [];
    project.avatarUrls.push(new AvatarUrl(48, 48, json.avatarUrls['48x48']));
    project.avatarUrls.push(new AvatarUrl(32, 32, json.avatarUrls['32x32']));
    project.avatarUrls.push(new AvatarUrl(24, 24, json.avatarUrls['24x24']));
    project.avatarUrls.push(new AvatarUrl(16, 16, json.avatarUrls['16x16']));

    return project
  }

  findAvatarUrl(height: number, width: number): AvatarUrl {
    let avatarUrls = this.avatarUrls.filter(it => it.height == height && it.width == width);

    return avatarUrls[0];
  }

}
