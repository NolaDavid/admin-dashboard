export default function Card(props) {
console.log("props",props)
return(
    <div>
        <div>

<h1>{props.title}</h1>
        </div>
        <div>
            <span>{props.value}</span>
        </div>

    </div>



)
}