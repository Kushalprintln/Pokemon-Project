import './Card.css'
import InfoBtn from './InfoBtn';
function Card({pokemon,openMod}){
    const {height,id,image,name,stats,type,weight} = {...pokemon};
    return (
        <div className={`card ${type}`}>
            <div className="content">
                <p>#{id}</p>
                <img className='pokimg' src={image} />
                <h3>{name}<br/><span>Type : {type}</span></h3>
            </div>
            <div className="sci">
                <InfoBtn clr={type} fun={()=>{openMod({...pokemon})}}/>
            </div>
        </div>
    )
}
export default Card;