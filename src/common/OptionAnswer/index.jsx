import {
    AnswerContent,
    OptionAnswerContainer,
    OptionAnswerLayout, OrderAnswer
} from "./styled";

const OptionAnswer = ({ no, content }) => {
    return <OptionAnswerContainer>
        <OptionAnswerLayout>
            <OrderAnswer>{no}</OrderAnswer>
            <AnswerContent>{content}</AnswerContent>
        </OptionAnswerLayout>
    </OptionAnswerContainer>
}

export default OptionAnswer
