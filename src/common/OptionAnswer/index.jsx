import {
    AnswerContent,
    OptionAnswerContainer,
    OptionAnswerLayout, OrderAnswer
} from "./styled";

import { useEffect, useRef } from "react";

const OptionAnswer = ({ no, content, isSelected = false, isDisabled = false, isRight = false, isWrong = false }) => {
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

    useEffect(() => {
        if(isRight) {
            btnRef.current.classList.add("right")
            orderAnswerRef.current.classList.add("right")
        } else {
            btnRef.current.classList.remove("right")
            orderAnswerRef.current.classList.remove("right")

        }
    }, [isRight])

    useEffect(() => {
        if(isWrong) {
            btnRef.current.classList.add("wrong")
            orderAnswerRef.current.classList.add("wrong")
        } else {
            btnRef.current.classList.remove("wrong")
            orderAnswerRef.current.classList.remove("wrong")

        }
    }, [isWrong])

    useEffect(() => {
        if(isDisabled) {
            btnRef.current.classList.add("disabled")
            orderAnswerRef.current.classList.add("disabled")
        } else {
            btnRef.current.classList.remove("disabled")
            orderAnswerRef.current.classList.remove("disabled")

        }
    }, [isDisabled])

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
