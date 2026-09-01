class Product {
  private static productCount = 0;
  readonly id: number;
  private _name!: string;
  private _price!: number;

  constructor(name: string, price: number) {
    this.name = name;
    this.price = price;
    Product.productCount++;
    this.id = Product.productCount;
  }

  get name() {
    return this._name;
  }

  set name(value: string) {
    if (value.length > 0) {
      this._name = value;
    } else {
      throw new Error("Name must contain at least 1 character");
    }
  }

  get price() {
    return this._price;
  }

  set price(value: number) {
    if (value > 0) {
      this._price = value;
    } else {
      throw new Error("Price must be positive");
    }
  }

  getDetails(): string {
    return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
  }
}

class Inventory {
  private products: Product[] = [];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  listProducts(): string {
    return (
      this.products.map((product) => product.getDetails()).join("\n") +
      `\nTotal products created: ${this.products.length}`
    );
  }
}


// const inventory = new Inventory();
// const product1 = new Product("Laptop", 1200);
// const product2 = new Product("Phone", 800);

// inventory.addProduct(product1);
// inventory.addProduct(product2);

// console.log(inventory.listProducts());

// Product.productCount = 10;
// const product = new Product("", 800);
const product2 = new Product("Phone", 0);
// product.id = 5;