class BookResource {
  constructor(data) {
    this.id = data.id
    this.title = data.title
    this.author = data.author
    this.publisher = data.publisher
    this.publication_year = data.publication_year
    this.isbn = data.isbn
    this.number_of_pages = data.number_of_pages
    this.categories = data.Categories ? data.Categories.map((category) => { return category.title }) : []
  }

  static collection(dataResource) {
    return dataResource.map((data) => new BookResource(data))
  }
}

module.exports = BookResource