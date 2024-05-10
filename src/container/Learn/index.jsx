import {
  LearnBody,
  LearnContainer,
  LearnHeader,
  LearnLayout,
  LessonBody,
  LessonContainer,
  LessonDescription,
  LessonHeader,
  LessonLayout,
  LessonMenuItem,
  LessonTittle,
  ListLesson,
} from './styled';
import { useSelector, useDispatch } from 'react-redux';
import * as selectors from './learnSlice';
import * as actions from './actions';
import { useEffect } from 'react';
import {
  starIcon,
  tickWhiteIcon,
  bookGrayIcon,
  bookWhiteIcon,
} from '../../constants/icons';
import { Link } from 'react-router-dom';

const Learn = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectors.selectIsLoading);
  const listLesson = useSelector(selectors.selectListLesson);

  useEffect(() => {
    const getCookie = (name) => {
      let nameEQ = name + '=';
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1, cookie.length);
        }
        if (cookie.indexOf(nameEQ) === 0) {
          return cookie.substring(nameEQ.length, cookie.length);
        }
      }
      return null;
    };
    const userId = getCookie('id');
    if (userId) {
      dispatch(actions.getListLesson({ userId: +userId }));
    }
  }, [dispatch]);

  return (
    <LearnContainer>
      <LearnLayout>
        <ListLesson>
          <LearnHeader>Danh sách bài học của bạn</LearnHeader>
          <LearnBody>
            {listLesson.map((lesson, index) => {
              return (
                <LessonContainer key={index}>
                  <LessonLayout>
                    <LessonHeader>
                      <LessonTittle>{lesson.title}</LessonTittle>
                      <LessonDescription>
                        {lesson.description}
                      </LessonDescription>
                    </LessonHeader>
                    <LessonBody>
                      {index % 2 === 0 && (
                        <>
                          <Link
                            to={`/assigment?type=listen&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ left: -0 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[0].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=speak&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ left: -74.884 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[1].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=read&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ left: -100 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[2].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=test&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem
                              style={{ left: -74.884 }}
                              className="disabled"
                            >
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[0].isComplete &&
                                  lesson.assigmentList[1].isComplete &&
                                  lesson.assigmentList[2].isComplete
                                    ? bookWhiteIcon
                                    : bookGrayIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                        </>
                      )}
                      {index % 2 !== 0 && (
                        <>
                          <Link
                            to={`/assigment?type=listen&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ right: -0 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[0].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=speak&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ right: -74.884 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[1].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=read&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem style={{ right: -100 }}>
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[2].isComplete
                                    ? tickWhiteIcon
                                    : starIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                          <Link
                            to={`/assigment?type=test&lessonId=${lesson.id}&index=0`}
                          >
                            <LessonMenuItem
                              style={{ right: -74.884 }}
                              className="disabled"
                            >
                              <span>
                                <svg
                                  width="56"
                                  height="46"
                                  viewBox="0 0 56 46"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path
                                    d="M34.235 3.251c1.08-1.124.47-2.974-1.084-3.108A39 39 0 0 0 29.801 0C13.341 0 0 10.252 0 22.898c0 3.5 1.022 6.818 2.85 9.785.628 1.018 2.037 1.092 2.866.23zm20.86 9.272c-1.74-2.91-5.276-5.65-7.873-7.312-.98-.628-2.245-.44-3.06.39-9.658 9.832-25.825 26.249-32.112 32.442-1.078 1.061-1.054 2.826.199 3.673 3.978 2.69 8.663 3.87 11.236 4.191.7.088 1.38-.181 1.884-.675 9.406-9.239 24.835-25.33 29.348-30.144.662-.706.875-1.734.378-2.565"
                                    fill="#72D627"
                                  />
                                </svg>
                              </span>
                              <img
                                src={
                                  lesson.assigmentList[0].isComplete &&
                                  lesson.assigmentList[1].isComplete &&
                                  lesson.assigmentList[2].isComplete
                                    ? bookWhiteIcon
                                    : bookGrayIcon
                                }
                              />
                            </LessonMenuItem>
                          </Link>
                        </>
                      )}
                    </LessonBody>
                  </LessonLayout>
                </LessonContainer>
              );
            })}
          </LearnBody>
        </ListLesson>
        <div>thông kê</div>
      </LearnLayout>
    </LearnContainer>
  );
};

export default Learn;
