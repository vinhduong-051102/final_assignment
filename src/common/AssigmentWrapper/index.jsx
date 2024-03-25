import {
    AssignmentContainer,
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
            <div>body</div>
            <Footer statusCode={2} answer={"answer"} comment={'comment'}/>
        </AssignmentContainer>

    </>
}

export default AssigmentWrapper
