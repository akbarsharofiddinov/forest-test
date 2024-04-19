import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { setFeedModal } from "../../store/storeSlice/storeSlice";
import { IoIosArrowDown } from "react-icons/io";
import { usePostFeedbackMutation } from "../../store/RTKQuery";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

const Feedback: React.FC = () => {
  const [question_1, setQuestion1] = useState<IQuestion>({
    value: 0,
    visible: false,
  });
  const [question_2, setQuestion2] = useState<IQuestion>({
    value: 0,
    visible: false,
  });
  const [question_3, setQuestion3] = useState<IQuestion>({
    value: 0,
    visible: false,
  });
  const [question_4, setQuestion4] = useState("");
  const [loading, setLoading] = useState(false);

  const dispatch = useAppDispatch();
  const { feedModal } = useAppSelector((state) => state.storeSlice);

  const [postFeedback] = usePostFeedbackMutation();

  function handlePostFeedback(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      postFeedback({
        question1: question_1,
        question2: question_2,
        question3: question_3,
        question4: question_4,
      });

      toast("Отзыв успешно отправлен!", { type: "success" });
      setLoading(false);
      dispatch(setFeedModal(false));
    }, 1000);
  }

  return (
    <>
      <div className={feedModal ? "modal active" : "modal"}>
        <div className="container">
          <div className="modal-inner">
            <span
              className="closeModal-btn"
              onClick={() => {
                dispatch(setFeedModal(false));
              }}
            >
              &times;
            </span>
            <h1 className="title">Отзыв гостей</h1>
            <form className="feedback-form" onSubmit={handlePostFeedback}>
              <div className="question-box">
                <p>
                  1. Было ли приветствие официанта и познакомил ли он/она себя?
                </p>
                <div
                  className="inputBox"
                  onClick={() =>
                    setQuestion1((prev) => ({
                      ...prev,
                      visible: !question_1.visible,
                    }))
                  }
                >
                  <p className="value">
                    {question_1.value === 1 ? "Да" : "Нет"}
                  </p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                  <div
                    className={
                      question_1.visible
                        ? "select-dropdown active"
                        : "select-dropdown"
                    }
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion1((prev) => ({ ...prev, visible: false }));
                        setQuestion1((prev) => ({ ...prev, value: 1 }));
                      }}
                    >
                      Да
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion1((prev) => ({ ...prev, visible: false }));
                        setQuestion1((prev) => ({ ...prev, value: 0 }));
                      }}
                    >
                      Нет
                    </button>
                  </div>
                </div>
              </div>
              <div className="question-box">
                <p>2. Понравилось ли обслуживание официанта?</p>
                <div
                  className="inputBox"
                  onClick={() =>
                    setQuestion2((prev) => ({
                      ...prev,
                      visible: !question_2.visible,
                    }))
                  }
                >
                  <p className="value">
                    {question_2.value === 1 ? "Да" : "Нет"}
                  </p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                  <div
                    className={
                      question_2.visible
                        ? "select-dropdown active"
                        : "select-dropdown"
                    }
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion2((prev) => ({ ...prev, visible: false }));
                        setQuestion2((prev) => ({ ...prev, value: 1 }));
                      }}
                    >
                      Да
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion2((prev) => ({ ...prev, visible: false }));
                        setQuestion2((prev) => ({ ...prev, value: 0 }));
                      }}
                    >
                      Нет
                    </button>
                  </div>
                </div>
              </div>
              <div className="question-box">
                <p>3. Понравились ли Вам блюда ?</p>
                <div
                  className="inputBox"
                  onClick={() =>
                    setQuestion3((prev) => ({
                      ...prev,
                      visible: !question_3.visible,
                    }))
                  }
                >
                  <p className="value">
                    {question_3.value === 1 ? "Да" : "Нет"}
                  </p>
                  <span>
                    <IoIosArrowDown />
                  </span>
                  <div
                    className={
                      question_3.visible
                        ? "select-dropdown active"
                        : "select-dropdown"
                    }
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion3((prev) => ({ ...prev, visible: false }));
                        setQuestion3((prev) => ({ ...prev, value: 1 }));
                      }}
                    >
                      Да
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        setQuestion3((prev) => ({ ...prev, visible: false }));
                        setQuestion3((prev) => ({ ...prev, value: 0 }));
                      }}
                    >
                      Нет
                    </button>
                  </div>
                </div>
              </div>
              <div className="question-box">
                <p>4. Ваше предложения и жалобы</p>
                <textarea
                  cols={30}
                  rows={10}
                  value={question_4}
                  onChange={(e) => setQuestion4(e.target.value)}
                  required
                ></textarea>
              </div>

              <button disabled={loading}>
                {loading ? (
                  <PulseLoader color="#ddd" size={8} speedMultiplier={0.6} />
                ) : (
                  "Оставить отзыв"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
