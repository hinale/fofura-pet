class Tag {
  #tags = new Set();

  addTag(tag) {
    this.#tags.add(tag)
  }

  removeTag(tag) {
    this.#tags.delete(tag);
  }

  get allTags() {
    return Array.from(this.#tags);
  }
}

module.exports = Tag;