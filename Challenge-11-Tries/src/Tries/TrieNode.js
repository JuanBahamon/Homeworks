function Node(value) {
    this.value = value;
    this.isEndOfWord = false;
    this.children = {};
}

export { Node };