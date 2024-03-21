import { useCallback, useEffect, useState } from "react";
import convertImageToBase64 from "../../utils/convertImageToBase64";
import { CSSProperties } from "styled-components";

interface IProps {
  imgUrl: string;
  styles?: CSSProperties;
}

interface IStorage {
  expireIn: number;
  img: string;
}

export const CachedImage = ({ imgUrl, styles }: IProps) => {
  console.debug(imgUrl)
  const [ imagHtml, setImageHtml ] = useState<HTMLImageElement>();

  const getImageFromCacheOrUrl = useCallback( async ( imgUrl: string ) => {
    const imageOnStorageString = localStorage.getItem(`cached-image-${imgUrl}`)

    const imageExpireInTime = new Date().getTime() + 5 * 60 * 1000;

    const imageData = {
      img: '',
      expireIn: 0
    }

    if(!imageOnStorageString){
      console.debug("Não foram encontrados imagem no cache, criando...")
      imageData.img = await convertImageToBase64({ imgUrl })
      console.debug(imageData.img)
      imageData.expireIn = imageExpireInTime

      localStorage.setItem(`cached-image-${imgUrl}`, JSON.stringify(imageData))
      console.debug("Adicionado no storage")
      return imageData
    }

    const imageOnStorage = JSON.parse(imageOnStorageString) as IStorage;

    const cacheIsExpired = new Date().getTime() > imageOnStorage.expireIn;

    if(cacheIsExpired){
      imageData.img = await convertImageToBase64({ imgUrl })
      imageData.expireIn = imageExpireInTime

      localStorage.setItem(`cached-image-${imgUrl}`, JSON.stringify(imageData))

      return imageData
    }

    imageData.img = imageOnStorage.img;
    imageData.expireIn = imageOnStorage.expireIn

    return imageData;
  }, [])

  useEffect(()=>{
    getImageFromCacheOrUrl(imgUrl)
      .then(( imageStorage ) => {
        const newImage = new Image();

        console.debug(imageStorage.img);

        newImage.src = `data:image/png;base64,${imageStorage.img}`;

        setImageHtml(newImage);
      })
      .catch(error => console.error(error))

  }, [ getImageFromCacheOrUrl, imgUrl ])


  return ( <img src={imagHtml?.src} style={styles} /> )
}

