import {Injectable} from "@angular/core";

@Injectable()
export class ProductService {

  private products: Product[] = [
    new Product(1, "第一个商品", 1.99, 3.5, "这是第一个商品,是我在学习慕课网Angular入门实战是创建的", ["电子产品", "硬件设备"]),
    new Product(2, "第二个商品", 2.99, 2.5, "这是第二个商品,是我在学习慕课网Angular入门实战是创建的", ["图书"]),
    new Product(3, "第三个商品", 3.99, 4.5, "这是第三个商品,是我在学习慕课网Angular入门实战是创建的", ["硬件设备"]),
    new Product(4, "第四个商品", 4.99, 1.5, "这是第四个商品,是我在学习慕课网Angular入门实战是创建的", ["电子产品", "硬件设备"]),
    new Product(5, "第五个商品", 5.99, 3.5, "这是第五个商品,是我在学习慕课网Angular入门实战是创建的", ["电子产品"]),
    new Product(6, "第六个商品", 6.99, 2.5, "这是第六个商品,是我在学习慕课网Angular入门实战是创建的", ["图书"])
  ];

  private comments:Comment[] = [
    new Comment(1, 1, "2017-02-02 22:22:22", "张三", 3, "东西不错"),
    new Comment(2, 1, "2017-03-03 23:22:22", "李四", 4, "东西是不错"),
    new Comment(3, 1, "2017-04-04 21:22:22", "王五", 2, "东西挺不错"),
    new Comment(4, 2, "2017-05-05 20:22:22", "赵六", 4, "东西还不错"),
  ]

  constructor() {
  }

  getAllCategories(): string[] {
    return ["电子产品", "硬件设备", "图书"];
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProduct(id:number): Product {
    return this.products.find((product) => product.id == id);
  }

  getCommentsForProductId(id:number) : Comment[] {
    return this.comments.filter((comment: Comment) => comment.productId == id);
  }

}

export class Product {

  constructor(public id: number,
              public title: string,
              public price: number,
              public rating: number,
              public desc: string,
              public categories: Array<string>) {

  }
}

export class Comment {

  constructor(public id:number,
              public productId:number,
              public timestamp: string,
              public user: string,
              public rating: number,
              public content: string
  ){

  }

}
