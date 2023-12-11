type Props = {
    fn: () => void;
    total: number;
    visible: number;
}

const Button: React.FC<Props> = ({fn, total, visible}): React.ReactNode => {
    return (
        <div
            className="mt-5 bg-[#f1daf2] text-[#df6cdb] max-w-max px-4 py-1 rounded-full text-base font-semibold cursor-pointer"
            onClick={fn}
        >
            Load more ({total - visible} remaining)
        </div>
    );
};

export default Button;
