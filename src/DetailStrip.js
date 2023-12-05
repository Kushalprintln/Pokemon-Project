import './DetailStrip.css';
function DetailStrip({obj}){
    // console.log(obj);
    function getKeyValue(eleobj){
        for(let i in eleobj){
            // console.log(i +": "+ eleobj[i]);
            return `${i}: ${eleobj[i]}`;
        }
    }
   return (
    <div className="detail">
        { obj.map((ele,idx)=>{
                let str = getKeyValue(ele);
                return <div className='detailCard' key={idx}>{str}</div>
            }) 
        }
    </div>
   )
}
export default DetailStrip;