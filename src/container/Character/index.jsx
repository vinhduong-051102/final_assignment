import {
    BtnContentLayout,
    CharacterContainer,
    CharacterLayout,
    ListVowelBtnLayout,
    ListVowelContainer,
    ListVowelLayout,
    ListVowelTitle,
    MainTitle,
    SubTitle,
    Symbol,
    TitleContainer,
    TitleContentContainer,
    TitleLayout,
    Word
} from "./styled";
import OptionAnswer from "../../common/OptionAnswer";
import axios from "axios"

const Character = () => {
    const listVowel = [
        {
            "character": "ɑ",
            "transliteration": "hot",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/aa.mp3",
        },
        {
            "character": "æ",
            "transliteration": "cat",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ae.mp3",
        },
        {
            "character": "ʌ",
            "transliteration": "but",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ah.mp3",
        },
        {
            "character": "ɛ",
            "transliteration": "bed",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/eh.mp3",
        },
        {
            "character": "eɪ",
            "transliteration": "say",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ey.mp3",
            
        },
        {
            "character": "ɚ",
            "transliteration": "bird",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/er.mp3",
            
        },
        {
            "character": "ɪ",
            "transliteration": "ship",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ih.mp3",
            
        },
        {
            "character": "i",
            "transliteration": "sheep",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/iy.mp3",
            
        },
        {
            "character": "ə",
            "transliteration": "about",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ah0.mp3",
            
        },
        {
            "character": "oʊ",
            "transliteration": "boat",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ow.mp3",
            
        },
        {
            "character": "ʊ",
            "transliteration": "foot",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/uh.mp3",
            
        },
        {
            "character": "u",
            "transliteration": "food",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/uw.mp3",
            
        },
        {
            "character": "aʊ",
            "transliteration": "cow",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/aw.mp3",
            
        },
        {
            "character": "aɪ",
            "transliteration": "time",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ay.mp3",
            
        },
        {
            "character": "ɔɪ",
            "transliteration": "boy",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/oy.mp3",
            
        }
    ]
    const listConsonant = [
        {
            "character": "b",
            
            "transliteration": "book",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/b.mp3",
            
        },
        {
            "character": "ʧ",
            
            "transliteration": "chair",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ch.mp3",
            
        },
        {
            "character": "d",
            
            "transliteration": "day",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/d.mp3",
            
        },
        {
            "character": "f",
            
            "transliteration": "fish",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/f.mp3",
            
        },
        {
            "character": "g",
            
            "transliteration": "go",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/g.mp3",
            
        },
        {
            "character": "h",
            
            "transliteration": "home",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/hh.mp3",
            
        },
        {
            "character": "ʤ",
            
            "transliteration": "job",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/jh.mp3",
            
        },
        {
            "character": "k",
            
            "transliteration": "key",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/k.mp3",
            
        },
        {
            "character": "l",
            
            "transliteration": "lion",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/l.mp3",
            
        },
        {
            "character": "m",
            
            "transliteration": "moon",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/m.mp3",
            
        },
        {
            "character": "n",
            
            "transliteration": "nose",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/n.mp3",
            
        },
        {
            "character": "ŋ",
            
            "transliteration": "sing",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/ng.mp3",
            
        },
        {
            "character": "p",
            
            "transliteration": "pig",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/p.mp3",
            
        },
        {
            "character": "ɹ",
            
            "transliteration": "red",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/r.mp3",
            
        },
        {
            "character": "s",
            
            "transliteration": "see",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/s.mp3",
            
        },
        {
            "character": "ʒ",
            
            "transliteration": "measure",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/zh.mp3",
            
        },
        {
            "character": "ʃ",
            
            "transliteration": "shoe",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/sh.mp3",
            
        },
        {
            "character": "t",
            
            "transliteration": "time",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/t.mp3",
            
        },
        {
            "character": "ð",
            
            "transliteration": "then",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/dh.mp3",
            
        },
        {
            "character": "θ",
            
            "transliteration": "think",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/th.mp3",
            
        },
        {
            "character": "v",
            "transliteration": "very",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/v.mp3",
            
        },
        {
            "character": "w",
            "transliteration": "water",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/w.mp3",
            
        },
        {
            "character": "j",
            "transliteration": "you",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/y.mp3",
            
        },
        {
            "character": "z",
            "transliteration": "zoo",
            "ttsUrl": "https://public-static.duolingo.com/speech/pronunciation-bingo-prototype-audio/z.mp3",
            
        }
    ]

    const handleClick = url => {
        axios({
            url: url,
            method: 'GET',
            responseType: 'blob', // Chỉ định kiểu dữ liệu trả về là blob
        })
            .then(response => {
                // Tạo một đường dẫn (URL) từ blob
                const blobUrl = URL.createObjectURL(response.data);
                // Tạo một thẻ audio để phát file MP3
                const audio = new Audio(blobUrl);
                // Phát file MP3
                audio.play();
            })
            .catch(error => {
                console.error('There was a problem with the Axios request:', error);
            });
    }
    
    return (
        <CharacterContainer>
            <CharacterLayout>
                <TitleContainer>
                    <TitleLayout>
                        <TitleContentContainer>
                            <MainTitle>Cùng học phát âm tiếng Anh nào!</MainTitle>
                            <SubTitle>Tập nghe và học phát âm các âm trong tiếng Anh</SubTitle>
                        </TitleContentContainer>
                    </TitleLayout>
                </TitleContainer>
                <ListVowelContainer>
                    <ListVowelLayout>
                        <ListVowelTitle>Nguyên âm</ListVowelTitle>
                        <ListVowelBtnLayout>
                            {listVowel.map((vowel, index) => {
                                return (
                                    <OptionAnswer
                                        onClick={() => handleClick(vowel.ttsUrl)}
                                        key={index}
                                        no={1}
                                        isShowNo={false}
                                        content={
                                            <BtnContentLayout>
                                                <Symbol>{vowel.character}</Symbol>
                                                <Word>{vowel.transliteration}</Word>
                                            </BtnContentLayout>
                                        }
                                    />
                                )
                            })}

                        </ListVowelBtnLayout>
                    </ListVowelLayout>
                </ListVowelContainer>
                <ListVowelContainer>
                    <ListVowelLayout>
                        <ListVowelTitle>Phụ âm</ListVowelTitle>
                        <ListVowelBtnLayout>
                            {listConsonant.map((vowel, index) => {
                                return (
                                    <OptionAnswer
                                        onClick={() => handleClick(vowel.ttsUrl)}
                                        key={index}
                                        no={1}
                                        isShowNo={false}
                                        content={
                                            <BtnContentLayout>
                                                <Symbol>{vowel.character}</Symbol>
                                                <Word>{vowel.transliteration}</Word>
                                            </BtnContentLayout>
                                        }
                                    />
                                )
                            })}

                        </ListVowelBtnLayout>
                    </ListVowelLayout>
                </ListVowelContainer>
            </CharacterLayout>
        </CharacterContainer>
    )
}

export default Character
