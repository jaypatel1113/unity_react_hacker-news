import SearchIcon from "@mui/icons-material/Search";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import InputBase from "@mui/material/InputBase";
import { alpha,styled } from "@mui/material/styles";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Search = styled("div")(({ theme }) => ({
    "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    borderRadius: theme.shape.borderRadius,
    marginLeft: 0,
    position: "relative",
    width: "100%",
    [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(1),
        width: "auto",
    },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    alignItems: "center",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    padding: theme.spacing(0, 2),
    pointerEvents: "none",
    position: "absolute",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    "& .MuiInputBase-input": {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create("width"),
        [theme.breakpoints.up("sm")]: {
            "&:focus": {
                width: "20ch",
            },
            width: "12ch",
        },
    },
    color: "inherit",
    width: "100%",
}));

interface Props {
    searchValue: string;
    setSearchValue: React.Dispatch<React.SetStateAction<string>>;
}

const TopBar = ({ searchValue, setSearchValue } : Props) => {
    

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchValue(event.target.value);
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="fixed" sx={{ backdropFilter: "blur(10px)", background: "rgba(255, 255, 255, 0.1)", boxShadow:"none", color: "black" }}>
                <Toolbar>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            display: { sm: "block", xs: "none" },
                            flexGrow: 1,
                            fontFamily: "sans-serif",
                            fontWeight: 700,
                        }}
                    >
                        TECH NEWS
                    </Typography>
                    <Search>
                        <SearchIconWrapper>
                            <SearchIcon />
                        </SearchIconWrapper>
                        <StyledInputBase
                            placeholder="Search…"
                            inputProps={{ "aria-label": "search" }}
                            value={searchValue}
                            onChange={handleSearchChange}
                            sx={{background: "rgba(0,0,0,0.1)", borderRadius: "6px"}}
                        />
                    </Search>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default TopBar;
