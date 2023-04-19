import axios from "axios";
import {isRef, ref, unref, watchEffect} from "vue";

export function useReadMovie(url) {

    const data = ref(null);
    const error = ref(null);
    const isLoading = ref(false);

    const getMovie = async () =>{

        try {       
           const response = await axios.get(unref(url));
           data.value = response.data;
        } catch (err) {
            error.value = err.message;
        }
        
    }

    if(isRef(url))  watchEffect(getMovie);
    else getMovie();
    

    return { getMovie, data, error, isLoading };
}