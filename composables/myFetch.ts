export const myFetch = async <T>( url : string, pagination = false) => {
  const result = ref<T| null> (null);
  const api = async() => {
    try {
      const res = await fetch(unref(`http://dotinay.com/api/${url}/`));
      const data = await res.json();
      if (pagination) {
        result.value = data.results
      } else {
        result.value = data;
      }
    }catch(e) {
      console.log(e)
    }

  }
  await api()
  return {
    result
  }
}