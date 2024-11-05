import { useState } from "react";
export default function Partie1(){
    const [nom,setnom]=useState("")
    const [prenom,setprenom]=useState("")
    const [email,setemail]=useState("")
    const [apprendere,setapprendere]=useState("")
    const [niveu,setniveu]=useState("")
    const [vous,setvous]=useState("")
    const [text,settext]=useState("")
    function afficher(e!!!!!!!!){
        e.preventDefault
        settext(Nom : ${nom} Prenom : ${prenom} Email : ${email} Apprendre : ${apprendere} Niveau : ${niveu} Vous : ${vous})
    }
    return(
  
            <>
                <form onSubmit={afficher}>
                    <input type={"text"} onChange={(e)=>(setnom(e.target.value))}/><br/>
                    <input type={"text"} onChange={(e)=>(setprenom(e.target.value))}/><br/>
                    <input type={"text"} onChange={(e)=>(setemail(e.target.value))}/><br/>
                    <br/><br/>
                    <select  onChange={(e)=>(setapprendere(e.target.value))}>
                        <option>HTML5</option>
                        <option>CSS</option>
                    </select>
                    <br/><br/>
                    <input type={"radio"} name="A" value={"debutant"} onChange={(e)=>(setniveu(e.target.value))}/>debutant<br/>
                    <input type={"radio"} name="A" value={"Intermediair"} onChange={(e)=>(setniveu(e.target.value))}/>Intermediair<br/>
                    <input type={"radio"} name="A" value={"Avance"} onChange={(e)=>(setniveu(e.target.value))}/>Avance<br/>
                    <input type={"texer"} onChange={(e)=>(setvous(e.target.value))}/><br/>
                    <button>Envoyer</button>
                </form>
                <p>{text}</p>
             
                </>
    
    )
}
---------------------------------------------------------------
partie 2:
import {cinemas} from './Daata';
export default function Partie1(){
        return(
            cinemas.map(function (cine){
              return(
                <>
                <p>{cine.id}</p><br/>
                <p>{cine.nom}</p><br/>
                <p>{cine.nombereSalles}</p><br/>
                <p>{cine.emplacement}</p><br/>
                <p>{cine.serviceSnack}</p><br/>
                </>
            )
        })
    )
}
---------------------------------------------------------
export default function Partie2(){
        return(
            cinemas.filter(function (cine){
                return cinemas.emplacement=="Casablanca"
            }).map(function (cine){
            return(
                <>
                <p>{cine.id}</p><br/>
                <p>{cine.nom}</p><br/>
                <p>{cine.nombereSalles}</p><br/>
                <p>{cine.emplacement}</p><br/>
                <p>{cine.serviceSnack}</p><br/>
                </>
         )
        })
     )
}
-----------------------------------------------
export default function Partie3(){
    return(
        cinemas.filter(function (cinemas){
       return cinemas.serviceSnack=="oui" 
    }).map(function (cinemas){
        return(
        <>
            <p>{cinemas.id}</p><br/>
            <p>{cinemas.nom}</p><br/>
            <p>{cinemas.nombereSalles}</p><br/>
            <p>{cinemas.emplacement}</p><br/>
            <p>{cinemas.serviceSnack}</p><br/>
        </>
     )
    })
 )
}
---------------------------------------
export default function Partie4(){
 return(
     cinemas.filter(function (cinemas){
    return cinemas.nombereSalles>5 
 }).map(function (cinemas){
     return(
     <>
         <p>{cinemas.id}</p><br/>
         <p>{cinemas.nom}</p><br/>
         <p>{cinemas.nombereSalles}</p><br/>
         <p>{cinemas.emplacement}</p><br/>
         <p>{cinemas.serviceSnack}</p><br/>
     </>
  )
 })
 )}

export default function Partie5(){
    return(
        cinemas.filter(function (cinemas){
          return cinemas.serviceSnack="oui" && cinemas.nombereSalles>3 
    }).map(function (cinemas){
        return(
        <>
            <p>{cinemas.id}</p><br/>
            <p>{cinemas.nom}</p><br/>
            <p>{cinemas.nombereSalles}</p><br/>
            <p>{cinemas.emplacement}</p><br/>
            <p>{cinemas.serviceSnack}</p><br/>
        </>
     )
    })
 )
}
export default function Total6(){
    var a=cinemas.reduce(function (somme,cinemas){
        return(
            somme+=cinemas.nombereSalles
        )
    },0) 
         return(<p>{a}</p>)
               
}




const restaurants = [
    { id: 1, nom: "Le Couscous Royal", typePlat: "Marocain", serviceLivraison: "oui", nombreTables: 25 },
    { id: 2, nom: "La Trattoria", typePlat: "Italien", serviceLivraison: "non", nombreTables: 35 },
    { id: 3, nom: "Burger King", typePlat: "American", serviceLivraison: "oui", nombreTables: 20 },
    { id: 4, nom: "Tajine Palace", typePlat: "Marocain", serviceLivraison: "non", nombreTables: 30 },
    { id: 5, nom: "Pizza Bella", typePlat: "Italien", serviceLivraison: "oui", nombreTables: 15 },
    { id: 6, nom: "Bistrot Français", typePlat: "Français", serviceLivraison: "non", nombreTables: 40 },
  ];
  
  export default restaurants;








  import React from 'react';
import ReactDOM from 'react-dom/client';
import Q11 from './Q11';
import Produit from './produit';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <> 
    <Q11 />
 </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();