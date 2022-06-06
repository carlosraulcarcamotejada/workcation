import axios from "axios";
import { useRef,useState,useEffect } from "react";
import { pexelResp, Photo } from "../Interfaces/pexel-resp";
import { unsplashResp, Result } from "../Interfaces/unsplash-resp";


const useFetchPhotos = ():{data:{photos:Photo[],loading:boolean},loadPlaces:Function} => {

  const isMounted = useRef(true);

  const [data, setData] = useState<{photos:Photo[], loading:boolean}>(
    {photos:[],
    loading:true}
  )


  const loadPlaces = async () => {
    const photos = await getPhotosPexel();
    isMounted && setData({photos:photos,loading:false})
  } 


  useEffect(() => {
    loadPlaces();
    return () => {isMounted.current = false;}
  }, [])

  return {data,loadPlaces};

}



const getPhotosPexel = async (searchField:string = 'villa'):Promise<Photo[]> => {
  //Pexel URL and API Key
  const PEXEL_API_KEY = '563492ad6f91700001000001c93e927ffc3a4828a4d4b10153273404';
  const urlPexel = `https://api.pexels.com/v1/search?query=${encodeURI(searchField)}`;
  const pexelResp = await axios.get<pexelResp>(urlPexel,{headers:{Authorization:PEXEL_API_KEY}});
  const photos:Photo[] = pexelResp.data.photos;
  return photos;
}





// const getPhotosUnsplash = async (searchField:string = 'modern home'):Promise<Result[]> => {
//   //Unsplash URL and API Key
//   //const UNSPLASH_SECRET_API_KEY = 'Vu7WHRLz6yHlw0vRqFiUVUrUs6IpSYwK_WuQxkd1wr4';
//   const UNSPLASH_API_KEY = 'BxPP4izFc04R7vnBk6QJMBa5zsrR9VWXnDnWFMDlIPQ';
//   const urlUnsplash = `https://api.unsplash.com/search/photos?page=1&query=${searchField}&client_id=${UNSPLASH_API_KEY}`;
//   const unsplashResp = await axios.get<unsplashResp>(urlUnsplash,{headers:{Authorization:UNSPLASH_API_KEY}});
//   const photos:Result[] = unsplashResp.data.results;
//   return photos;
// }




export default useFetchPhotos;

