import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";


const DetailQuiz = (props)=> {
    const params = useParams();
    const quizId = params.id;

    useEffect(()=> {
        fetchQuestions();
    }, [quizId]);
    const fetchQuestions = async()=> {
        const res = await getDataQuiz(quizId);
        console.log(">>>> check question: ", res)
    }

    console.log(">>>> check param: ", params);
    return(
        <div className="detail-quiz-container">
            Detailquiz
        </div>
    )
}   
export default DetailQuiz;