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
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as actions from "./actions"
import * as selectors from "./loginSlice"
import {useNavigate} from "react-router";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const isLoginSuccess = useSelector(selectors.selectIsLoginSuccess)
    const isLoading = useSelector(selectors.selectIsLoading)
    const message = useSelector(selectors.selectMessage)
    const [isShowPassword, setIsShowPassword] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSignin = () => {
        dispatch(actions.signin({email, password}))
    }

    useEffect(() => {
        if (message) {
            alert(message)
            dispatch(actions.resetRedux())
        }
        if (isLoginSuccess) {
            navigate("/")
        }
    }, [dispatch, message, isLoginSuccess])

    return (
        <LoginContainer>
            <LoginLayout>
                <Title>Đăng nhập</Title>
                <InputLayout>
                    <Input
                        placeholder="Nhập email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <div style={{position: "relative"}}>
                        <Input
                            placeholder="Nhập mật khẩu"
                            type={isShowPassword ? "text" : "password"}
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
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
                        onClick={handleSignin}
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
