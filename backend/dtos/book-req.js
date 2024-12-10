export class CreateBookDto {
  title;
  author;
  category;
  description;
  price;
  id;

  constructor(title, author, category, description, price, id) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  // Manual validation method
  static validate(dto) {
    const errors = [];

    if (!dto.title || typeof dto.title !== "string") {
      errors.push("Title must be a non-empty string");
    }
    if (!dto.author || typeof dto.author !== "string") {
      errors.push("Author must be a non-empty string");
    }
    if (!dto.category || typeof dto.category !== "string") {
      errors.push("Category must be a non-empty string");
    }
    if (!dto.description || typeof dto.description !== "string") {
      errors.push("Description must be a non-empty string");
    }
    if (typeof dto.price !== "number") {
      errors.push("Price must be a number");
    }
    if (!dto.id || typeof dto.id !== "string") {
      errors.push("ID must be a non-empty string");
    }

    return errors;
  }
}

export class UpdateBookDto {
  title;
  author;
  category;
  description;
  price;
  id;

  constructor(title, author, category, description, price, id) {
    this.title = title;
    this.author = author;
    this.category = category;
    this.description = description;
    this.price = price;
    this.id = id;
  }

  // Manual validation method
  static validate(dto) {
    const errors = [];

    if (dto.title && typeof dto.title !== "string") {
      errors.push("Title must be a non-empty string");
    }
    if (dto.author && typeof dto.author !== "string") {
      errors.push("Author must be a non-empty string");
    }
    if (dto.category && typeof dto.category !== "string") {
      errors.push("Category must be a non-empty string");
    }
    if (dto.description && typeof dto.description !== "string") {
      errors.push("Description must be a non-empty string");
    }
    if (dto.price && typeof dto.price !== "number") {
      errors.push("Price must be a number");
    }
    if (dto.id && typeof dto.id !== "string") {
      errors.push("ID must be a non-empty string");
    }

    return errors;
  }
}
