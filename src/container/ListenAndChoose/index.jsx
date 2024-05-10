import {
  AnswerLayout,
  AssigmentContentLayout,
  SpeakerBtnLayout,
  SpeakerIcon,
  SpeakerIconBg,
  SpeakerIconWrapper,
} from './styled';
import { AssignmentPrompt, AssigmentContainer } from '../commonStyled';
import speakerIcon from '../../utils/svg/speaker.svg';
import OptionAnswer from '../../common/OptionAnswer';
import { useRef, useState } from 'react';

const ListenAndChoose = ({ questions, onSelect }) => {
  const [itemSelected, setItemSelected] = useState(null);
  const speakerBtnRef = useRef();
  const handleMouseDownOption = () => {
    speakerBtnRef.current.classList.add('mouseDown');
  };
  const handleMouseUpOption = () => {
    speakerBtnRef.current.classList.remove('mouseDown');
  };
  return (
    <AssigmentContainer>
      <AssignmentPrompt>Bạn nghe được gì?</AssignmentPrompt>
      <AssigmentContentLayout>
        <SpeakerBtnLayout
          onMouseDown={handleMouseDownOption}
          onMouseUp={handleMouseUpOption}
          onMouseOut={handleMouseUpOption}
        >
          <SpeakerIconBg ref={speakerBtnRef}>
            <SpeakerIconWrapper onClick={() => alert()}>
              <SpeakerIcon src={speakerIcon} />
            </SpeakerIconWrapper>
          </SpeakerIconBg>
        </SpeakerBtnLayout>
        <AnswerLayout>
          {questions.map((item, index) => {
            return (
              <OptionAnswer
                key={index}
                content={item.content}
                no={item.no}
                onClick={(no) => {
                  setItemSelected(no);
                  onSelect(no);
                }}
                isSelected={itemSelected === item.no}
              />
            );
          })}
        </AnswerLayout>
      </AssigmentContentLayout>
    </AssigmentContainer>
  );
};

export default ListenAndChoose;
