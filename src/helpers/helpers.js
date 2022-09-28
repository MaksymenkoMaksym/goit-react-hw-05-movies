import axios from 'axios';

/*
Ключ API (v3 auth)
3fc6ca0bd9b1eeabb3151f08c61a1e25
Пример API-запроса
https://api.themoviedb.org/3/movie/550?api_key=3fc6ca0bd9b1eeabb3151f08c61a1e25
Ключ доступа к API (v4 auth)
eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzZmM2Y2EwYmQ5YjFlZWFiYjMxNTFmMDhjNjFhMWUyNSIsInN1YiI6IjYzMzFlMmJlZTMyOTQzMDA3YmRlMTFmMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.54De0Eipd8Whwxe4aq6K4bRzg5FjKv7L7kRX7dvpahU
*/
const END_POINT = 'https://api.themoviedb.org/3';

async function getApiData(url = '/trending/movie/day?', params) {
  const config = {
    url: url,
    method: 'get',
    baseURL: END_POINT,
    params: {
      api_key: '3fc6ca0bd9b1eeabb3151f08c61a1e25',
      query: '',
      page: 1,
      ...params,
    },
    responseType: 'json',
  };
  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    throw error;
  }
}

export default getApiData;
