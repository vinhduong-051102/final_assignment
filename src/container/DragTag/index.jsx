import {
    AssigmentContainer,
    AssignmentPrompt
} from "../commonStyled";
import {
    AnswerContainer,
    AnswerInputContainer,
    AnswerInputRow,
    AnswerLayoutPC,
    AnswerTagContainer,
    AnswerTagLayout,
    AssigmentContentLayout,
    AssigmentQuestionContainer,
    AssigmentQuestionImgContainer,
    AssigmentQuestionLayout,
    AssigmentQuestionTextContainer,
    QuestionSpeakerBtn,
    QuestionSpeakerIconContainer,
    QuestionText,
    QuestionTextSvgContainer,
    SpeakerImg,
    AnswerLayoutOther,
    AnswerTextarea,
    OptionAnswer
} from "./styled";
import character5 from "../../assets/character5.png";
import resourceTalk from "../../utils/svg/resourse_talk.svg";
import speakerSvg from "../../utils/svg/speaker_question.svg"
import {useState, useRef, useEffect} from "react";

import { DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";
import {DROPPABLE_ANSWER_ID, DROPPABLE_FIRST_ROW_ID, DROPPABLE_SECOND_ROW_ID} from "./constants";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

const DragTag = () => {
    const answerInputContainerRef = useRef(null)
    const [items, setItems] = useState([
        {
            no: '1',
            content: "Bạn 1"
        },
        {
            no: '2',
            content: "có 2"
        },
        {
            no: '3',
            content: "khoẻ 3"
        },
        {
            no: '4',
            content: "không 4"
        },
        {
            no: '5',
            content: "không 5"
        },
        {
            no: '6',
            content: "không 6"
        },
        {
            no: '7',
            content: "không 7"
        },
        {
            no: '8',
            content: "không 8"
        },
        {
            no: '9',
            content: "không 9"
        },

    ])

    // Danh sách tag ở dòng 1
    const [listFirstRowTag, setListFirstRowTag] = useState([])

    // Danh sách tag ở dòng 2
    const [listSecondRowTag, setListSecondRowTag] = useState([])

    // Chiều rộng của thẻ chứa
    const [containerWidth, setContainerWidth] = useState(0)

    const getList = id => {
        if (id === DROPPABLE_ANSWER_ID) {
            return items
        }
        else if (id === DROPPABLE_FIRST_ROW_ID) {
            return listFirstRowTag
        }
        else {
            return listSecondRowTag
        }
    };


    const move = (
        source,
        destination,
        droppableSourceItemIndex,
        droppableDestinationItemIndex,
        droppableSourceId,
        droppableDestinationId

    ) => {
        const sourceClone = Array.from(source);
        const destClone = Array.from(destination);
        const [removed] = sourceClone.splice(droppableSourceItemIndex, 1);
        destClone.splice(droppableDestinationItemIndex, 0, removed);

        const result = {};
        result[droppableSourceId] = sourceClone;
        result[droppableDestinationId] = destClone;

        return result;
    };

    const onDragEnd = result => {
        const {source, destination} = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        if (source.droppableId === destination.droppableId) {
            const items = reorder(
                getList(source.droppableId),
                source.index,
                destination.index
            );

            if (source.droppableId === DROPPABLE_FIRST_ROW_ID) {
                setListFirstRowTag(items)
            } else if (source.droppableId === DROPPABLE_SECOND_ROW_ID) {
                setListSecondRowTag(items)
            } else {
                setItems(items)
            }
        }

        else {
            const listItemFirstRow = [...listFirstRowTag]
            // Kiểm tra sức chứa của container
            let totalItemFirstRowWidth = 0
            for (let i = 0; i < listItemFirstRow.length; i++) {
                const item = listItemFirstRow[i]
                const element =
                    document.getElementById(`${item.no}`)
                if (element) {
                    totalItemFirstRowWidth += element.offsetWidth
                }
            }
            if (
                source.droppableId === DROPPABLE_ANSWER_ID &&
                destination.droppableId === DROPPABLE_FIRST_ROW_ID
            ) {
                const elementDragged =
                    document.getElementById(`${items[source.index].no}`)
                const isFull =
                    totalItemFirstRowWidth +
                    (elementDragged ? elementDragged.offsetWidth : 0) >
                    containerWidth
                answerToFirst(
                    source,
                    destination,
                    isFull,
                )
            }
            else if (
                source.droppableId === DROPPABLE_ANSWER_ID &&
                destination.droppableId === DROPPABLE_SECOND_ROW_ID
            ) {
                const elementDragged =
                    document.getElementById(`${items[source.index].no}`)
                const isFull =
                    totalItemFirstRowWidth +
                    (elementDragged ? elementDragged.offsetWidth : 0) >
                    containerWidth
                answerToSecond(
                    source,
                    destination,
                    isFull,
                )
            }
            else if (
                source.droppableId === DROPPABLE_FIRST_ROW_ID &&
                destination.droppableId === DROPPABLE_SECOND_ROW_ID
            ) {
                const elementDragged =
                    document.getElementById(`${listFirstRowTag[source.index].no}`)
                const isFull =
                    totalItemFirstRowWidth +
                    (elementDragged ? elementDragged.offsetWidth : 0) >
                    containerWidth
                firstToSecond(
                    source,
                    destination,
                    isFull,
                )
            }
        }

    };

    const answerToFirst = (
        source,
        destination,
        isFull,
    ) => {
        if (isFull) {
            let isFullUpdate = false
            let totalWidth = 0
            const elementDragged =
                document.getElementById(`${items[source.index].no}`)
            const cloneArr = [...listFirstRowTag]
            cloneArr.splice(destination.index, 0, items[source.index])
            for (let i = 0; i < cloneArr.length; i++) {
                if (!isFullUpdate) {
                    const item = listFirstRowTag[i]
                    const element =
                        document.getElementById(`${item.no}`)
                    if (element) {
                        totalWidth += element.offsetWidth
                        isFullUpdate =
                            totalWidth +
                            (elementDragged ? elementDragged.offsetWidth : 0) >
                            containerWidth
                    }
                }
                else {
                    const result = move(
                        items,
                        listFirstRowTag,
                        source.index,
                        destination.index,
                        source.droppableId,
                        destination.droppableId
                    )
                    const arr = result[DROPPABLE_FIRST_ROW_ID]
                    const arr1 = arr.slice(0, i)
                    const arr2 = arr.slice(i)
                    setListFirstRowTag(arr1)
                    setListSecondRowTag(prev => [...arr2, ...prev])
                    setItems(result[DROPPABLE_ANSWER_ID])
                    break
                }
            }
        }
        else {
            const result = move(
                items,
                listFirstRowTag,
                source.index,
                destination.index,
                source.droppableId,
                destination.droppableId
            )
            setListFirstRowTag(result[destination.droppableId])
            setItems(result[source.droppableId])
        }
    }

    const answerToSecond = (
        source,
        destination,
        isFull,
    ) => {
        if (isFull) {
            const result = move(
                items,
                listSecondRowTag,
                source.index,
                destination.index,
                source.droppableId,
                destination.droppableId
            )
            setItems(result[DROPPABLE_ANSWER_ID])
            setListSecondRowTag(result[DROPPABLE_SECOND_ROW_ID])
        }
        else {
            const result = move(
                items,
                listSecondRowTag,
                source.index,
                destination.index,
                source.droppableId,
                destination.droppableId
            )
            setListFirstRowTag(prev => [...prev, items[source.index]])
            setItems(result[DROPPABLE_ANSWER_ID])
        }
    }

    const firstToAnswer = () => {

    }

    const secondToAnswer = () => {

    }

    const firstToSecond = (
        source,
        destination,
        isFull,
    ) => {
        if (isFull) {
            const result = move(
                listFirstRowTag,
                listSecondRowTag,
                source.index,
                destination.index,
                source.droppableId,
                destination.droppableId
            )
            let isFullUpdate = false
            let totalWidth = 0
            const cloneArr = [...listFirstRowTag]
            cloneArr.splice(source.index, 1)
            for (let i = 0; i < cloneArr.length; i++) {
                const item = cloneArr[i]
                const element =
                    document.getElementById(`${item.no}`)
                if (element) {
                    totalWidth += element.offsetWidth
                }
            }
            const storeIndex = []
            for (let i = 0; i <= destination.index; i++) {
                const item = result[DROPPABLE_SECOND_ROW_ID][i]
                const element =
                    document.getElementById(`${item.no}`)
                if (element) {
                    totalWidth += element.offsetWidth
                    isFullUpdate = totalWidth > containerWidth
                    if (isFullUpdate) {
                        break
                    }
                    else {
                        storeIndex.push(i)
                    }
                }
            }

            setListFirstRowTag(
                () => [
                        ...result[DROPPABLE_FIRST_ROW_ID],
                        ...storeIndex
                            .map(
                                index =>
                                    result[DROPPABLE_SECOND_ROW_ID][index]
                            )

                    ]
            )
            setListSecondRowTag(
                () => [
                    ...result[DROPPABLE_SECOND_ROW_ID]
                        .slice(
                            storeIndex[storeIndex.length - 1] + 1
                        )
                ]
            )
        }

    }

    const secondToFirst = (
        source,
        destination,
        isFull,
    ) => {

    }

    useEffect(() => {
        setContainerWidth(answerInputContainerRef.current.offsetWidth - 150)
    }, [])

    return (
        <AssigmentContainer>
            <AssignmentPrompt>
                Viết lại bằng Tiếng Việt
            </AssignmentPrompt>
            <AssigmentContentLayout>
                <AssigmentQuestionContainer>
                    <AssigmentQuestionLayout>
                        <AssigmentQuestionImgContainer>
                            <img src={character5}/>
                        </AssigmentQuestionImgContainer>
                        <AssigmentQuestionTextContainer>
                            <QuestionTextSvgContainer>
                                <img src={resourceTalk}/>
                            </QuestionTextSvgContainer>
                            <div
                                style={{
                                    display: 'flex',
                                    alignItems: 'center'
                                }}
                            >
                                <QuestionSpeakerIconContainer>
                                    <QuestionSpeakerBtn>
                                        <SpeakerImg src={speakerSvg}/>
                                    </QuestionSpeakerBtn>
                                </QuestionSpeakerIconContainer>
                                <QuestionText>How are you</QuestionText>
                            </div>
                        </AssigmentQuestionTextContainer>
                    </AssigmentQuestionLayout>
                </AssigmentQuestionContainer>
                <AnswerContainer>
                    <AnswerLayoutPC>
                        <DragDropContext
                            onDragEnd={onDragEnd}
                        >
                            <AnswerInputContainer
                                ref={answerInputContainerRef}
                            >
                                <Droppable droppableId={DROPPABLE_FIRST_ROW_ID} direction="horizontal">
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                            >
                                                <AnswerInputRow>
                                                    {listFirstRowTag.map((item, index) => (
                                                        <Draggable
                                                            key={item.no}
                                                            draggableId={item.no}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) =>
                                                                (
                                                                    <OptionAnswer
                                                                        ref={provided.innerRef}
                                                                        {...provided.draggableProps}
                                                                        {...provided.dragHandleProps}
                                                                        className="answer-selected"
                                                                        id={item.no}
                                                                    >
                                                                        {item.content}
                                                                    </OptionAnswer>
                                                                )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </AnswerInputRow>
                                            </div>

                                        );
                                    }}
                                </Droppable>
                                <Droppable droppableId={DROPPABLE_SECOND_ROW_ID} direction="horizontal">
                                    {(provided, snapshot) => {
                                        return (
                                            <div
                                                ref={provided.innerRef}
                                            >
                                                <AnswerInputRow>
                                                    {listSecondRowTag.map((item, index) => (
                                                        <Draggable
                                                            key={item.no}
                                                            draggableId={item.no}
                                                            index={index}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <OptionAnswer
                                                                    ref={provided.innerRef}
                                                                    {...provided.draggableProps}
                                                                    {...provided.dragHandleProps}
                                                                    className="answer-selected"
                                                                    id={item.no}

                                                                >
                                                                    {item.content}
                                                                </OptionAnswer>
                                                            )}
                                                        </Draggable>
                                                    ))}
                                                    {provided.placeholder}
                                                </AnswerInputRow>
                                            </div>

                                        );
                                    }}
                                </Droppable>
                            </AnswerInputContainer>
                            <AnswerTagContainer>
                                <AnswerTagLayout>
                                    <Droppable droppableId={DROPPABLE_ANSWER_ID} direction="horizontal">
                                        {(provided, snapshot) => (
                                            <AnswerTagLayout
                                                ref={provided.innerRef}
                                            >
                                                {items.map((item, index) => (
                                                    <Draggable
                                                        key={item.no}
                                                        draggableId={item.no}
                                                        index={index}>
                                                        {(provided, snapshot) => (
                                                            <OptionAnswer
                                                                ref={provided.innerRef}
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                id={item.no}
                                                            >
                                                                {item.content}
                                                            </OptionAnswer>
                                                        )}
                                                    </Draggable>
                                                ))}
                                                {provided.placeholder}
                                            </AnswerTagLayout>
                                        )}
                                    </Droppable>
                                </AnswerTagLayout>
                            </AnswerTagContainer>
                        </DragDropContext>
                    </AnswerLayoutPC>
                    <AnswerLayoutOther>
                        <AnswerTextarea placeholder="Nhập câu trả lời của bạn ..."/>
                    </AnswerLayoutOther>
                </AnswerContainer>
            </AssigmentContentLayout>

        </AssigmentContainer>
    )
}

export default DragTag
