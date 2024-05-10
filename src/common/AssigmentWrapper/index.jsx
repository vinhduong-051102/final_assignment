import {
  AssignmentContainer,
  BodyContainer,
  HeaderCancelBtn,
  HeaderContainer,
  HeaderLayout,
  HeaderProcessBar,
  HeaderProcessBarConsecutiveText,
  HeaderProcessBarContainer,
  XMarkIcon,
} from './styled';
import { xIcon } from '../../constants/icons';
import Footer from './components/Footer';
import ListenAndChoose from '../../container/ListenAndChoose';
import ChooseAnswerByMeaning from '../../container/ChooseAnswerByMeaning';
import ChoosePair from '../../container/ChoosePair';
import DragTag from '../../container/DragTag';
import SpeakAssigment from '../../container/SpeakAssigment';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from './actions';
import * as selectors from './assigmentSlice';
import { englishWordsWithMeanings } from '../../constants/constants';

const getRandomItems = (arr, input, numItems) => {
  const result = [];
  const inputSet = new Set(input);

  while (result.length < numItems) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];

    if (!inputSet.has(randomItem)) {
      result.push(randomItem);
      inputSet.add(randomItem);
    }
  }

  return result;
};

const AssigmentWrapper = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const listWord = useSelector(selectors.selectListWord);
  const [listen, setListen] = useState([]);

  console.log(listen);

  // dữ liệu cho header
  // #Tiến độ
  const process = 60;
  // #Số lần đúng liên tục
  const consecutiveCorrectAnswers = 0;

  // Lấy URL hiện tại
  const urlParams = new URLSearchParams(window.location.search);

  // Lấy giá trị của tham số tìm kiếm có tên là 'paramName'
  const type = urlParams.get('type');
  const id = urlParams.get('lessonId');
  const index = urlParams.get('index');

  useEffect(() => {
    if (index && listWord.length) {
      if (type === 'listen') {
        setListen(() => {
          return [
            ...getRandomItems(
              englishWordsWithMeanings,
              [
                {
                  vocabulary: listWord[+index]?.vocabulary,
                  meaning: listWord[+index]?.meaning,
                },
              ],
              3
            ),
            {
              vocabulary: listWord[+index]?.vocabulary,
              meaning: listWord[+index]?.meaning,
            },
          ];
        });
      } else if (type === 'speak') {
      } else if (type === 'read') {
      } else {
      }
    }
  }, [type, index, listWord]);

  useEffect(() => {
    if (id) {
      dispatch(actions.getListWord({ lessonId: +id }));
    }
  }, [id]);

  return (
    <>
      <AssignmentContainer>
        <HeaderContainer>
          <HeaderLayout>
            <HeaderCancelBtn>
              <XMarkIcon src={xIcon} />
            </HeaderCancelBtn>
            <HeaderProcessBarContainer>
              <HeaderProcessBarConsecutiveText>
                2 lần liên tiếp
              </HeaderProcessBarConsecutiveText>
              <HeaderProcessBar percentage={process} />
            </HeaderProcessBarContainer>
          </HeaderLayout>
        </HeaderContainer>
        <BodyContainer>
          {/*<ListenAndChoose onSelect={() => {}} questions={[{content: 1, no: 1}, {content: 1, no: 2}, {content: 1, no: 2}, {content: 1, no: 2}]}/>*/}
          {/*<ChooseAnswerByMeaning/>*/}
          <ChoosePair />
          {/*<DragTag/>*/}
          {/*<SpeakAssigment/>*/}
        </BodyContainer>
        <Footer statusCode={2} answer={'answer'} comment={'comment'} />
      </AssignmentContainer>
    </>
  );
};

export default AssigmentWrapper;
