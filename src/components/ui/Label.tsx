type Props = {
    text: string;
    className: string;
};

const Label: React.FC<Props> = ({ text, className }: Props): React.ReactNode => {
    return (
        <div className={`mt-2 max-w-max py-1 rounded-full font-semibold tracking-wide ${className} font-mono`}>
            {text}
        </div>
    );
};

export default Label;