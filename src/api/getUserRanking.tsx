export default async function getUserRanking(results: boolean[]) {
  const score =
    (results.filter((result: any) => result).length / results.length) * 100;
  const { rank } = await (
    await fetch('https://pos-trivia-production.up.railway.app/api/rank', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ score }),
    })
  ).json();

  return rank;
}
