import {
    AssigmentContainer,
    AssignmentPrompt
} from "../commonStyled";
import {
    AnswerContainer,
    AnswerInputContainer,
    AnswerInputRow,
    AnswerLayoutPC,
    AnswerTagContainer,
    AnswerTagLayout,
    AssigmentContentLayout,
    AssigmentQuestionContainer,
    AssigmentQuestionImgContainer,
    AssigmentQuestionLayout,
    AssigmentQuestionTextContainer,
    QuestionSpeakerBtn,
    QuestionSpeakerIconContainer,
    QuestionText,
    QuestionTextSvgContainer,
    SpeakerImg,
    AnswerLayoutOther, AnswerTextarea
} from "./styled";
import character5 from "../../assets/character5.png";
import resourceTalk from "../../utils/svg/resourse_talk.svg";
import speakerSvg from "../../utils/svg/speaker_question.svg"
import OptionAnswer from "../../common/OptionAnswer";

const DragTag = () => {
    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Viết lại bằng Tiếng Việt
            </AssignmentPrompt>
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
                                alignItems: 'center'}}
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
                <AnswerContainer>
                    <AnswerLayoutPC>
                        <AnswerInputContainer>
                            <AnswerInputRow></AnswerInputRow>
                            <AnswerInputRow></AnswerInputRow>
                        </AnswerInputContainer>
                        <AnswerTagContainer>
                            <AnswerTagLayout>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                                <OptionAnswer isShowNo={false} content={123} defaultHeight={'60px'}/>
                            </AnswerTagLayout>
                        </AnswerTagContainer>
                    </AnswerLayoutPC>
                    <AnswerLayoutOther>
                        <AnswerTextarea placeholder="Nhập câu trả lời của bạn ..."/>
                    </AnswerLayoutOther>
                </AnswerContainer>
            </AssigmentContentLayout>
        </AssigmentContainer>
    )
}

export default DragTag
