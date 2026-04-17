export default function Card({title,value,color}){

return(

<div className={`p-6 rounded-xl text-white ${color}`}>

<h2 className="text-lg">{title}</h2>

<p className="text-3xl font-bold">{value}</p>

</div>

)

}