import { motion } from 'framer-motion';
import { useUserRanking } from '../hooks';
import LoadingSpinner from './LoadingSpinner';
import { getUserRanking } from '../api';

type Props = {
  results: boolean[];
  resetGame: () => void;
};

export default function UserRanking({ results, resetGame }: Props) {
  const [rank] = useUserRanking(getUserRanking, results);
  return (
    <motion.div
      key='modal'
      className='w-[35%] rounded-md bg-dark-shade-gray grid place-items-center h-[500px] p-7 '
    >
      {rank === null ? (
        <>
          <h2 className='font-bold text-4xl'>Calculating your rank</h2>
          <LoadingSpinner />
        </>
      ) : (
        <>
          <h2 className='font-bold text-5xl'>Your Rank</h2>
          <div className='text-5xl font-bold'>{rank}%</div>
          <button
            className='bg-dark-shade-gray-high text-white w-full p-4 flex justify-center items-center rounded-md shadow-lg hover:bg-white hover:text-black transition-all'
            onClick={resetGame}
          >
            Try again
          </button>
        </>
      )}
    </motion.div>
  );
}
