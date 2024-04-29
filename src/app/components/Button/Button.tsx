export const Button = (props: {message: string, style: string, buttonEvent: () => void}) => {

    const default_style = "mt-6 py-5 border-solid border-[3px] rounded-sm border-c_black font-black text-c_black transition ease-in-out delay-150 duration-300 hover:text-primary"

    return (
        <button className={`${default_style} ${props.style}`} onClick={() => props.buttonEvent()}>
            {props.message}
        </button>
    )
};

export default Button;