import { useGetRandomWords, useResults } from './hooks';
import { Swiper, SwiperSlide } from 'swiper/react';
import UserRanking from './components/UserRanking';
import LoadingSpinner from './components/LoadingSpinner';
import PosTypeButtons from './components/PosTypeButtons';
import ProgressBar from './components/ProgressBar';
import Modal from './components/Modal';
import 'swiper/css';
import { getRandomWords } from './api';

export default function App() {
  const [words, setWords, refetchWords] = useGetRandomWords(getRandomWords);
  const [results, setResults, checkIfRight] = useResults(words);
  const resetGame = () => {
    setWords([]);
    setResults([]);
    refetchWords();
  };

  return (
    <>
      {!words.length && (
        <div className='h-screen bg-dark-shade-gray-high grid place-items-center text-white'>
          <LoadingSpinner />
        </div>
      )}
      {words && words.length && (
        <Swiper
          className='h-screen bg-dark-shade-gray-high text-white text-3xl font-semibold relative z-30'
          slidesPerView={1}
          allowTouchMove={false}
        >
          {words.map(({ word }: any) => (
            <SwiperSlide className='grid place-items-center cursor-pointer capitalize'>
              {word}
            </SwiperSlide>
          ))}
          <PosTypeButtons checkIfRight={checkIfRight} />
          <ProgressBar results={results} wordsLength={words.length} />
          <Modal isOpen={words.length === results.length}>
            <UserRanking resetGame={resetGame} results={results} />
          </Modal>
        </Swiper>
      )}
    </>
  );
}
