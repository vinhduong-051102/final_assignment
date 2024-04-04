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

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

/**
 * Moves an item from one list to another list.
 */
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

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
        if (id === "droppable") {
            return items
        }
        else if (id === "droppable2") {
            return listFirstRowTag
        }
        else {
            return listSecondRowTag
        }
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

            if (source.droppableId === 'droppable2') {
                setListFirstRowTag(items)
            } else if (source.droppableId === 'droppable3') {
                setListSecondRowTag(items)
            } else {
                setItems(items)
            }
        }

            // TH: Chuyển từ droppableId sang droppable2
        /*
            Nếu container của droppable2 đầy thì
            chuyển thành đẩy vào droppable3, còn lại thì
            chuyển vào droppable2 như bình thường
         */
        else if (
            source.droppableId === 'droppable' &&
            (
                destination.droppableId === 'droppable2' ||
                destination.droppableId === 'droppable3'
            )
        ) {
            // Kiểm tra xem container đã đầy chưa
            // Tính tổng độ rộng của các item đã có trong droppable2
            const listElement =
                document.querySelectorAll('.answer-selected')
            let totalWidth = 0
            for (let j = 0; j < listElement.length; j++) {
                totalWidth += listElement[j].offsetWidth
            }
            // Kiểm tra tổng độ rộng của các item với độ rộng của container
            // Nếu chưa thì đẩy item mới vào droppable2
            // Nếu rồi thì đẩy vào droppable3
            const isFull = totalWidth > containerWidth - 100
            const result = move(
                getList(source.droppableId),
                getList(
                    isFull ?
                        "droppable3" :
                        "droppable2"
                ),
                source,
                destination
            );
            setItems(result["droppable"])
            setListFirstRowTag(
                result[
                    isFull ?
                        "droppable3" :
                        "droppable2"
                    ]
            )
        }
        // TH: Chuyển từ droppable3 sang droppable
        if (
            source.droppableId === 'droppable3' &&
            destination.droppableId === 'droppable'
        ) {
            // Nếu droppable3 có item
            /*
                1.   Tính độ rộng của container khi không có item bị chuyển
                1.1  Xác định item bị chuyển thông qua "source.index"
                1.2  Xác định độ rộng của item bị chuyển
                1.3  Tính lại đọ rộng của container
                2.   Tính độ rộng của item đầu tiên của droppable3
                3.   Kiểm tra xem nếu cộng độ rộng của container sau khi bớt item với
                     độ rộng của item đầu tiên, có vượt quá sức chứa của container không
                3.1. Nếu không thì chuyển phần tử đầu tiên của droppable3 sang
                     vị trí cuối của droppable2
                3.2. Nếu có vượt thì không chuyển phần tử đầu của droppable3 đi
                4.   Chuyển item được chọn từ droppable3 sang droppable
                4.1  Cập nhập lại danh sách item ở droppable2
                4.2  Cập nhập lại danh sách item ở droppable3 (Nếu có)
                4.3  Cập nhập lại danh sách item ở droppable
             */
            if (listSecondRowTag.length > 0) {
                // 1
                // 1.1
                const itemIsDragged = listFirstRowTag[+source.index]
                const element =
                    document.getElementById(`${itemIsDragged.no}`)
                if (element) {
                    // 1.2
                    const elementWidth = element.offsetWidth
                    // 1.3
                    const newContainerWidth = containerWidth - elementWidth
                    // 2
                    const firstItemInSecondRow = listSecondRowTag[0]
                    const element2 =
                        document.getElementById(`${firstItemInSecondRow.no}`)
                    if (element2) {
                        const firstElementSecondRowWidth = element2.offsetWidth
                        // 3
                        // 3.1
                        if (
                            newContainerWidth + firstElementSecondRowWidth
                            < containerWidth - 100
                        ) {
                            // 4
                            const result = move(
                                getList(source.droppableId),
                                getList(destination.droppableId),
                                source,
                                destination
                            );
                            // 4.3
                            setItems(result["droppable"])
                            // 4.1
                            setListFirstRowTag(() => [...result["droppable2"], firstItemInSecondRow])
                            // 4.2
                            setListSecondRowTag(prev => [...prev.slice(1)])
                        }
                        // 3.2
                        else {
                            // 4
                            const result = move(
                                getList(source.droppableId),
                                getList(destination.droppableId),
                                source,
                                destination
                            );
                            // 4.3
                            setItems(result["droppable"])
                            // 4.1
                            setListFirstRowTag(result["droppable2"])
                        }
                    }
                }

            }
            // Nếu droppable3 không có item
            /*
                Chuyển như bình thường
            */
            else {
                // 4
                const result = move(
                    getList(source.droppableId),
                    getList(destination.droppableId),
                    source,
                    destination
                );
                // 4.3
                setItems(result["droppable"])
                // 4.1
                setListFirstRowTag(result["droppable2"])
            }
        }
        // TH: Chuyển từ droppable sang droppable3
        /*
            1. Cập nhập list item ở droppable
            2. Cập nhập list item ở droppable3
         */
        else if (
            source.droppableId === 'droppable' &&
            destination.droppableId === 'droppable3'
        ) {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );
            // 1
            setItems(result["droppable"])
            // 2
            setListFirstRowTag(result["droppable3"])
        }
        // TH:
    };


    useEffect(() => {
        setContainerWidth(answerInputContainerRef.current.offsetWidth)
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
                                <Droppable droppableId="droppable2" direction="horizontal">
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
                                    <Droppable droppableId="droppable" direction="horizontal">
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
