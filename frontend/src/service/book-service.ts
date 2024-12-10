import axios, { AxiosError } from "axios";

// Base API URL from the environment
const API_BASE_URL = import.meta.env.VITE_APIURL;
// const API_BASE_URL = "http://localhost:5000/api/books";

/**
 * Interfaces for Request and Response
 */

// Request DTOs
export interface CreateBookRequest {
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
}

export interface UpdateBookRequest {
  title?: string;
  author?: string;
  category?: string;
  description?: string;
  price?: number;
}

// Response Interfaces
export interface BookResponse {
  _id: string;
  title: string;
  author: string;
  category: string;
  description: string;
  price: number;
  createdAt: string;
  updatedAt: string;
}

// Error Response Interface
export interface ErrorResponse {
  error: string;
}

/**
 * Book Service Functions
 */

// Add a new book
export const addBook = async (bookData: CreateBookRequest) => {
  try {
    const response = await axios.post<BookResponse>(
      `${API_BASE_URL}/add`,
      bookData
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      throw error;
    }
  }
};

// Get book by ID
export const getBookById = (id: string) => {
  try {
    return axios.get(`${API_BASE_URL}/${id}`);
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
    }
    throw new Error("Failed to fetch book details.");
  }
};

// Search books
export const searchBooks = async (keyword: string, price?: string) => {
  try {
    return axios.get(`${API_BASE_URL}/`, {
      params: { keyword, price },
    });
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      throw error;
    }
  }
};

// Update a book
export const updateBook = async (id: string, updateData: UpdateBookRequest) => {
  try {
    const response = await axios.patch<BookResponse>(
      `${API_BASE_URL}/update/${id}`,
      updateData
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      throw error;
    }
  }
};

// Delete a book
export const deleteBook = async (id: string) => {
  try {
    const response = await axios.delete<{ message: string }>(
      `${API_BASE_URL}/delete/${id}`
    );
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      console.error(error.response?.data);
      throw error;
    }
  }
};
