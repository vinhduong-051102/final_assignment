import {
  AssignmentContainer,
  BodyContainer,
  HeaderCancelBtn,
  HeaderContainer,
  HeaderLayout,
  HeaderProcessBar,
  HeaderProcessBarConsecutiveText,
  HeaderProcessBarContainer,
  XMarkIcon,
} from './styled';
import { xIcon } from '../../constants/icons';
import Footer from './components/Footer';
import ListenAndChoose from '../../container/ListenAndChoose';
import ChooseAnswerByMeaning from '../../container/ChooseAnswerByMeaning';
import ChoosePair from '../../container/ChoosePair';
import DragTag from '../../container/DragTag';
import SpeakAssigment from '../../container/SpeakAssigment';
import { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import * as selectors from './assigmentSlice';
import { STATUS } from './constants';
import { useNavigate } from 'react-router';

const AssigmentWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const listWord = useSelector(selectors.selectListWord);
  const question = useSelector(selectors.selectQuestion);

  const listenRef = useRef(null);

  const [status, setStatus] = useState(STATUS.clean);
  const [process, setProcess] = useState(0);
  const [consecutiveCorrectAnswers, setConsecutiveCorrectAnswers] = useState(0);

  // Lấy URL hiện tại
  const urlParams = new URLSearchParams(window.location.search);

  // Lấy giá trị của tham số tìm kiếm có tên là 'paramName'
  const type = urlParams.get('type');
  const id = urlParams.get('lessonId');
  const index = +urlParams.get('index');

  const handleNext = () => {
    listenRef?.current.handleResetState();
    if (status === 1) {
      const len = question.question.length;
      if (index + 1 < len) {
        navigate(`/assigment?type=listen&lessonId=${id}&index=${index + 1}`);
      } else {
        navigate('/');
      }
    }
    if (status === 2) {
      const len = question.question.length;
      if (index + 1 < len) {
        navigate(`/assigment?type=listen&lessonId=${id}&index=${index + 1}`);
      } else {
        navigate('/');
      }
    }
  };

  const handleCheck = () => {
    listenRef?.current.handleCheck(setConsecutiveCorrectAnswers);
    setProcess(((index + 1) / question.question.length) * 100)
  };

  const handleSkip = () => {};

  useEffect(() => {
    if (id) {
      dispatch(actions.getListWord({ lessonId: +id }));
    }
  }, [id]);

  useEffect(() => {
    if (type && listWord.length) {
      dispatch(actions.getQuestion({ data: listWord, type }));
    }
  }, [type, listWord]);

  useEffect(() => {
    setStatus(STATUS.clean);
  }, [index]);

  return (
    <>
      <AssignmentContainer>
        <HeaderContainer>
          <HeaderLayout>
            <HeaderCancelBtn>
              <XMarkIcon src={xIcon} />
            </HeaderCancelBtn>
            <HeaderProcessBarContainer>
              <HeaderProcessBarConsecutiveText>
                {consecutiveCorrectAnswers > 1
                  ? `${consecutiveCorrectAnswers} lần liên tiếp`
                  : ''}
              </HeaderProcessBarConsecutiveText>
              <HeaderProcessBar percentage={process} />
            </HeaderProcessBarContainer>
          </HeaderLayout>
        </HeaderContainer>
        <BodyContainer>
          {type === 'listen' && question && (
            <ListenAndChoose
              ref={listenRef}
              onSelect={(status) => {
                setStatus(status);
              }}
              currentStatus={status}
              questions={question.question[index]}
            />
          )}
          {type === 'speak' && <SpeakAssigment />}
          {type === 'read' && <ChooseAnswerByMeaning />}
          {/*<ChoosePair />*/}
          {/*<DragTag/>*/}
        </BodyContainer>
        <Footer
          statusCode={status}
          answer={'answer'}
          comment={'comment'}
          onCheck={handleCheck}
          onSkip={handleSkip}
          onNext={handleNext}
        />
      </AssignmentContainer>
    </>
  );
};

export default AssigmentWrapper;
