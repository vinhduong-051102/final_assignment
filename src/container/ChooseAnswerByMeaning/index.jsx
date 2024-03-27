import character1 from "../../assets/character1.png"
import { AssignmentPrompt, AssigmentContainer } from "../commonStyled";
import {
    AnswerContentLayout,
    AssigmentContentLayout,
    AssigmentMeaningContainer,
    AssigmentMeaningImgContainer,
    AssigmentMeaningLayout, AssigmentMeaningTextContainer, MeaningText, MeaningTextSvgContainer,
} from "./styled";
import resourceTalk from "../../utils/svg/resourse_talk.svg"
import OptionAnswer from "../../common/OptionAnswer";

const ChooseAnswerByMeaning = () => {
    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Chọn nghĩa đúng
            </AssignmentPrompt>
            <AssigmentContentLayout>
                <AssigmentMeaningContainer>
                    <AssigmentMeaningLayout>
                        <AssigmentMeaningImgContainer>
                            <img src={character1} />
                        </AssigmentMeaningImgContainer>
                        <AssigmentMeaningTextContainer>
                            <MeaningTextSvgContainer>
                                <img src={resourceTalk} />
                            </MeaningTextSvgContainer>
                            <MeaningText>hello</MeaningText>
                        </AssigmentMeaningTextContainer>
                    </AssigmentMeaningLayout>
                </AssigmentMeaningContainer>
                <AnswerContentLayout>
                    <OptionAnswer content={1} no={1} isSelected />
                    <OptionAnswer content={1} no={1} />
                    <OptionAnswer content={1} no={1} />
                </AnswerContentLayout>
            </AssigmentContentLayout>
        </AssigmentContainer>
    )
}

export default ChooseAnswerByMeaning
