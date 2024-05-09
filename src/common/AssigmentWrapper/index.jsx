import {
    AssignmentContainer,
    BodyContainer,
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
import SpeakAssigment from "../../container/SpeakAssigment";
import {useEffect} from "react";

const AssigmentWrapper = () => {
    // dữ liệu cho header
    // #Tiến độ
    const process = 60
    // #Số lần đúng liên tục
    const consecutiveCorrectAnswers = 0

    // Lấy URL hiện tại
    const urlParams = new URLSearchParams(window.location.search);

    // Lấy giá trị của tham số tìm kiếm có tên là 'paramName'
    const type = urlParams.get('type');
    const id = urlParams.get('lessonId')
    const index = urlParams.get("index")

    useEffect(() => {
        if (type === 'listen') {

        }
        else if (type === 'speak') {

        }
        else if (type === 'read') {

        }
        else {

        }
    }, [type])

    useEffect(() => {

    }, [id])

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
                <ListenAndChoose onSelect={() => {}} questions={[{content: 1, no: 1}, {content: 1, no: 2}, {content: 1, no: 2}, {content: 1, no: 2}]}/>
                {/*<ChooseAnswerByMeaning/>*/}
                {/*<ChoosePair/>*/}
                {/*<DragTag/>*/}
                {/*<SpeakAssigment/>*/}
            </BodyContainer>
            <Footer statusCode={2} answer={"answer"} comment={'comment'}/>
        </AssignmentContainer>
    </>
}

export default AssigmentWrapper
