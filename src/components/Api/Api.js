import axios from "axios";

export  const  fetchArticlesWithQuery = async (name, page) => {
  
    const KEY_API = '30147177-aa989cd4308968caefabd5d9f';
    const response = axios.get(`https://pixabay.com/api/?q=${name}&key=${KEY_API}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
    return response;
  };

  