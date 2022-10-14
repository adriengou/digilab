export class Directory {
  public name!: string;
  public path!: string;
  public description!: string;
  public id!: number;

  constructor(name: string, path: string, description: string, id?: number) {
    this.name = name;
    this.path = path;
    this.description = description;
    // this.id = id || Math.floor(Math.random() * 100000000);
  }
}
