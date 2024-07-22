import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _, { forEach } from "lodash";

const DetailQuiz = (props) => {
    const params = useParams();
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
            Detailquiz
        </div>
    )
}
export default DetailQuiz;