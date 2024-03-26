import {
    AnswerContent,
    OptionAnswerContainer,
    OptionAnswerLayout, OrderAnswer
} from "./styled";

import {useEffect, useRef} from "react";

const OptionAnswer = ({ no, content, isSelected = false }) => {
    const btnRef = useRef(null)
    const orderAnswerRef = useRef(null)
    const handleMouseDownOption = () => {
        btnRef.current.classList.add("mouseDown")
    }
    const handleMouseUpOption = () => {
        btnRef.current.classList.remove("mouseDown")
    }
    useEffect(() => {
        if(isSelected) {
            btnRef.current.classList.add("selected")
            orderAnswerRef.current.classList.add("selected")
        } else {
            btnRef.current.classList.remove("selected")
            orderAnswerRef.current.classList.remove("selected")

        }
    }, [isSelected])
    return (
        <OptionAnswerContainer
            onMouseDown={handleMouseDownOption}
            onMouseUp={handleMouseUpOption}
            onMouseOut={handleMouseUpOption}
            ref={btnRef}
        >
            <OptionAnswerLayout >
                <OrderAnswer ref={orderAnswerRef}>{no}</OrderAnswer>
                <AnswerContent>{content}</AnswerContent>
            </OptionAnswerLayout>
        </OptionAnswerContainer>
    )
}

export default OptionAnswer
