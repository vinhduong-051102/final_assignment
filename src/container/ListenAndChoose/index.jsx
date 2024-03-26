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
import { useRef } from "react";

const ListenAndChoose = ({ prompt }) => {
    const speakerBtnRef = useRef()
    const handleMouseDownOption = () => {
        speakerBtnRef.current.classList.add("mouseDown")
    }
    const handleMouseUpOption = () => {
        speakerBtnRef.current.classList.remove("mouseDown")
    }
    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Bạn nghe được gì?
            </AssignmentPrompt>
            <AssigmentContentLayout>
                <SpeakerBtnLayout
                    onMouseDown={handleMouseDownOption}
                    onMouseUp={handleMouseUpOption}
                    onMouseOut={handleMouseUpOption}
                >
                    <SpeakerIconBg ref={speakerBtnRef}>
                        <SpeakerIconWrapper>
                            <SpeakerIcon src={speakerIcon}/>
                        </SpeakerIconWrapper>
                    </SpeakerIconBg>
                </SpeakerBtnLayout>
                <AnswerLayout>
                    <OptionAnswer content={"catches"} no={1} />
                    <OptionAnswer content={1} no={1} />
                    <OptionAnswer content={1} no={1} />
                    <OptionAnswer content={1} no={1} />
                </AnswerLayout>
            </AssigmentContentLayout>
        </AssigmentContainer>
    )
}

export default ListenAndChoose
