import {
    CreateLessonContainer,
    CreateLessonHeader,
    CreateLessonLayout,
    CreateTitleContainer,
    CreateTitleLayout,
    HeaderTitle,
    InputTitle,
    ListVocabularyContainer,
    ListVocabularyLayout,
    TextareaDescribe,
    VocabularyBody,
    VocabularyContainer,
    VocabularyHeader,
    VocabularyLayout
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";

const CreateLesson = () => {

    const n = 1; // Số phần tử muốn tạo
    const arr = Array.from({ length: n }, (_, index) => index);

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
                        {arr.map((item, index) => {
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
                                            />
                                        </VocabularyHeader>
                                        <VocabularyBody>
                                            <InputTitle placeholder="Nhập thuật ngữ" />
                                            <InputTitle placeholder="Nhập định nghĩa" />
                                        </VocabularyBody>
                                    </VocabularyLayout>
                                </VocabularyContainer>
                            )
                        })}
                    </ListVocabularyLayout>
                </ListVocabularyContainer>
                <OptionAnswer
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
