import {
  AssignmentContainer,
  BodyContainer,
  HeaderCancelBtn,
  HeaderContainer,
  HeaderLayout,
  HeaderProcessBar,
  HeaderProcessBarConsecutiveText,
  HeaderProcessBarContainer,
  LoadingContainer,
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
import loading from '../../utils/svg/loading.svg';

const AssigmentWrapper = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const listWord = useSelector(selectors.selectListWord);
  const question = useSelector(selectors.selectQuestion);
  const voiceUrl = useSelector(selectors.selectVoiceUrl);
  const audioText = useSelector(selectors.selectAudioText);
  const score = useSelector(selectors.selectScore);
  const completeMessage = useSelector(selectors.selectCompleteMessage);

  const listenRef = useRef(null);
  const speakRef = useRef(null);
  const chooseRef = useRef(null);
  const dragRef = useRef(null);
  const pairRef = useRef(null);

  const [status, setStatus] = useState(STATUS.clean);
  const [process, setProcess] = useState(0);
  const [consecutiveCorrectAnswers, setConsecutiveCorrectAnswers] = useState(0);

  // Lấy URL hiện tại
  const urlParams = new URLSearchParams(window.location.search);

  // Lấy giá trị của tham số tìm kiếm có tên là 'paramName'
  const type = urlParams.get('type');
  const id = urlParams.get('lessonId');
  const index = +urlParams.get('index');
  const assigmentId = +urlParams.get('assigmentId');

  const handleNext = () => {
    if (type === 'listen') {
      listenRef?.current.handleResetState();
      URL.revokeObjectURL(`${voiceUrl}`);
      if (status === 1) {
        const len = question.question.length;
        if (index + 1 < len) {
          navigate(
            `/assigment?type=listen&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
      if (status === 2) {
        const len = question.question.length;
        if (index + 1 < len) {
          navigate(
            `/assigment?type=listen&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
    } else if (type === 'speak') {
      URL.revokeObjectURL(`${voiceUrl}`);
      dispatch(actions.getSpeakScoreSuccess(null));
      if (status === 1) {
        const len = question.question.length;
        if (index + 1 < len) {
          navigate(
            `/assigment?type=speak&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
      if (status === 2) {
        const len = question.question.length;
        if (index + 1 < len) {
          navigate(
            `/assigment?type=speak&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
    } else if (type === 'read') {
      if (index < 2) {
        chooseRef?.current.handleResetState();
      }
      if (status === 1) {
        if (index + 1 < 5) {
          navigate(
            `/assigment?type=read&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
      if (status === 2) {
        const len = question.question.length;
        if (index + 1 < 5) {
          navigate(
            `/assigment?type=read&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
    } else {
      if (index === 0) {
        listenRef?.current.handleResetState();
        URL.revokeObjectURL(`${voiceUrl}`);
      }
      if (status === 1) {
        if (index + 1 < 5) {
          navigate(
            `/assigment?type=test&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
      if (status === 2) {
        if (index + 1 < 5) {
          navigate(
            `/assigment?type=test&lessonId=${id}&index=${index + 1}&assigmentId=${assigmentId}`
          );
        } else {
          dispatch(actions.markComplete(assigmentId));
        }
      }
    }
  };

  const handleCheck = () => {
    if (type === 'listen') {
      listenRef?.current.handleCheck(setConsecutiveCorrectAnswers);
      setProcess(((index + 1) / question.question.length) * 100);
    }
    if (type === 'speak') {
      speakRef?.current.handleCheck();
    }
    if (type === 'read') {
      setProcess(((index + 1) / 5) * 100);
      if (index === 0 || index === 1) {
        chooseRef?.current.handleCheck();
      } else if (index === 2 || index === 3) {
        dragRef?.current.handleCheck();
      }
    }
    if (type === 'test') {
      setProcess(((index + 1) / 5) * 100);
      if (index === 0) {
        listenRef?.current.handleCheck(setConsecutiveCorrectAnswers);
      }
      if (index === 1) {
        speakRef?.current.handleCheck();
      } 
      if (index === 2) {
        chooseRef?.current.handleCheck();
      }
      if (index === 3) {
        dragRef?.current.handleCheck();
      }
    }
  };

  const handleSkip = () => {};

  const handleRecord = (blob) => {
    dispatch(actions.record(blob));
  };

  useEffect(() => {
    if (id) {
      dispatch(actions.getListWord({ lessonId: +id }));
    }
    return () => {
      dispatch(actions.resetRedux());
    };
  }, [id]);

  useEffect(() => {
    if (type && listWord.length) {
      dispatch(actions.getQuestion({ data: listWord, type }));
    }
  }, [type, listWord]);

  useEffect(() => {
    setStatus(STATUS.clean);
    if (question) {
      if (type === 'listen') {
        dispatch(actions.getVoice({ data: question.question[index].question }));
      }
      if (type === 'speak') {
        dispatch(actions.getVoice({ data: question.question[index].question }));
      }
      if (type === 'test') {
        if (index === 0) {
          dispatch(
            actions.getVoice({ data: question.question.listen[0].question })
          );
        } else if (index === 1) {
          dispatch(
            actions.getVoice({ data: question.question.speak[0].question })
          );
        }
      }
    }
  }, [index, question, type]);

  useEffect(() => {
    if (type === 'speak') {
      if (audioText) {
        setStatus(STATUS.wait);
      }
    }
  }, [audioText, type]);

  useEffect(() => {
    if (type === 'speak') {
      if (score !== null) {
        setProcess(((index + 1) / question.question.length) * 100);
        if (score >= 0.7) {
          setStatus(STATUS.right);
        } else {
          setStatus(STATUS.wrong);
        }
      }
    }
  }, [type, score]);

  useEffect(() => {
    if (completeMessage) {
      alert(completeMessage);
      navigate('/');
    }
  }, [completeMessage]);

  return (
    <>
      <AssignmentContainer>
        <HeaderContainer>
          <HeaderLayout>
            <HeaderCancelBtn
              onClick={() => {
                const res = confirm('Bạn có chắc chắn muốn thoát không ?');
                if (res) {
                  navigate('/');
                }
              }}
            >
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
          {isLoading && !question && (
            <LoadingContainer>
              <img src={loading} width={100} height={100} />
            </LoadingContainer>
          )}
          {type === 'listen' && question && (
            <ListenAndChoose
              isLoading={isLoading}
              ref={listenRef}
              onSelect={(status) => {
                setStatus(status);
              }}
              currentStatus={status}
              questions={question.question[index]}
              voiceUrl={voiceUrl}
            />
          )}
          {type === 'speak' && question && (
            <SpeakAssigment
              ref={speakRef}
              question={question.question[index]}
              isLoading={isLoading}
              voiceUrl={voiceUrl}
              onRecord={handleRecord}
              audioText={audioText}
              onSetStatus={setStatus}
            />
          )}
          {type === 'read' &&
            question &&
            ((index === 0 && (
              <ChooseAnswerByMeaning
                question={question.question.choose[0]}
                ref={chooseRef}
                onSetStatus={setStatus}
                status={status}
              />
            )) ||
              (index === 1 && (
                <ChooseAnswerByMeaning
                  question={question.question.choose[1]}
                  ref={chooseRef}
                  onSetStatus={setStatus}
                  status={status}
                />
              )) ||
              (index === 2 && (
                <DragTag
                  question={question.question.drag[0]}
                  onStatus={setStatus}
                  ref={dragRef}
                />
              )) ||
              (index === 3 && (
                <DragTag
                  question={question.question.drag[1]}
                  onStatus={setStatus}
                  ref={dragRef}
                />
              )) ||
              (index === 4 && (
                <ChoosePair
                  question={question.question.pair[0]}
                  ref={pairRef}
                  onStatus={setStatus}
                />
              )))}
          {type === 'test' &&
            question &&
            ((index === 0 && (
              <ListenAndChoose
                isLoading={isLoading}
                ref={listenRef}
                onSelect={(status) => {
                  setStatus(status);
                }}
                currentStatus={status}
                questions={question.question.listen[0]}
                voiceUrl={voiceUrl}
              />
            )) ||
              (index === 1 && (
                <SpeakAssigment
                  ref={speakRef}
                  question={question.question.speak[0]}
                  isLoading={isLoading}
                  voiceUrl={voiceUrl}
                  onRecord={handleRecord}
                  audioText={audioText}
                  onSetStatus={setStatus}
                />
              )) ||
              (index === 2 && (
                <ChooseAnswerByMeaning
                  question={question.question.read.choose[0]}
                  ref={chooseRef}
                  onSetStatus={setStatus}
                  status={status}
                />
              )) ||
              (index === 3 && (
                <DragTag
                  question={question.question.read.drag[0]}
                  onStatus={setStatus}
                  ref={dragRef}
                />
              )) ||
              (index === 4 && (
                <ChoosePair
                  question={question.question.read.pair[0]}
                  ref={pairRef}
                  onStatus={setStatus}
                />
              )))}
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
