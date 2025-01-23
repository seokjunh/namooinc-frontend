import { post } from "./type";

export async function fetchPosts(page:string, title?:string) {
  let url = `http://localhost:8080/notice/read?page=${page}`;

  if (title) {
    url += `&searchTerm=${encodeURIComponent(title)}`;
  }

  const response = await fetch(url);
  const data = await response.json();
  const { content, number, size, totalElements} = data;

  return {
    content,
    number,
    size,
    totalElements
  };
}

export async function dynamicFetchPost(id: number) {
  const responce = await fetch(`http://localhost:8080/notice/read/${id}`);

  const detailPost: post = await responce.json();

  return { detailPost };
}
