function formatValue(
  value: string | number | boolean
): string | number | boolean {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
  throw new Error("Invalid type");
}

function getLength(value: string | any[]): number {
  if (typeof value === "string") {
    return value.length;
  } else if (Array.isArray(value)) {
    return value.length;
  }
  throw new Error("Invalid type");
}

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type Item = {
  title: string;
  rating: number;
};
function filterByRating(items: Item[]): Item[] {
  return items.filter((item) => item.rating >= 4);
}

type User = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};
function filterActiveUsers(users: User[]): User[] {
  return users.filter((user) => user.isActive === true);
}

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}
function printBookDetails(book: Book): void {
  const available: string = book.isAvailable ? "Yes" : "No";
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${available}`
  );
}

function getUniqueValues(
  arr1: (string | number)[],
  arr2: (string | number)[]
): (string | number)[] {
  const result: (string | number)[] = [];

  function addUnique(value: string | number) {
    let exists = false;
    for (let i = 0; i < result.length; i++) {
      if (result[i] === value) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      result[result.length] = value;
    }
  }

  for (let i = 0; i < arr1.length; i++) {
    addUnique(arr1[i]!);
  }

  for (let i = 0; i < arr2.length; i++) {
    addUnique(arr2[i]!);
  }
  return result;
}

type Product = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
};

const calculateTotalPrice = (products: Product[]) => {
  return products.reduce((acc, item) => {
    const discount = item.discount ? item.discount / 100 : 0;
    const finalPrice = item.price * (1 - discount);
    return acc + finalPrice * item.quantity;
  }, 0);
};
