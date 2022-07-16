import axios from "axios";

const admin_login = "http://localhost:4000/library/login";
const add_book = "http://localhost:4000/library/add/book";
const get_all_book = "http://localhost:4000/library/get/book";
const delete_book = "http://localhost:4000/library/delete";
const add_student = "http://localhost:4000/library/add/student";
const get_all_student = "http://localhost:4000/library/gets/students";
const delete_student = "http://localhost:4000/library/delete";
const add_issue_book = "http://localhost:4000/library/issue";
const search_student = "http://localhost:4000/library/get/enrollment";
const add_return_book = "http://localhost:4000/library/add";

const get_all_issue_book = "http://localhost:4000/library/gets/issue_books";
const get_all_return_book = "http://localhost:4000/library/gets/return_books";

const edit_book = "http://localhost:4000/library/update"

const get_book_by_id = "http://localhost:4000/library/get"

const get_student_by_id = "http://localhost:4000/library/get/student"

const edit_student = "http://localhost:4000/library/update"

export const adminLogin = async (data) => {
  try {
    return await axios.post(admin_login, data);
  } catch (e) {
    console.log(e);
  }
};

export const addBook = async (data) => {
  try {
    return await axios.post(add_book, data);
  } catch (e) {
    console.log(e);
  }
};

export const getAllBook = async () => {
  try {
    return await axios.get(get_all_book);
  } catch (e) {
    console.log(e);
  }
};

export const deleteBook = async (id) => {
  try {
    return await axios.delete(`${delete_book}/${id}/book`);
  } catch (e) {
    console.log(e);
  }
};

export const addStudent = async (data) => {
  try {
    return await axios.post(add_student, data);
  } catch (e) {
    console.log(e);
  }
};

export const getAllStudent = async () => {
  try {
    return await axios.get(get_all_student);
  } catch (e) {
    console.log(e);
  }
};

export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${delete_student}/${id}/student`);
  } catch (e) {
    console.log(e);
  }
};

export const addIssueBook = async (id, data) => {
  try {
    return await axios.post(`${add_issue_book}/${id}/book`, data);
  } catch (e) {
    console.log(e);
  }
};

export const addReturnBook = async (id, data) => {
  try {
    return await axios.post(`${add_return_book}/${id}/return_book`, data);
  } catch (e) {
    console.log(e);
  }
};

export const searchStudent = async (data) => {
  try {
    return await axios.post(search_student, data);
  } catch (e) {
    console.log(e);
  }
};

export const getAllIssueBook = async () => {
  try {
    return await axios.get(get_all_issue_book);
  } catch (e) {
    console.log(e);
  }
};

export const getAllReturnBook = async () => {
  try {
    return await axios.get(get_all_return_book);
  } catch (e) {
    console.log(e);
  }
};

export const editBook = async (id,data) => {
  try {
    return await axios.post(`${edit_book}/${id}/book`,data);
  } catch (e) {
    console.log(e);
  }
};

export const getBookById = async (id) => {
  try {
    return await axios.get(`${get_book_by_id}/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export const getStudentById = async (id) => {
  try {
    return await axios.get(`${get_student_by_id}/${id}`);
  } catch (e) {
    console.log(e);
  }
};

export const editStudent = async (id,data) => {
  try {
    return await axios.post(`${edit_student}/${id}/student`,data);
  } catch (e) {
    console.log(e);
  }
};