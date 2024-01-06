export default class Comment {
  public createdAt: number = Date.now();

  constructor(
    private id: string,
    public author: string,
    public text: string,
  ) {}

  public clone(): Comment {
    return new Comment(this.text, this.author, this.id);
  }
}
