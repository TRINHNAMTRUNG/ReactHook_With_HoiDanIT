import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _, { forEach } from "lodash";
import "../User/DetailQuiz.scss"
import Question from "./Question";
const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    const quizId = params.id;

    const [dataQuiz, setDataQuiz] = useState([]);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        fetchQuestions();
    }, [quizId]);

    const fetchQuestions = async () => {
        const res = await getDataQuiz(quizId);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                // Group the elements of Array based on `color` property
                .groupBy("id")
                // `key` is group's name (color), `value` is the array of objects
                .map((value, key) => {
                    let answers = [];
                    let questionDescription, image = null;
                    value.forEach((question, index) => {
                        if (index === 0) {
                            questionDescription = question.description;
                            image = question.image;
                        };
                        return answers.push(question.answers);
                    })
                    return { questionId: key, answers, questionDescription, image }
                })
                .value();
            setDataQuiz(data);
        }
    }
    const handleNext = () => {
        if (dataQuiz && dataQuiz.length > index + 1) {
            setIndex(index + 1);
        }
    }
    const handlePrev = () => {
        if (index - 1 >= 0) {
            setIndex(index - 1);
        }
    }
    console.log(">>>> check dataquiz: ", dataQuiz);
    return (
        <div className="detail-quiz-container">
            <div className="left-content">
                <div className="title">
                    <h3>{location?.state?.quizTitle}</h3>
                </div>
                <hr></hr>
                <div className="q-body">
                    <img />
                </div>
                <div className="q-content">
                    <Question
                        index={index}
                        data={dataQuiz && dataQuiz.length > 0 ? dataQuiz[index] : {}}
                    />
                </div>
                <div className="footer">
                    <button className="btn btn-primary" onClick={() => handlePrev()}>Prev</button>
                    <button className="btn btn-secondary" onClick={() => handleNext()}>Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz;