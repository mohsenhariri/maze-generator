class Stack {
  content: Array<string>;
  constructor() {
    this.content = [];
  }
  add(node: string): void {
    this.content.push(node);
  }
  pick(): string {
    const last = this.content.pop() || "";
    return last;
  }
  len(): number {
    return this.content.length
  }
}

export default Stack;
