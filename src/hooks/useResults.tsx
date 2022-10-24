import { useState } from 'preact/hooks';

export default function useResults(words: any) {
  const [results, setResults] = useState([]) as any;

  const checkIfRight = (wordIndex: number, chosenAnswer: string): void => {
    const temp = [...results];
    temp[wordIndex] = words[wordIndex].pos === chosenAnswer;
    setResults(temp);
  };

  return [results, setResults, checkIfRight];
}
