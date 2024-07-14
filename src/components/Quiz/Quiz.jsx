import { useState, useEffect } from 'react'
import axios from "axios";
import Quiz from 'react-quiz-component';
import './Quiz.css'

var result = {};
var isComplete = false;

function App(params) {
  const [quiz, setQuiz] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [Username, SetUsername] = useState("Test01");
  const [quizID, setQuizID] = useState(0);

  const setQuizResult = async (obj) => {
    isComplete = true
    obj["ID"] = Username;
    obj["quizID"] = quizID;
    console.log(obj);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post('http://localhost:3001/quiz', obj);
      setLoading(false);
    } catch (err) {
      setError(err);
      setLoading(false);
    }
  }

  useEffect(() => {
    const source = axios.CancelToken.source();

    const fetchQuizData = async () => {
      try {
        const response = await axios.get('http://localhost:3001/quiz', {
          cancelToken: source.token
        });
        setQuiz(response.data.random_quiz);
        setLoading(false);
        setQuizID(response.data.quizID);
      } catch (err) {
        if (axios.isCancel(err)) {
          console.log('Request canceled', err.message);
        } else {
          setError(err);
          setLoading(false);
        }
      }
    };

    fetchQuizData();
    return () => {
      source.cancel('Operation canceled by the user.');
    };
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="quiz-body">
      <div className='container'>
        <h1>Quiz</h1>
        <Quiz quiz={quiz} onComplete={setQuizResult} timer={120} />
      </div>
    </div>

  )
}

export default App;