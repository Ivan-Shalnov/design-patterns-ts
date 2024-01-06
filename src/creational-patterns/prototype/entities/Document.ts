import Comment from './Comment';

export default class Document {
  public createdAt: number = Date.now();

  public comments: Comment[] = [];

  constructor(
    public text: string,
    public author: string,
    private id: string,
  ) {}

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  public clone(): Document {
    const document = new Document(this.text, this.author, this.id);
    document.comments = this.comments.map(comment => comment.clone());
    document.createdAt = this.createdAt;
    return document;
  }
}
