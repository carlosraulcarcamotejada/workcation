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
    isMounted && setData({photos:[],loading:true})
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
  const UNSPLASH_API_KEY:string = 'BxPP4izFc04R7vnBk6QJMBa5zsrR9VWXnDnWFMDlIPQ';
  console.log(process.env.API_KEY_UP);
  const urlUnsplash = `https://api.unsplash.com/search/photos?page=1&query=${searchField}&client_id=${UNSPLASH_API_KEY}`;
  const unsplashResp = await axios.get<unsplashResp>(urlUnsplash,{headers:{Authorization:UNSPLASH_API_KEY}});
  const photos:Result[] = unsplashResp.data.results;
  return photos;
}




export default useFetchPhotosUP;

