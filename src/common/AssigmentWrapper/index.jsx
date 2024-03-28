import {
    AssignmentContainer, BodyContainer,
    HeaderCancelBtn,
    HeaderContainer,
    HeaderLayout,
    HeaderProcessBar,
    HeaderProcessBarConsecutiveText,
    HeaderProcessBarContainer,
    XMarkIcon
} from './styled'
import {xIcon} from "../../constants/icons";
import Footer from "./components/Footer";
import ListenAndChoose from "../../container/ListenAndChoose";
import ChooseAnswerByMeaning from "../../container/ChooseAnswerByMeaning";
import ChoosePair from "../../container/ChoosePair";
import DragTag from "../../container/DragTag";

const AssigmentWrapper = () => {
    // dữ liệu cho header
    // #Tiến độ
    const process = 20
    // #Số lần đúng liên tục
    const consecutiveCorrectAnswers = 0
    //

    return <>
        <AssignmentContainer>
            <HeaderContainer>
                <HeaderLayout>
                    <HeaderCancelBtn>
                        <XMarkIcon
                            src={xIcon}
                        />
                    </HeaderCancelBtn>
                    <HeaderProcessBarContainer>
                        <HeaderProcessBarConsecutiveText>2 lần liên tiếp</HeaderProcessBarConsecutiveText>
                        <HeaderProcessBar percentage={process}/>
                    </HeaderProcessBarContainer>
                </HeaderLayout>
            </HeaderContainer>
            <BodyContainer>
                {/*<ListenAndChoose/>*/}
                {/*<ChooseAnswerByMeaning/>*/}
                {/*<ChoosePair/>*/}
                <DragTag/>
            </BodyContainer>
            <Footer statusCode={2} answer={"answer"} comment={'comment'}/>
        </AssignmentContainer>
    </>
}

export default AssigmentWrapper
