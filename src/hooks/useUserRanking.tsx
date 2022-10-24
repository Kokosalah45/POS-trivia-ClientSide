import { useState, useEffect } from 'preact/hooks';

export default function useUserRanking(
  fetcher: (results: boolean[]) => Promise<any>,
  results: boolean[]
) {
  const [rank, setRank] = useState(null);
  const refetch = async () => {
    const rank = await fetcher(results);
    setRank(rank);
  };

  useEffect(() => {
    refetch();
  }, []);
  return [rank, setRank, refetch];
}
