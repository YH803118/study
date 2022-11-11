export async function getData() {
  const response = await fetch(`http://localhost:3000/api/login`);
  if (!response.ok) {
    throw new Error("불러오기 실패");
  }
  const body = await response.json();
  return body;
}
