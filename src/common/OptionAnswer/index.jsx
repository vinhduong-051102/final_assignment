import {
    AnswerContent,
    OptionAnswerContainer,
    OptionAnswerLayout, OrderAnswer
} from "./styled";

import { useRef } from "react";

const OptionAnswer = ({ no, content }) => {
    const btnRef = useRef(null)
    const handleMouseDownOption = () => {
        btnRef.current.classList.add("mouseDown")
    }
    const handleMouseUpOption = () => {
        btnRef.current.classList.remove("mouseDown")
    }
    return (
        <OptionAnswerContainer
            onMouseDown={handleMouseDownOption}
            onMouseUp={handleMouseUpOption}
            onMouseOut={handleMouseUpOption}
            ref={btnRef}
        >
            <OptionAnswerLayout >
                <OrderAnswer>{no}</OrderAnswer>
                <AnswerContent>{content}</AnswerContent>
            </OptionAnswerLayout>
        </OptionAnswerContainer>
    )
}

export default OptionAnswer
