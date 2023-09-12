const Tag = require('./Tag');

describe("class Tag", () => {
  let tag;

  beforeEach(() => {
    tag = new Tag();
  });

  it('should add a tag', () => {
    tag.addTag('Adoção');
    expect(tag.allTags).toContain('Adoção');
  });

  it('should remove a tag', () => {
    tag.addTag('Adoção');
    tag.addTag('Tratamento');
    tag.removeTag('Tratamento');
    expect(tag.allTags).not.toContain('Tratamento');
  });

  it('should return all tags', () => {
    tag.addTag('Adoção');
    tag.addTag('Tratamento');
    tag.addTag('Abrigo');
    const tags = tag.allTags;
    expect(tags).toContain('Adoção');
    expect(tags).toContain('Tratamento');
    expect(tags).toContain('Abrigo');
    expect(tags.length).toBe(3);
  });

  it('should not add duplicate tags', () => {
    tag.addTag('Adoção');
    tag.addTag('Adoção');
    expect(tag.allTags).toEqual(['Adoção']);
  });
});