import ballStyle from './PokeBall.module.css'
function PokeBall(){
    return(
        <div className={ballStyle.pokeball}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pok%C3%A9_Ball_icon.svg/768px-Pok%C3%A9_Ball_icon.svg.png"/>
        </div>
    )
}
export default PokeBall;