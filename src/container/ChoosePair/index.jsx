import { AssigmentContainer, AssignmentPrompt } from "../commonStyled";
import {AssigmentContentContainer, AssigmentContentLayout} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import {useEffect, useState} from "react";

const ChoosePair = () => {
    // logic chuyển trạng thái của các đáp án
    // TH1: Chưa chọn gì thì các nút ở trạng thái cơ bản
    // TH2: Chọn 1 nút thì nút đó ở trạng thái selected
    // TH3: Chọn một cặp từ sai, nút sẽ chuyển sang trạng thái wrong sau 1 giây chuyển về trạng thái cơ bản
    // TH4: CHọn 1 cặp từ đúng, nút sẽ chuyển sang trạng thái right sau 1 giây chuyển sang disabled

    // Nguyên tắc: Chỉ các nút ở trạng thái cơ bản mới có thể ấn được
    // Nút đang selected mà chọn lại thì trở lại trạng thái cơ bản

    const [vocabularySelected, setVocabularySelected] = useState(null)
    const [meaningSelected, setMeaningSelected] = useState(null)
    const [listStatusAnswer, setListStatusAnswer] = useState(
        [
            {
                no: 1,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 2,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 3,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 4,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 5,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 6,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 7,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
            {
                no: 8,
                isSelected: false,
                isWrong: false,
                isRight: false,
                isDisabled: false,
            },
        ]
    )


    const listAnswerData = ["1", "2", "3", "4", "5", "6", "7", "8"]

    const handleClickBtn = (no) => {
        const index = no - 1
        const isMeaning = no <= 4
        // Các answer có no <= 4 là meaning còn lại là vocabulary
        if (isMeaning) {
            setMeaningSelected(no)
        } else {
            setVocabularySelected(no)
        }
        if (listStatusAnswer[index].isSelected) {
            setListStatusAnswer(prev => {
                return prev.map(item => {
                    if (item.no === no) {
                        return { ...item, isSelected: false };
                    }
                    return item;
                });
            })
        }
        else {
            setListStatusAnswer(prev => {
                if (isMeaning) {
                    return [
                        ...prev.slice(0, 4)
                            .map(item => ({ ...item, isSelected: false }))
                            .map(item => {
                                if (item.no === no) {
                                    return { ...item, isSelected: true };
                                }
                                return item;
                            }),
                        ...prev.slice(4),
                    ]
                }
                else {
                    return [
                        ...prev.slice(0, 4),
                        ...prev.slice(4)
                            .map(item => ({ ...item, isSelected: false }))
                            .map(item => {
                                if (item.no === no) {
                                    return { ...item, isSelected: true };
                                }
                                return item;
                            }),
                    ]
                }
            })
        }
    }

    useEffect(() => {
        if (vocabularySelected && meaningSelected) {
            // Gọi API check kết quả
            // Nếu đúng thì disabled 2 nút
            // Nếu sai thì chuyển về trạng thái cơ bản
            // Dù đúng hay sai đều setState cho vocabularySelected và meaningSelected thành null
        }
    }, [vocabularySelected, meaningSelected])

    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Chọn cặp từ
            </AssignmentPrompt>
            <AssigmentContentContainer>
                <AssigmentContentLayout>
                    {listAnswerData.map((answer, index) => {
                        return (
                            <OptionAnswer
                                no={index + 1}
                                key={index}
                                content={answer}
                                isDisabled={listStatusAnswer[index].isDisabled}
                                isRight={listStatusAnswer[index].isRight}
                                isWrong={listStatusAnswer[index].isWrong}
                                isSelected={listStatusAnswer[index].isSelected}
                                onClick={handleClickBtn}
                            />
                        );
                    })}
                </AssigmentContentLayout>
            </AssigmentContentContainer>
        </AssigmentContainer>
    )
}

export default ChoosePair
