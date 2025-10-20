export default function Button({name,link}){
    return(
        <button onClick={link}>{name}</button>
    )
}