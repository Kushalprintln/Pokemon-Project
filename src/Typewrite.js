import tystyle from './Typing.module.css'
function TypeWrite({txt}){
    return (
        <div className={tystyle.typing}>
            {txt}
        </div>
    )
}
export default TypeWrite;