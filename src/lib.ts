export const fetchTest = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/test");
    const data = await res.json();
    return data;
  } catch (error) {
    return error;
  }
};
