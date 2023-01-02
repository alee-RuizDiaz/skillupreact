import { useEffect } from "react"
import { useNavigate, Link } from "react-router-dom"
import './Listado.css'

const Listado = () => {

    const navigate = useNavigate() 
    let token = localStorage.getItem('token')

    useEffect(() =>{

        if(token === null) {
            navigate('/')
        }
        

    },[navigate]) // eslint-disable-next-line

    return (
        <div className="container mx-auto mt-4 row">
            <div className="col-3">
                <div className="card">
                    <img src="..." className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <Link href="/" className="btn btn-primary">Go somewhere</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listado