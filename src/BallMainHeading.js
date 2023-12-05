import BallHStyle from './BallMnHd.module.css'
import PokeBall from './PokeBall';
import BallTx from './BallTx';
function BallMainHeading({content}){
    const text = content;
    return(
        <div className={BallHStyle.ball}>
            <PokeBall/>
            <BallTx tag={'h1'} content={text}/>
        </div>
    )
}
export default BallMainHeading;