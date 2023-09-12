class Tag {
  tags = new Set();

  add(tag) {
    this.tags.add(tag)
  }

  remove(tag) {
    this.tags.delete(tag);
  }

  get allTags() {
    return Array.from(this.tags);
  }

  has(tag) {
    return this.tags.has(tag);
  }

  clear() {
    this.tags.clear();
  }
}

module.exports = Tag;