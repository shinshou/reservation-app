const Product = require('./model/product')

class FakeDb{
  constructor() {
    this.products = [
      {
        name:'Phone XL',
        price: 799,
        description: 'A large phone with one of the best screens',
        heading1: 'サンプルテキスト1',
        heading2: 'サンプルテキスト2',
        heading3: 'サンプルテキスト3',
        headingtext1: 'サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト サンプルテキスト',
        headingtext2: ' テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章 テキスト文章',
        headingtext3: 'Duis mollis, est non commondo luctus,nisi erat porttitor ligule,',
      }
    ]
  }

  async initDb() {
    await this.cleanDb()
    this.pushProductsToDb()
  }

  async cleanDb() {
    await Product.deleteMany({})
  }

  pushProductsToDb() {
      this.products.forEach((product) => {
        const newProduct = new Product(product)
        newProduct.save()
      }
    )
  }

  seeDb() {
    this.pushProductsToDb()
  }
}

module.exports = FakeDb

