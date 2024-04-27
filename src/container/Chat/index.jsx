import {
    BtnContainer,
    ChatContainer,
    ChatContentContainer,
    ChatContentLayout,
    ChatInput,
    ChatInputContainer,
    ChatInputLayout,
    ChatRowContainer,
    ChatRowLayout,
    ContentChat,
    IntroContainer,
    IntroLayout,
    IntroText,
    UserNameChat,
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import sendIcon from "../../utils/svg/send_icon.svg"
import {assistantIcon, logoIcon, userAvatar} from "../../constants/icons";
import { useDispatch, useSelector } from "react-redux"
import * as selectors from "./chatSlice"
import * as actions from "./actions"
import {useState} from "react";

const Chat = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectors.selectIsLoading)

    const [question, setQuestion] = useState("")

    const n = 20; // Số phần tử muốn tạo
    const arr = Array.from({ length: n }, (_, index) => index);

    const handleInputQuestion = (e) => {
        setQuestion(e.target.value)
    }

    const handleSubmit = () => {
        dispatch(actions.chat(question))
    }

    return (
        <ChatContainer>
            <ChatContentContainer>
                {/*<IntroContainer>*/}
                {/*    <IntroLayout>*/}
                {/*        <img src={logoIcon} width={70}/>*/}
                {/*        <IntroText>Tôi có thể giúp gì cho bạn ?</IntroText>*/}
                {/*    </IntroLayout>*/}
                {/*</IntroContainer>*/}
                <ChatContentLayout>
                    {
                        arr.map((item, index) => {
                            if (index % 2 === 0) {
                                return (
                                    <ChatRowContainer key={index}>
                                        <ChatRowLayout>
                                            <UserNameChat>
                                                <img src={userAvatar}/>
                                                <span>Bạn</span>
                                            </UserNameChat>
                                            <ContentChat>
                                                Thì hiện tại tiếp diễn là gì ?
                                            </ContentChat>
                                        </ChatRowLayout>
                                    </ChatRowContainer>
                                )
                            }
                            else {
                                return (
                                    <ChatRowContainer key={index}>
                                        <ChatRowLayout>
                                            <UserNameChat>
                                                <img src={assistantIcon}/>
                                                <span>Trợ lý</span>
                                            </UserNameChat>
                                            <ContentChat>
                                                Thì hiện tại tiếp diễn là gì ?
                                            </ContentChat>
                                        </ChatRowLayout>
                                    </ChatRowContainer>
                                )
                            }
                        })
                    }
                </ChatContentLayout>
            </ChatContentContainer>
            <ChatInputContainer>
                <ChatInputLayout>
                    <ChatInput
                        placeholder="Câu hỏi của bạn là gì ...."
                        onChange={handleInputQuestion}
                    />
                    <BtnContainer>
                        <OptionAnswer
                            no={1}
                            isShowNo={false}
                            content={<img src={sendIcon} />}
                            onClick={handleSubmit}
                        />
                    </BtnContainer>
                </ChatInputLayout>
            </ChatInputContainer>
        </ChatContainer>
    )

}

export default Chat
