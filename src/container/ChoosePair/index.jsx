import { AssigmentContainer, AssignmentPrompt } from "../commonStyled";
import {AssigmentContentContainer, AssigmentContentLayout} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";

const ChoosePair = () => {
    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Chọn cặp từ
            </AssignmentPrompt>
            <AssigmentContentContainer>
                <AssigmentContentLayout>
                    <OptionAnswer no={1} isRight/>
                    <OptionAnswer no={2} isDisabled/>
                    <OptionAnswer no={3} isWrong/>
                    <OptionAnswer no={4}/>
                    <OptionAnswer no={5}/>
                    <OptionAnswer no={6} isSelected/>
                    <OptionAnswer no={7}/>
                    <OptionAnswer no={8}/>
                </AssigmentContentLayout>
            </AssigmentContentContainer>
        </AssigmentContainer>
    )
}

export default ChoosePair
