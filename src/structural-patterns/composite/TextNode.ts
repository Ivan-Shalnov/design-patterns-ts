import INode from './INode';

export default class TextNode implements INode {
  private text: string;

  constructor(text: string) {
    this.text = text;
  }

  getMarkup(): string {
    return this.text;
  }
}
