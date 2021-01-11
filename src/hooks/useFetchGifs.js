import { useState, useEffect} from "react"
import { getGifts } from "../helpers/GetGifs";


export const useFetchGifs = (category) => {
    
        
        const [state, setstate] = useState({
            data:[],
            loading:true
        });

        useEffect(() => {

            getGifts(category)
            .then(imgs => {

                setTimeout(()=>{
                    
                    setstate({
                        data:imgs,
                        loading:false 
                    });
                },2000);
                
            })

        }, [category])

        
        return state;

}
