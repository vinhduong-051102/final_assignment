import {
    Input,
    InputLayout,
    RegisterContainer,
    RegisterLayout,
    Title,
    ButtonRedirectContainer,
    TextRedirectContainer,
    PasswordIconContainer,
    PasswordIconImg
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import {Link} from "react-router-dom";
import { unShowPasswordIcon, showPasswordIcon } from "../../constants/icons"
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import * as selectors from "./registerSlice"
import * as actions from "./actions"

const Register = () => {
    const dispatch = useDispatch()

    const isLoading = useSelector(selectors.selectIsLoading)

    const message = useSelector(selectors.selectMessage)

    const [isShowPassword, setIsShowPassword] = useState(false)

    const [userName, setUserName] = useState("");

    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("");

    const handleSignup = () => {
        dispatch(actions.signup({userName, email, password}))
    }

    useEffect(() => {
        if (message) {
            alert(message)
            dispatch(actions.resetRedux())
        }
    }, [message, dispatch])

    return (
        <RegisterContainer>
            <RegisterLayout>
                <Title>Tạo hồ sơ</Title>
                <InputLayout>
                    <Input placeholder="Nhập tên" value={userName} onChange={e => setUserName(e.target.value)}/>
                    <Input placeholder="Nhập email" value={email} onChange={e => setEmail(e.target.value)}/>
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
                        onClick={handleSignup}
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
                                ĐĂNG KÝ
                            </span>
                        }
                        defaultBgc='28, 176, 246'
                        defaultBorderColor='24, 153, 214'
                        defaultHoverBgc={'29,190,253'}
                    />
                    <TextRedirectContainer>
                        <span>Bạn đã có tài khoản? </span>
                        <Link
                            to="/signin"
                            style={
                                {
                                    fontWeight: 700,
                                    color: "rgb(28,176,246)"
                                }
                            }
                        >
                            ĐĂNG NHẬP
                        </Link>
                    </TextRedirectContainer>
                </InputLayout>
            </RegisterLayout>
            <ButtonRedirectContainer>
                <Link to="/signin">
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
                            ĐĂNG NHẬP
                        </span>
                        }
                    />
                </Link>
            </ButtonRedirectContainer>
        </RegisterContainer>
    )
}

export default Register
