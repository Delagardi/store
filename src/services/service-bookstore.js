export default class ServiceBookstore {
  data = [
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
      price: 11,
      imageSource: 'hero-faces.jpg'
    }
  ];

  getBooks() {
    return new Promise( (resolve) => {
      setTimeout( () => {
        resolve(this.data);
      }, 700)
    })
  }
}