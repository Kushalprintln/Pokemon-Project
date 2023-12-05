import BuringText from './BurningText';
import fireStyle from './FireHeading.module.css'
function FireHeading({content}){
    const text = content;
    return(
    <div className={fireStyle.fireh}>
        <BuringText tag='h1' content={text}/> 
    </div>
    )
}
export default FireHeading;