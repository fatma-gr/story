import { plates } from "./data"
export default function Q3() {
    const plate=plates.find(function(plate){
        return plate.plateName==="Pasta Carbonara"
    })
  return (
    <div>
        <p>{plate.plateName}</p>
    </div>
  )
}
