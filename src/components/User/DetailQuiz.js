import { useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _, { forEach } from "lodash";
import "../User/DetailQuiz.scss"
const DetailQuiz = (props) => {
    const params = useParams();
    const location = useLocation();
    console.log(location)
    const quizId = params.id;

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
                .value()
            console.log("check raw: ", raw)
            console.log("check data: ", data)
        }
    }

    console.log(">>>> check param: ", params);
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
                    <div className="question">
                        EX1:  QUEST 1
                    </div>
                    <div className="answer">
                        <div className="a-childe">A. sahjhdka</div>
                        <div className="a-childe">B. sahjhdka</div>
                        <div className="a-childe">C. sahjhdka</div>
                    </div>
                </div>
                <div className="footer">
                    <button className="btn btn-primary">Prev</button>
                    <button className="btn btn-secondary">Next</button>
                </div>
            </div>
            <div className="right-content">
                count down
            </div>
        </div>
    )
}
export default DetailQuiz;