import { IButton } from '@/types/interface';

export const Button = (props: IButton) => {
  const default_style =
    'mt-6 py-5 border-solid border-[3px] rounded-sm border-c_black font-black text-c_black transition ease-in-out delay-150 duration-300 hover:';

  return (
    <button
      className={`${default_style} ${props.style}`}
      onClick={() => props.event()}
    >
      {props.message}
    </button>
  );
};

export default Button;
