class CategoryResource {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.description = data.description
  }

  static collection(dataResource) {
    return dataResource.map((data) => new CategoryResource(data))
  }
}

module.exports = CategoryResource