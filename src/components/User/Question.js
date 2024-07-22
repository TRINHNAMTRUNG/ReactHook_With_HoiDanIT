import _ from "lodash";
const Question = (props) => {
    const { data, index } = props;
    if (_.isEmpty(data)) {
        return (<></>);
    }
    console.log(">>> check question: ", data);
    return (
        <>
            {data.image &&
                <div className="q-image">
                    <img src={`data:image/jpeg;base64, ${data.image}`} />
                </div>
            }
            <div className="question">
                Question {index + 1} : {data.questionDescription} ?
            </div>
            <div className="answer">
                {data && data.answers.length > 0 &&
                    data.answers.map((answer, index) => {
                        return (
                            <div className="a-childe" key={`answer-${index}`}>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" />
                                    <label className="form-check-label">
                                        {answer.description}
                                    </label>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}
export default Question;