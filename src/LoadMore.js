import './LoadMore.css'
function LoadMore({bg,fun}){
    let clr;
    if(bg === 1){
        clr = 'color-2'
    }
    else if(bg === 2){
        clr = 'color-11'
    }
    return(
        <button className={`btn-hover ${clr}`} onClick={fun}>
            LOAD MORE
            <img src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d6cfe44-5fe9-4aaf-9cde-700622aa927d/dccwm24-630b8838-739d-419f-9c32-68bf84d971ab.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzhkNmNmZTQ0LTVmZTktNGFhZi05Y2RlLTcwMDYyMmFhOTI3ZFwvZGNjd20yNC02MzBiODgzOC03MzlkLTQxOWYtOWMzMi02OGJmODRkOTcxYWIuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.1mZ-5Fqcrt4-7f3p5jwNBvyoZpVX9aDtUTQKlollHNU'/>
        </button>
    )
}
export default LoadMore;