export async function getData() {
  const response = await fetch(`http://localhost:3000/api/login`);
  const body = await response.json();
  return body;
}
