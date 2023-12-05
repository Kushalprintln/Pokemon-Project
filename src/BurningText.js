import BurningStyle from './BurningText.module.css'
function BuringText({tag,content}){
    if(tag === "h1"){
        return( 
            <h1 className={BurningStyle.Blazing}>{content}</h1>
        ) 
    }
    else if(tag === "h2"){
        return( 
            <h2>This is the burning text</h2>
        )
    }
    if(tag === "h3"){
        return( 
            <h3 className={BurningStyle.Blazing}>{content}</h3>
        )
    }
    else if(tag === "h4"){
        return( 
            <h4 className={BurningStyle.Blazing}>{content}</h4>
        )
    }
    else if(tag === "h5"){
        return( 
            <h5 className={BurningStyle.Blazing}>{content}</h5>
        )
    }
    else if(tag === "h6"){
        return( 
            <h6 className={BurningStyle.Blazing}>{content}</h6>
        )
    }
    else{
        return( 
            <p className={BurningStyle.Blazing}>{content}</p>
        )
    }
    
}
export default BuringText;