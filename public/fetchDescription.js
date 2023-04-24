const fetchDescription = async () => {
  try {
    const res = await fetch("https://backend.cloudproject.craigdsilva.com");
    const data = await res.json();
    return data;
  } catch (err) {
    return err;
  }
};

export default fetchDescription;