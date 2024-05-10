import { AssigmentContainer, AssignmentPrompt } from '../commonStyled';
import {
  AssigmentContentLayout,
  AssigmentQuestionContainer,
  AssigmentQuestionImgContainer,
  AssigmentQuestionLayout,
  AssigmentQuestionTextContainer,
  BtnCheckContainer,
  Icon,
  QuestionSpeakerBtn,
  QuestionSpeakerIconContainer,
  QuestionText,
  QuestionTextSvgContainer,
  SpeakerImg,
} from './styled';
import character5 from '../../assets/character5.png';
import resourceTalk from '../../utils/svg/resourse_talk.svg';
import speakerSvg from '../../utils/svg/speaker_question.svg';
import OptionAnswer from '../../common/OptionAnswer';
import { micIcon, rightIcon } from '../../constants/icons';

const SpeakAssigment = () => {
  const isRight = false;
  return (
    <AssigmentContainer>
      <AssignmentPrompt>Đọc câu này</AssignmentPrompt>
      <AssigmentContentLayout>
        <AssigmentQuestionContainer>
          <AssigmentQuestionLayout>
            <AssigmentQuestionImgContainer>
              <img src={character5} />
            </AssigmentQuestionImgContainer>
            <AssigmentQuestionTextContainer>
              <QuestionTextSvgContainer>
                <img src={resourceTalk} />
              </QuestionTextSvgContainer>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <QuestionSpeakerIconContainer>
                  <QuestionSpeakerBtn>
                    <SpeakerImg src={speakerSvg} />
                  </QuestionSpeakerBtn>
                </QuestionSpeakerIconContainer>
                <QuestionText>How are you</QuestionText>
              </div>
            </AssigmentQuestionTextContainer>
          </AssigmentQuestionLayout>
        </AssigmentQuestionContainer>
        <OptionAnswer
          content={
            <BtnCheckContainer>
              {isRight ? (
                <>
                  <Icon src={rightIcon} />
                </>
              ) : (
                <>
                  <Icon src={micIcon} />
                  <span>Nhấn vào để đọc</span>
                </>
              )}
            </BtnCheckContainer>
          }
          isShowNo={false}
          isRight={isRight}
        />
      </AssigmentContentLayout>
    </AssigmentContainer>
  );
};

export default SpeakAssigment;
