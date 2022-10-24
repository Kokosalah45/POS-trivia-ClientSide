type Props = {
  results: boolean[];
  wordsLength: number;
};

export default function ProgressBar({ results, wordsLength }: Props) {
  return (
    <div
      style={{
        width: `${(results.length / wordsLength) * 100}%`,
        transition: 'all',
      }}
      className='fixed bottom-0 grid h-2 gap-[1px]  transition-all'
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
    </div>
  );
}
