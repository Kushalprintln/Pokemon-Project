import BallStyle from './BallTx.module.css'
function BallTx({tag,content}){
    if(tag === "h1"){
        return( 
            <h1 className={BallStyle.balltxt}>{content}</h1>
        ) 
    }
    else if(tag === "h2"){
        return( 
            <h2 className={BallStyle.balltxt}>This is the burning text</h2>
        )
    }
    if(tag === "h3"){
        return( 
            <h3 className={BallStyle.balltxt}>{content}</h3>
        )
    }
    else if(tag === "h4"){
        return( 
            <h4 className={BallStyle.balltxt}>{content}</h4>
        )
    }
    else if(tag === "h5"){
        return( 
            <h5 className={BallStyle.balltxt}>{content}</h5>
        )
    }
    else if(tag === "h6"){
        return( 
            <h6 className={BallStyle.balltxt}>{content}</h6>
        )
    }
    else{
        return( 
            <p className={BallStyle.balltxt}>{content}</p>
        )
    }
    
}
export default BallTx;