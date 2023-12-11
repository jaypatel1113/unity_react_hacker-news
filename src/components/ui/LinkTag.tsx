import { Link } from "react-router-dom";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

type Props = {
    url: string;
    text: string;
    className: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}

const LinkTag: React.FC<Props> = ({ url, text, Icon, className }: Props): React.ReactNode => {
    return (
        <Link
            to={url}
            target={url.includes("www") ? "_blank" : "_self"}
            className={`px-3 py-1 rounded-full flex gap-2 items-center justify-between font-mono tracking-widest ${className}`}
        >
            <Icon fontSize="small" />
            <div className="leading-[1] font-semibold text-xs tracking-wider uppercase">
                {text}
            </div>
        </Link>
    );
};

export default LinkTag;
