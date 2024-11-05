import {plates} from './data'

export default function Q1() { 
    return(
        <table>
            <th>plate name</th><th>ingrendient</th><th>ingrendient</th><th>ingrendient</th><th>ingrendient</th><th>ingrendient</th><th>ingrendient</th>
            {
                plates.map(function(plate,i){
                    return(
                        <tr key={i}>
                            <td>{plate.plateName}</td>
                            <td>{plate.ingredient1}</td>
                            <td>{plate.ingredient2}</td>
                            <td>{plate.ingredient3}</td>
                            <td>{plate.ingredient4}</td>
                            <td>{plate.ingredient5}</td>
                            <td>{plate.ingredient6}</td>
                        </tr>
                    )
                })
            }
        </table>
    )
 }
