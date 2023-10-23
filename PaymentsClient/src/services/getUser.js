export const getUser = async (username) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/Users/${username}`);
  const data = await response.json();
  return data;
}