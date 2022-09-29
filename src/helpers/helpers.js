import axios from 'axios';

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
