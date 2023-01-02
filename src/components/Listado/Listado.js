import { useEffect, useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from 'axios';
import Swal from 'sweetalert2'
import './Listado.css'

const Listado = () => {

    const [movieList, setMovieList] = useState([])

    const navigate = useNavigate() 
    let token = localStorage.getItem('token')

    useEffect(() =>{

        if(token === null) {
            navigate('/')
        }
        

    },[navigate]) // eslint-disable-next-line

    useEffect(() =>{
        const endPoint = 'https://api.themoviedb.org/3/discover/movie?api_key=de5a0d64ca426def93912fd69d0689eb&language=es-ES&page=1'
        axios.get(endPoint)
        .then(res => {
            const apiData = res.data
            setMovieList(apiData.results)
        })
        .catch(error => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Hubo errores, intenta más tarde',
              })
        })
    }, [setMovieList])

    return (
        <div className="container mt-4 mx-auto row">
            {
                movieList.map((oneMovie, idx) => {
                    return (
                        <div className="col-3 my-4" key={idx}>
                            <div className="card">
                                <img src={`https://image.tmdb.org/t/p/w500/${oneMovie.poster_path}`} className="card-img-top" alt={oneMovie.title}/>
                                <div className="card-body">
                                    <h5 className="card-title">{oneMovie.title}</h5>
                                    <p className="card-text">{oneMovie.overview.substring(0,100)}...</p>
                                    <Link to={`/detalle?movieId=${oneMovie.id}`} className="btn btn-primary">Ver Detalle</Link>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Listado