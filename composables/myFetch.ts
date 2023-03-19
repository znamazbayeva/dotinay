export const myFetch = async <T>( url : string, pagination = false) => {
  const result = ref<T| null> (null);
  const api = async() => {
    const res = await fetch(unref(`http://86.107.44.116/api/${url}/`));
    const data = await res.json();
    if (pagination) {
      result.value = data.results
    } else {
      result.value = data;
    }
  }
  await api()
  return {
    result
  }
}