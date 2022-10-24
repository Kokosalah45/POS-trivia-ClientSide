import { useEffect, useState } from 'preact/hooks';

export default function useGetRandomWords(fetcher: () => Promise<any>) {
  const [words, setWords] = useState([]) as any;
  useEffect(() => {
    refetch();
  }, []);
  const refetch = async () => {
    const data = await fetcher();
    setWords(data);
  };
  return [words, setWords, refetch];
}
