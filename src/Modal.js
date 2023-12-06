import DetailStrip from './DetailStrip';
import './Modal.css';
import TypeWrite from './Typewrite';
import img from './Images/pokedex.png'
function Modal({dd,fun}){
    // console.log(dd);
    // EXTRACTING STAT OBJ ARRAY
    const bsArray = dd.stats.map((obj,idx)=>{
        let {base_stat} = {...obj}
        let objc = {};
        objc[`BS${idx+1}`] = base_stat;
        return objc;
    })
    // PRINTING OF THE EXTRACTION;
    // console.log(dd.stats);
    // console.log(bsArray);
    
    // EXTRACTING ATTACKS;
    const attacks = dd.stats.map((objele,idx)=>{
        let attack = objele.stat.name;
        let nobj = {};
        nobj[`STATE${idx+1}`]= attack;
        return nobj;
    })
    // console.log(attacks);

    return(
    <div className="modalbg">
        <div className="displayimg">
            <img className="dpimag" src={`${dd.image}`} alt=""/>
        </div>
        <div className="modalcontainer">
            <div className="modal">
                <img className="pkdx" src={img} alt=""/>
                <button className="close" onClick={fun}>X</button>
                <div className={`info ${dd.type}`}>
                    <TypeWrite txt={dd.name}/>
                    <img className="onsrcimg" src={`${dd.image}`} alt=""/>
                    <DetailStrip obj={attacks}/>
                    <DetailStrip obj={bsArray}/>
                </div>
                <div className="small">
                    <h6>WEIGHT: {dd.weight}KG</h6> 
                    <h6>HEIGHT: {dd.height}</h6> 
                </div>
            </div>
        </div>
    </div>
    );
}
export default Modal;