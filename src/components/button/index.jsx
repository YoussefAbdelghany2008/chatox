const Button = ({children,type = "button", size = "full"}) => {
    return (
        <button type={type} className={`bg-current text-white font-semibold py-2 px-4 rounded ${size}`}>
            {children}
        </button>
    );
};

export default Button;