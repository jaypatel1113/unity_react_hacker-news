import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { HitsType } from "../../types";
import { format_one } from "../../utils";
import { Link } from "react-router-dom";

type Props = {
    hit: HitsType
}

export default function ImgMediaCard({hit}: Props) {
    return (
        <Card sx={{ maxWidth: 360 }}>
            <CardContent>
                <div className="flex justify-between items-center gap-2">
                    <div className="text-lg font-bold tracking-wide">
                        {hit.author}
                    </div>
                    <div className="flex flex-col tracking-normal">
                        <div className="text-xs font-medium truncate">
                            created_at : {format_one(hit.created_at)}
                        </div>
                    </div>
                </div>
                <Typography variant="body2" color="text.secondary" className="!mt-4">
                    {hit.title}
                </Typography>
            </CardContent>
            <CardActions>
                <Button variant="contained" size="small">
                    <Link to={hit.url} target="_blank">Share</Link>
                </Button>
                <Button size="small">
                    <Link to={`/${hit.objectID}`}>Learn More</Link>
                </Button>

                {/* map through tags */}
            </CardActions>
        </Card>
    );
}
