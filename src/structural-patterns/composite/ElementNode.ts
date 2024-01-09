import INode from './INode';

export default class ElementNode implements INode {
  private tagName: string;

  private children: INode[];

  constructor(tagName: string) {
    this.tagName = tagName;
    this.children = [];
  }

  add(node: INode): void {
    this.children.push(node);
  }

  remove(node: INode): void {
    const index = this.children.indexOf(node);
    this.children.splice(index, 1);
  }

  getChildren(): INode[] {
    return this.children;
  }

  getMarkup(): string {
    const childrenMarkup = this.children
      .map(child => child.getMarkup())
      .join('');
    return `<${this.tagName}>${childrenMarkup}</${this.tagName}>`;
  }
}
