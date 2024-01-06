export default class Comment {
  public createdAt: number = Date.now();

  constructor(
    private id: string,
    public author: string,
    public text: string,
  ) {}

  public clone(): Comment {
    const cloned = new Comment(this.id, this.author, this.text);
    cloned.createdAt = this.createdAt;
    return cloned;
  }
}
