import ConStyles from './Container.module.css'
import Card from "./Card";

function Container({pokiDataArr,fun}){
    return (
        <div className={ConStyles.container}>
        {pokiDataArr && pokiDataArr.map((ele,idx)=>(<Card pokemon={ele[0]} key={idx} openMod={fun}/>))}
        </div>
    )
}
export default Container;