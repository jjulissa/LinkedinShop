import Rating  from "../Rating/Rating"

export default function UserCard({nombre, rating, gender, job, city}) {
    
    return ( 
            <div className='Card'>  
                <h2>{nombre}</h2> 
                <Rating rating={rating} />
                <p>{gender}</p> 
                <p>{job}</p> 
                <p>{city}</p>
            </div>

    )
}