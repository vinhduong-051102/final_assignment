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
import { useState } from "react";

const Register = () => {

    const [isShowPassword, setIsShowPassword] = useState(false)

    return (
        <RegisterContainer>
            <RegisterLayout>
                <Title>Tạo hồ sơ</Title>
                <InputLayout>
                    <Input placeholder="Nhập tên"/>
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
