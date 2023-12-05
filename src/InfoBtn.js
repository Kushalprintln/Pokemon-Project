import './InfoBtn.css'
function InfoBtn({clr,fun}){
    return (
        <button className={`btngrad ${clr}`} onClick={fun}>
        MORE INFO
        </button>
    )
}
export default InfoBtn;