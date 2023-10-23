export const getUsers = async () => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/Users`);
  const data = await response.json();
  return data; 
}