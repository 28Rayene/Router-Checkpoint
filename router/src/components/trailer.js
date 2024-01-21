import { useParams } from "react-router";
import React from "react";
import movieData from "./MoviesData";



const trailer=()=>{
    const [singleMovies, setSingleMovies] = useState(null);
    
    
    
    const { id } = useParams();
    React.useEffect(() => {
        console.log(moviesList);
        setSingleMovies(moviesList.find((item) => item.id === id));
      }, []);
 
    return(
        <div className="card">
                <iframe width="560" height="315" src={singleMovies.trailerURL}
                title="YouTube video player" frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
            <h4 className="content">{singleMovies.description}</h4>


        </div>
    )
}
export default trailer