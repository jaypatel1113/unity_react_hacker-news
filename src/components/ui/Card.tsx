import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CommentIcon from '@mui/icons-material/Comment';
import LaunchIcon from '@mui/icons-material/Launch';

import LinkTag from "./LinkTag";
import Label from "./Label";

import { HitsType } from "../../types";
import { format_one, format_two } from "../../utils";

type Props = {
    hit: HitsType
}

export default function ImgMediaCard({hit}: Props) {
    return (
        <Card sx={{ height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "15px", position: "relative" }}>
            <div className="absolute top-2 right-2 text-xs text-gray-400 tracking-wide">
                last updated at: {format_two(hit.updated_at)}
            </div>
            <CardContent>
                <div className="flex flex-col gap-1">
                    <div className="text-2xl font-semibold tracking-wide">
                        {hit.author}
                    </div>
                    <div className="flex flex-col tracking-normal">
                        <div className="text-xs text-black/50">
                            {format_one(hit.created_at)}
                        </div>
                    </div>
                </div>
                <div className="mt-4 text-[#666] text-base tracking-wide">
                    {hit.title}
                </div>
            </CardContent>
            <CardActions sx={{display: "flex", justifyContent: "space-between"}}>
                <LinkTag 
                    url={`/${hit.objectID}`} 
                    text={"Comments"} 
                    Icon={CommentIcon} 
                    className={"bg-[#f7eee3] text-[#ff956c]"}
                />
                <LinkTag 
                    url={hit.url} 
                    text={"View"} 
                    Icon={LaunchIcon} 
                    className={"bg-[#e5eeff] text-[#3fa0ff]"}
                />
            </CardActions>

            {/* tags */}
            <div className="flex gap-x-2 flex-wrap">
            {
                hit._tags.map(tag => 
                    <Label 
                        text={tag} 
                        className="bg-[#c1ebee96] text-[#01c4d4] px-3 text-[10px] tracking-tighter " 
                        key={tag}
                    />
            )}
            </div>

            
        </Card>
    );
}
