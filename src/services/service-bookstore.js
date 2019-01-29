export default class ServiceBookstore {
  getBooks() {
    return [
      {
        id: 321,
        name: "Sapiens: A Brief History of Humankind",
        author: "Yuval Noah Harari",
        price: 5,
        imageSource: 'sapiens.jpg'
      },
      {
        id: 322,
        name: "The Hero with a Thousand Faces",
        author: "Joseph Campbell",
        price: 10,
        imageSource: 'hero-faces.jpg'
      }
    ];
  }
}