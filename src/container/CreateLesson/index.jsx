import {
    CreateLessonContainer,
    CreateLessonHeader,
    CreateLessonLayout,
    CreateTitleContainer,
    CreateTitleLayout,
    HeaderTitle,
    InputTitle,
    ListVocabularyContainer,
    ListVocabularyLayout, SuggestListContainer, SuggestRow,
    TextareaDescribe,
    VocabularyBody,
    VocabularyContainer,
    VocabularyHeader,
    VocabularyLayout
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import { useDispatch, useSelector } from "react-redux";
import {useEffect, useState} from "react";
import * as selectors from "./createLessonSlice"
import * as actions from "./actions"

const CreateLesson = () => {
    const dispatch = useDispatch()
    const isLoading = useSelector(selectors.selectIsLoading)
    const listSuggestWord = useSelector(selectors.selectListSuggestWord)
    const listSuggestMeaning = useSelector(selectors.selectListSuggestMeaning)

    const [listCard, setListCard] = useState([])
    const [indexItemSelected, setIndexItemSelected] = useState(null)

    const handleAddCard = () => {
        setListCard(prev => [...prev, {vocabulary: "", meaning: ""}])
    }

    const handleInputVocabulary = (value, index) => {
        setIndexItemSelected(index)
        setListCard(prev => {
            return prev.map((item, idx) => {
                if (idx === index) {
                    if (value) {
                        dispatch(actions.getSuggestWord(value))
                        return {vocabulary: value, meaning: item.meaning}
                    }
                    else {
                        dispatch(actions.clearSuggest())
                        return {vocabulary: value, meaning: ""}
                    }
                }
                else {
                    return item
                }
            })

        })
    }

    const handleInputMeaning = (value, index) => {
        setIndexItemSelected(index)
        setListCard(prev => {
            return prev.map((item, idx) => {
                if (idx === index) {
                    dispatch(actions.getSuggestMeaning(listCard[index]['vocabulary']))
                    return {vocabulary: item.vocabulary, meaning: value}
                }
                else {
                    return item
                }
            })

        })
    }

    const handleResetSuggest = (e) => {
        e.stopPropagation()
        setTimeout(() => {
            setIndexItemSelected(null)
            dispatch(actions.clearSuggest())
        }, 500)

    }

    const handleSelectIndex = (e, index, type) => {
        e.stopPropagation()
        setIndexItemSelected(index)
        const inputValue = listCard[index]['vocabulary']
        if (inputValue) {
            if (type === "vocabulary") {
                dispatch(actions.getSuggestWord(inputValue))
            }
            else {
                dispatch(actions.getSuggestMeaning(inputValue))
            }
        }
        else {
            dispatch(actions.getSuggestMeaning(inputValue))
        }
    }

    const handleClickSuggestRow = (word, index, type) => {
        setListCard(prev => {
            return prev.map((item, idx) => {
                if (idx === index) {
                    return {...item, [type]: word}
                }
                else {
                    return item
                }
            })

        })
    }

    const handleDeleteRow = index => {
        const isTrue = confirm(`Bạn có xác nhận xoá thẻ thứ ${index + 1} không ?`)
        if (isTrue) {
            setListCard(prev => {
                const cloneArr = [...prev]
                cloneArr.splice(index, 1)
                return cloneArr
            })
        }
    }

    return (
        <CreateLessonContainer>
            <CreateLessonHeader>
                <HeaderTitle>Tạo học phần mới</HeaderTitle>
                <OptionAnswer
                    no={1}
                    isShowNo={false}
                    content={<span style={{fontWeight: 700}}>Tạo</span>}
                />
            </CreateLessonHeader>
            <CreateLessonLayout>
                <CreateTitleContainer>
                    <CreateTitleLayout>
                        <InputTitle placeholder="Nhập tiêu đề" />
                        <TextareaDescribe placeholder="Thêm mô tả ..." />
                    </CreateTitleLayout>
                </CreateTitleContainer>
                <HeaderTitle>Danh sách từ vựng</HeaderTitle>
                <ListVocabularyContainer>
                    <ListVocabularyLayout>
                        {listCard.map((item, index) => {
                            return (
                                <VocabularyContainer key={index}>
                                    <VocabularyLayout>
                                        <VocabularyHeader>
                                            <span>{index + 1}</span>
                                            <OptionAnswer
                                                no={index + 1}
                                                isShowNo={false}
                                                content={
                                                    <span style={{fontWeight: 700}}>
                                                        Xoá
                                                    </span>
                                                }
                                                onClick={() => handleDeleteRow(index)}
                                            />
                                        </VocabularyHeader>
                                        <VocabularyBody>
                                            <div style={{position: "relative"}}>
                                                <InputTitle
                                                    value={item.vocabulary}
                                                    placeholder="Nhập thuật ngữ"
                                                    onChange={
                                                        e =>
                                                            handleInputVocabulary(
                                                                e.target.value,
                                                                index
                                                            )
                                                    }
                                                    onBlur={handleResetSuggest}
                                                    onFocus={(e) => handleSelectIndex(e, index, "vocabulary")}
                                                />
                                                <SuggestListContainer>
                                                    {
                                                        index === indexItemSelected && isLoading && (
                                                            <SuggestRow>
                                                                Đang tải từ gợi ý
                                                            </SuggestRow>
                                                        )
                                                    }
                                                    {
                                                        index === indexItemSelected && !isLoading && listSuggestWord.map((item, idx) => {
                                                            return (
                                                                <SuggestRow
                                                                    key={idx}
                                                                    onClick={() => handleClickSuggestRow(item, index, "vocabulary")}
                                                                >
                                                                    {item}
                                                                </SuggestRow>
                                                            )
                                                        })
                                                    }
                                                </SuggestListContainer>
                                            </div>
                                            <div style={{position: "relative"}}>
                                                <InputTitle
                                                    disabled={!item.vocabulary}
                                                    value={item.meaning}
                                                    placeholder="Nhập định nghĩa"
                                                    onChange={
                                                        e =>
                                                            handleInputMeaning(
                                                                e.target.value,
                                                                index
                                                            )
                                                    }
                                                    onBlur={handleResetSuggest}
                                                    onFocus={(e) => handleSelectIndex(e, index, "meaning")}
                                                />
                                                <SuggestListContainer>
                                                    {
                                                        index === indexItemSelected && isLoading && listSuggestWord.length === 0 && (
                                                            <SuggestRow>
                                                                Đang tải định nghĩa gợi ý
                                                            </SuggestRow>
                                                        )
                                                    }
                                                    {
                                                        index === indexItemSelected && !isLoading && listCard[index]["vocabulary"] && listSuggestMeaning.map((item, idx) => {
                                                            return (
                                                                <SuggestRow
                                                                    key={idx}
                                                                    onClick={() => handleClickSuggestRow(item, index, "meaning")}
                                                                >
                                                                    {item}
                                                                </SuggestRow>
                                                            )
                                                        })
                                                    }
                                                </SuggestListContainer>
                                            </div>

                                        </VocabularyBody>
                                    </VocabularyLayout>
                                </VocabularyContainer>
                            )
                        })}
                    </ListVocabularyLayout>
                </ListVocabularyContainer>
                <OptionAnswer
                    onClick={handleAddCard}
                    no={1}
                    isShowNo={false}
                    content={
                        <span style={{fontWeight: 700}}>Thêm thẻ</span>
                    }
                    defaultHeight="60px"
                />
            </CreateLessonLayout>
        </CreateLessonContainer>
    )
}

export default CreateLesson
