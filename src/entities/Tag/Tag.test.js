const Tag = require('./Tag');

describe("class Tag", () => {
  let tag;

  beforeEach(() => {
    tag = new Tag();
  });

  it('should add a tag', () => {
    tag.add('Adoção');
    expect(tag.allTags).toContain('Adoção');
  });

  it('should remove a tag', () => {
    tag.add('Adoção');
    tag.add('Tratamento');
    tag.remove('Tratamento');
    expect(tag.allTags).not.toContain('Tratamento');
  });

  it('should return all tags', () => {
    tag.add('Adoção');
    tag.add('Tratamento');
    tag.add('Abrigo');
    const tags = tag.allTags;
    expect(tags).toContain('Adoção');
    expect(tags).toContain('Tratamento');
    expect(tags).toContain('Abrigo');
    expect(tags.length).toBe(3);
  });

  it('should not add duplicate tags', () => {
    tag.add('Adoção');
    tag.add('Adoção');
    expect(tag.allTags).toEqual(['Adoção']);
  });

  it('should check if a tag exists', () => {
    tag.add('Adoção');
    expect(tag.has('Adoção')).toBe(true);
    expect(tag.has('Sports')).toBe(false);
  });

  it('should clear all tags', () => {
    tag.add('Adoção');
    tag.add('Tratamento');
    tag.clear();
    expect(tag.allTags).toEqual([]);
  });
});