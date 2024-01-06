import Document from './Document';
import Comment from './Comment';

export default class Task {
  public createdAt: number = Date.now();

  public comments: Comment[] = [];

  constructor(
    public document: Document,
    public text: string,
    public author: string,
    private id: string,
    public status: string,
    public deadline: string,
  ) {}

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  clone(): Task {
    const task = new Task(
      this.document.clone(),
      this.text,
      this.author,
      this.id,
      this.status,
      this.deadline,
    );
    task.comments = this.comments.map(comment => comment.clone());
    task.createdAt = this.createdAt;
    return task;
  }
}
