import {
    CheckBtnText,
    FooterCheckBtn,
    FooterCheckBtnWrapper,
    FooterContainer,
    FooterInfoTextContainer,
    FooterInfoWrapper,
    FooterLayout, FooterSkipBtn, FooterSkipBtnWrapper,
    FooterTickIcon,
    FooterTickIconContainer,
    InfoTextComment,
    InfoTextCorrectAnswer
} from "./styled";
import {tickIcon, wrongIcon} from "../../../../constants/icons";
import {
    colorCardinal,
    colorFireAnt, colorHare,
    colorOwl,
    colorSeaSponge, colorSnow, colorSwan,
    colorTreeFlog,
    colorWalkingFish
} from "../../../../constants/colors";

const Footer = ({ statusCode = 0, comment = '', answer = '' }) => {
    // Trạng thái 0: chưa làm gì
    // Trạng thái 1: trả lời đúng
    // Trạng thái 2: trả lời sai
    // Trạng thái 3: chờ kiểm tra
    const footerStatus = [
        // Trạng thái 0
        {
            isChecked: false,
            bgc: colorSnow,
            btnSkipBgc: colorSnow,
            btnSkipTextColor: colorHare,
            btnSkipBorderColor: colorSwan,
            btnSkipText: 'Bỏ qua',
            btnCheckBgc: colorSwan,
            btnCheckBorderColor: colorSwan,
            btnCheckTextColor: colorHare,
            btnCheckText: 'Kiểm tra',
            iconSrc: null,
            textInfoColor: null,
            isDisabledCheckBtn: true,
        },
        // Trạng thái 1
        {
            btnSkipText: null,
            isChecked: true,
            iconSrc: tickIcon,
            bgc: colorSeaSponge,
            textInfoColor: colorTreeFlog,
            btnCheckBgc: colorOwl,
            btnCheckBorderColor: colorTreeFlog,
            btnCheckTextColor: colorSnow,
            btnCheckText: 'Tiếp tục',
            btnSkipBgc: null,
            btnSkipTextColor: null,
            btnSkipBorderColor: null,
            isDisabledCheckBtn: false,

        },
        // Trạng thái 2
        {
            btnSkipText: null,
            isChecked: true,
            iconSrc: wrongIcon,
            bgc: colorWalkingFish,
            textInfoColor: colorFireAnt,
            btnCheckBgc: colorCardinal,
            btnCheckBorderColor: colorFireAnt,
            btnCheckTextColor: colorSnow,
            btnCheckText: 'Tiếp tục',
            btnSkipBgc: null,
            btnSkipTextColor: null,
            btnSkipBorderColor: null,
            isDisabledCheckBtn: false,

        },
        // Trạng thái 3
        {
            isChecked: false,
            bgc: colorSnow,
            btnSkipBgc: colorSnow,
            btnSkipTextColor: colorHare,
            btnSkipBorderColor: colorSwan,
            btnSkipText: 'Bỏ qua',
            btnCheckBgc: colorOwl,
            btnCheckBorderColor: colorTreeFlog,
            btnCheckTextColor: colorSnow,
            btnCheckText: 'Kiểm tra',
            iconSrc: null,
            textInfoColor: null,
            isDisabledCheckBtn: false,
        }
    ]
    return (
        <FooterContainer
            bgc={footerStatus[statusCode].bgc}
            isChecked={footerStatus[statusCode].isChecked}
        >
            <FooterLayout isChecked={footerStatus[statusCode].isChecked}>
                {
                    // Kiểm tra xem bài tập đã được kiểm tra hay chưa
                    footerStatus[statusCode].isChecked ? (
                        // Thông báo
                        <FooterInfoWrapper>
                            <FooterTickIconContainer>
                                <FooterTickIcon src={footerStatus[statusCode].iconSrc}/>
                            </FooterTickIconContainer>
                            <FooterInfoTextContainer
                                textInfoColor={footerStatus[statusCode].textInfoColor}
                            >
                                <InfoTextComment>{comment}</InfoTextComment>
                                <InfoTextCorrectAnswer>{answer}</InfoTextCorrectAnswer>
                            </FooterInfoTextContainer>
                        </FooterInfoWrapper>
                    ) : (
                        // Nút bỏ qua
                        <FooterSkipBtnWrapper>
                            <FooterSkipBtn
                                btnCheckBgc={footerStatus[statusCode].btnSkipBgc}
                                btnCheckBorderColor={footerStatus[statusCode].btnSkipBorderColor}
                            >
                                <CheckBtnText
                                    btnCheckTextColor={footerStatus[statusCode].btnSkipTextColor}
                                >
                                    {footerStatus[statusCode].btnSkipText}
                                </CheckBtnText>
                            </FooterSkipBtn>
                        </FooterSkipBtnWrapper>
                    )
                }

                <FooterCheckBtnWrapper>
                    <FooterCheckBtn
                        btnCheckBgc={footerStatus[statusCode].btnCheckBgc}
                        btnCheckBorderColor={footerStatus[statusCode].btnCheckBorderColor}
                        disabled={footerStatus[statusCode].isDisabledCheckBtn}
                    >
                        <CheckBtnText
                            btnCheckTextColor={footerStatus[statusCode].btnCheckTextColor}
                        >
                            {footerStatus[statusCode].btnCheckText}
                        </CheckBtnText>
                    </FooterCheckBtn>
                </FooterCheckBtnWrapper>
            </FooterLayout>
        </FooterContainer>
    )
}

export default Footer
