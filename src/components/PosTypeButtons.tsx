import { useSwiper } from 'swiper/react';
type Props = {
  checkIfRight: (wordIndex: number, chosenAnswer: string) => void;
};
export default function PosTypeButtons({ checkIfRight }: Props) {
  const swiper = useSwiper();
  return (
    <section className='flex gap-4 fixed font-semibold text-2xl rounded-lg bottom-[30px] z-50 w-full '>
      <div className='w-[80%] mx-auto bg-dark-shade-gray p-4 text-base lg:text-inherit rounded-md flex flex-col gap-4 lg:gap-0 lg:flex-row  justify-evenly'>
        {['noun', 'adverb', 'adjective', 'verb'].map((pos) => (
          <button
            className='cursor-pointer capitalize  relative px-12 py-[.3rem] lg:py-10  rounded-lg bg-dark-shade-gray-high shadow-xl hover:-translate-y-2 hover:bg-white hover:text-black transition-all '
            onClick={() => {
              checkIfRight(swiper.realIndex, pos);
              swiper.slideNext();
            }}
          >
            {pos}
          </button>
        ))}
      </div>
    </section>
  );
}
