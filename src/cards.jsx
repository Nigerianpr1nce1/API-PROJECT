import "./App.css"
import { useState ,useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLessThan, faGreaterThan } from "@fortawesome/free-solid-svg-icons";
const Cards = () => {
        const [quiz,setQuiz] = useState([])
        useEffect(() =>
{
    fetch('https://opentdb.com/api.php?amount=10&difficulty=easy')
    .then((response) => 
    response.json())
    .then((data) => (setQuiz(data),
    console.log(data)))
    .catch((error) => {
        print.error('error fetching data:', error)
    })
},[] );
    return ( 
        <>
        <div className="cards">
       <FontAwesomeIcon className="icon" icon ={faLessThan} />
        <div className= "card" >
            {quiz.map((quiz) =>(
                
            ))}
        </div>
        <FontAwesomeIcon  className="icon" icon ={faGreaterThan} />
        </div>
        </>
     );
}
 
export default Cards;