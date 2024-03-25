import {
    AssignmentContainer,
    HeaderCancelBtn,
    HeaderContainer,
    HeaderLayout, HeaderProcessBar, HeaderProcessBarConsecutiveText, HeaderProcessBarContainer, XMarkIcon
} from './styled'

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
                            src={
                                "https://d35aaqx5ub95lt.cloudfront.net/images/4af31393cf9dee6fd35c07fc7155d404.svg"
                            }
                        />
                    </HeaderCancelBtn>
                    <HeaderProcessBarContainer>
                        <HeaderProcessBarConsecutiveText>2 lần liên tiếp</HeaderProcessBarConsecutiveText>
                        <HeaderProcessBar percentage={99}/>
                    </HeaderProcessBarContainer>
                </HeaderLayout>
            </HeaderContainer>
            <div>body</div>
            <div>footer</div>
        </AssignmentContainer>

    </>
}

export default AssigmentWrapper
