import { plates } from "./data"
export default function Q2() {
    return(
        plates.filter(function (plate) { 
            return plate.ingredient1==="Eggs" || plate.ingredient2==="Eggs"
         }).map(function(plate){
            return(
                <div>
                    <p>{plate.plateName}</p>
                </div>
            )
         })
    )
  }