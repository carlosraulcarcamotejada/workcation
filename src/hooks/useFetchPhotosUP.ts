import axios from "axios";
import { useRef,useState,useEffect } from "react";
import { unsplashResp, Result } from "../Interfaces/unsplash-resp";


const useFetchPhotosUP = ():{data:{photos:Result[],loading:boolean},loadPlaces:Function} => {

  const isMounted = useRef(true);

  const [data, setData] = useState<{photos:Result[], loading:boolean}>(
    {photos:[],
    loading:true}
  )


  const loadPlaces = async () => {
    const photos = await getPhotosUnsplash();
    isMounted && setData({photos:photos,loading:false})
  } 


  useEffect(() => {
    loadPlaces();
    return () => {isMounted.current = false;}
  }, [])

  return {data,loadPlaces};

}



const getPhotosUnsplash = async (searchField:string = 'villa'):Promise<Result[]> => {
  //Unsplash URL and API Key
  //const UNSPLASH_SECRET_API_KEY = 'Vu7WHRLz6yHlw0vRqFiUVUrUs6IpSYwK_WuQxkd1wr4';
  const UNSPLASH_API_KEY = 'BxPP4izFc04R7vnBk6QJMBa5zsrR9VWXnDnWFMDlIPQ';
  const urlUnsplash = `https://api.unsplash.com/search/photos?page=1&query=${searchField}&client_id=${UNSPLASH_API_KEY}`;
  const unsplashResp = await axios.get<unsplashResp>(urlUnsplash,{headers:{Authorization:UNSPLASH_API_KEY}});
  const photos:Result[] = unsplashResp.data.results;
  return photos;
}




export default useFetchPhotosUP;

