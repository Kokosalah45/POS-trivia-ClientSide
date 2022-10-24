import { AiOutlineLoading3Quarters } from 'react-icons/ai';

type Props = {};

export default function LoadingSpinner({}: Props) {
  return (
    <div className='animate-spin text-5xl'>
      <AiOutlineLoading3Quarters />
    </div>
  );
}
