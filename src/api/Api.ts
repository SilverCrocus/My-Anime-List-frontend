import axios from 'axios';

export default function searchAnime(searchQuery: string, page: number = 1): Promise<responseType> {
  return axios.get(`https://api.jikan.moe/v4/anime?q=${searchQuery}&sfw&page=${page}`)
    .then(response => response.data)
    .catch(error => console.log(error));
}

export type responseType = {
  pagination: {
    has_next_page: boolean,
    current_page: number,
  },
  data: animeDataType[]
}

export type animeDataType = {
  mal_id: number,
  images: {
    jpg: {
      image_url: string,
    }
  }
  title: string,
  episodes: number,
  score: number,
  status: string,
  popularity: number,
}