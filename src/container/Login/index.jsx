import {
    ButtonRedirectContainer,
    Input,
    InputLayout,
    LoginContainer,
    LoginLayout,
    Title,
    TextRedirectContainer,
    PasswordIconContainer,
    PasswordIconImg
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import {Link} from "react-router-dom";
import {showPasswordIcon, unShowPasswordIcon} from "../../constants/icons";
import {useState} from "react";

const Login = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)


    return (
        <LoginContainer>
            <LoginLayout>
                <Title>Đăng nhập</Title>
                <InputLayout>
                    <Input placeholder="Nhập email"/>
                    <div style={{position: "relative"}}>
                        <Input placeholder="Nhập mật khẩu" type={isShowPassword ? "text" : "password"} />
                        <PasswordIconContainer
                            onClick={() => setIsShowPassword(prev => !prev)}
                        >
                            <PasswordIconImg
                                src={
                                    isShowPassword ?
                                        unShowPasswordIcon :
                                        showPasswordIcon
                                }
                            />
                        </PasswordIconContainer>
                    </div>
                    <OptionAnswer
                        no={1} isShowNo={false}
                        content={
                            <span
                                style={
                                    {
                                        color: "#ffffff",
                                        fontWeight: 700
                                    }
                                }
                            >
                                ĐĂNG NHẬP
                            </span>
                        }
                        defaultBgc='28, 176, 246'
                        defaultBorderColor='24, 153, 214'
                        defaultHoverBgc={'29,190,253'}
                    />
                    <TextRedirectContainer>
                        <span>Bạn chưa có tài khoản? </span>
                        <Link
                            to="/signup"
                            style={
                                {
                                    fontWeight: 700,
                                    color: "rgb(28,176,246)"
                                }
                            }
                        >
                            ĐĂNG KÝ
                        </Link>
                    </TextRedirectContainer>
                </InputLayout>
            </LoginLayout>
            <ButtonRedirectContainer>
                <Link to="/signup">
                    <OptionAnswer
                        no={1}
                        isShowNo={false}
                        content={
                            <span
                                style={
                                    {
                                        fontWeight: 700,
                                        color: "rgb(28,176,246)"
                                    }
                                }
                            >
                            ĐĂNG KÝ
                        </span>
                        }
                    />
                </Link>
            </ButtonRedirectContainer>
        </LoginContainer>
    )
}

export default Login
