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
import { useState } from "react";

import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd";

const getItems = (count, offset = 0) =>
    Array.from({ length: count }, (v, k) => k).map(k => ({
        no: `item-${k + offset}`,
        content: `item ${k + offset}`
    }));

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

    const [selected, setSelected] = useState(getItems(3))
    const [items, setItems] = useState(getItems(10, 3))

    const getList = id => {
        if (id === "droppable") {
            return items
        }
        return selected
    };

    const onDragEnd = result => {
        const { source, destination } = result;

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
                setSelected(items)
            }
            else {
                setItems(items)
            }

        } else {
            const result = move(
                getList(source.droppableId),
                getList(destination.droppableId),
                source,
                destination
            );
            setItems(result["droppable"])
            setSelected(result["droppable2"])
        }
    };
    return (
            <AssigmentContainer>
                <AssignmentPrompt>
                    Viết lại bằng Tiếng Việt
                </AssignmentPrompt>
                <AssigmentContentLayout>
                    <AssigmentQuestionContainer>
                        <AssigmentQuestionLayout>
                            <AssigmentQuestionImgContainer>
                                <img src={character5} />
                            </AssigmentQuestionImgContainer>
                            <AssigmentQuestionTextContainer>
                                <QuestionTextSvgContainer>
                                    <img src={resourceTalk} />
                                </QuestionTextSvgContainer>
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center'
                                    }}
                                >
                                    <QuestionSpeakerIconContainer>
                                        <QuestionSpeakerBtn>
                                            <SpeakerImg src={speakerSvg} />
                                        </QuestionSpeakerBtn>
                                    </QuestionSpeakerIconContainer>
                                    <QuestionText>How are you</QuestionText>
                                </div>
                            </AssigmentQuestionTextContainer>
                        </AssigmentQuestionLayout>
                    </AssigmentQuestionContainer>
                    <AnswerContainer>
                        <AnswerLayoutPC>
                            <DragDropContext onDragEnd={onDragEnd}>
                            <AnswerInputContainer>
                                    <Droppable droppableId="droppable2" direction="horizontal">
                                        {(provided, snapshot) => {
                                            return (
                                                <AnswerInputRow
                                                    ref={provided.innerRef}
                                                >
                                                    {selected.map((item, index) => (
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
                                                </AnswerInputRow>
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
