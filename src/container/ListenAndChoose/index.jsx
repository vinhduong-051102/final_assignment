import {
    AnswerLayout,
    AssigmentContainer,
    AssigmentContentLayout,
    AssignmentPrompt,
    SpeakerBtnLayout,
    SpeakerIcon,
    SpeakerIconBg,
    SpeakerIconWrapper
} from "./styled";
import speakerIcon from "../../utils/svg/speaker.svg"
import OptionAnswer from "../../common/OptionAnswer";

const ListenAndChoose = ({ prompt }) => {
    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Bạn nghe được gì?
            </AssignmentPrompt>
            <AssigmentContentLayout>
                <SpeakerBtnLayout>
                    <SpeakerIconBg>
                        <SpeakerIconWrapper>
                            <SpeakerIcon src={speakerIcon}/>
                        </SpeakerIconWrapper>
                    </SpeakerIconBg>
                </SpeakerBtnLayout>
                <AnswerLayout>
                    <OptionAnswer />
                    <OptionAnswer />
                    <OptionAnswer />
                    <OptionAnswer />
                </AnswerLayout>
            </AssigmentContentLayout>
        </AssigmentContainer>
    )
}

export default ListenAndChoose
