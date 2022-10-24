export default async function getRandomWords() {
  const res = await fetch(
    'https://pos-trivia-production.up.railway.app/api/words'
  );
  return await res.json();
}
