import estrellasNegro from '../../Asset/estrellasNegro.png'
import estrellaTransparente from '../../Asset/estrellaTransparente.png'


export default function Rating({rating}) { 
let stars = [];

    for(let i = 0; i<5 ; i++) { 
        if(rating > i) { 
            stars.push(<img className='estrellasNegro' src={estrellasNegro} alt="Stars" />)
        } 
        else { 
            stars.push(<img className='estrellaTransparente' src={estrellaTransparente} alt="star" />)
        }
    }

    return ( 
        <div> 
            {/* <p>{number.rating}</p> */}
            {stars}
        </div>
    )
}