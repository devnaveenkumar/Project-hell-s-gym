export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'df6a0e1791mshb4f95ae1415a562p13c50bjsnbf36f7634711',
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
  };

export const fetchData = async(url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
    return data;
}