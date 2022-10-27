import { motion } from 'framer-motion';

type Props = {
  results: boolean[];
  wordsLength: number;
};

export default function ProgressBar({ results, wordsLength }: Props) {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: `${(results.length / wordsLength) * 100}%` }}
      transition={{ duration: 0 }}
      className='fixed bottom-0 grid h-1 gap-[.5px]  transition-all rounded-xl overflow-hidden '
    >
      {results.map((result, index) => (
        <div
          style={{
            gridTemplateColumns: results.length,
            gridColumnStart: index + 1,
            gridColumnEnd: index + 2,
          }}
          className={`${result ? 'bg-green-500' : 'bg-red-500'}`}
        ></div>
      ))}
    </motion.div>
  );
}
