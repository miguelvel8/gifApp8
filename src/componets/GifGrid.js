import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
//import { getGifts } from '../helpers/GetGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
   
   const { data:images,loading }=useFetchGifs(category);

    //const [images, setImages] = useState([]);
   
    //useEffect( () => {
      // getGifts(category).then(setImages);
   //}, [category]) //Recibe dos argumentos, se usa el vector vacio para que solo se dispare una vez lo que yo ponga ahì
   

    return (
        <>
            <h3 className="animate__animated animate__fadeIn"> { category } </h3>

            { loading && <p className="animate__animated animate__flash">Loading</p> }

            <div className="card-grid">
                
                {
                    images.map( img => (
                        <GifGridItem 
                            key={ img.id }
                            { ...img }
                        />
                    ))
                }
            
            </div>
        </>
    )
}