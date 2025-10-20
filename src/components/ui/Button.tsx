type ButtonProp={
    name:string,
    link: ()=>null
}
export default function Button({name,link}:ButtonProp){
    return(
        <button onClick={link}>{name}</button>
    )
}