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

const Chat = () => {

    const n = 20; // Số phần tử muốn tạo
    const arr = Array.from({ length: n }, (_, index) => index);

    return (
        <ChatContainer>
            <ChatContentContainer>
                <IntroContainer>
                    <IntroLayout>
                        <img src={logoIcon} width={70}/>
                        <IntroText>Tôi có thể giúp gì cho bạn ?</IntroText>
                    </IntroLayout>
                </IntroContainer>
                {/*<ChatContentLayout>*/}
                {/*    {*/}
                {/*        arr.map((item, index) => {*/}
                {/*            if (index % 2 === 0) {*/}
                {/*                return (*/}
                {/*                    <ChatRowContainer key={index}>*/}
                {/*                        <ChatRowLayout>*/}
                {/*                            <UserNameChat>*/}
                {/*                                <img src={userAvatar}/>*/}
                {/*                                <span>Bạn</span>*/}
                {/*                            </UserNameChat>*/}
                {/*                            <ContentChat>*/}
                {/*                                Thì hiện tại tiếp diễn là gì ?*/}
                {/*                            </ContentChat>*/}
                {/*                        </ChatRowLayout>*/}
                {/*                    </ChatRowContainer>*/}
                {/*                )*/}
                {/*            }*/}
                {/*            else {*/}
                {/*                return (*/}
                {/*                    <ChatRowContainer key={index}>*/}
                {/*                        <ChatRowLayout>*/}
                {/*                            <UserNameChat>*/}
                {/*                                <img src={assistantIcon}/>*/}
                {/*                                <span>Trợ lý</span>*/}
                {/*                            </UserNameChat>*/}
                {/*                            <ContentChat>*/}
                {/*                                Thì hiện tại tiếp diễn là gì ?*/}
                {/*                            </ContentChat>*/}
                {/*                        </ChatRowLayout>*/}
                {/*                    </ChatRowContainer>*/}
                {/*                )*/}
                {/*            }*/}
                {/*        })*/}
                {/*    }*/}
                {/*</ChatContentLayout>*/}
            </ChatContentContainer>
            <ChatInputContainer>
                <ChatInputLayout>
                    <ChatInput
                        placeholder="Câu hỏi của bạn là gì ...."
                    />
                    <BtnContainer>
                        <OptionAnswer
                            no={1}
                            isShowNo={false}
                            content={<img src={sendIcon} />}
                        />
                    </BtnContainer>
                </ChatInputLayout>
            </ChatInputContainer>
        </ChatContainer>
    )

}

export default Chat