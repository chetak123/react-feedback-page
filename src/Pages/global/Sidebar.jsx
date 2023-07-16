import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import AssessmentIcon from "@mui/icons-material/Assessment";
import LogoDevIcon from "@mui/icons-material/LogoDev";
import GroupsIcon from "@mui/icons-material/Groups";
import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import TouchAppRoundedIcon from "@mui/icons-material/TouchAppRounded";
import './Sidebar.css';


const Item = ({ title, to, icon, selected, setSelected }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    return (
        <MenuItem
            active={selected === title}
            style={{
                color: colors.grey[100],
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            <Typography>{title}</Typography>
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Environments");

    const items = [
        {
            type: "group",
            title: "Manage",
        },
        {
            type: "item",
            title: "Environments",
            to: "/",
            icon: <LogoDevIcon />,
        }, {
            type: "item",
            title: "Feedbacks",
            to: "/feedbacks",
            icon: <LogoDevIcon />,
        },
        {
            type: "group",
            title: "Coming soon...",
        },
        {
            type: "item",
            title: "QA",
            to: "/qa",
            icon: <AssessmentIcon />,
        },
        {
            type: "item",
            title: "Projects",
            to: "/projects",
            icon: <DashboardRoundedIcon />,
        },
        {
            type: "item",
            title: "Teams",
            to: "/teams",
            icon: <GroupsIcon />,
        },
        {
            type: "item",
            title: "Releases",
            to: "/releases",
            icon: <TouchAppRoundedIcon />,
        },
    ];

    return (

        <Box
            sx={{
                "& .pro-sidebar-inner": {
                    background: `${colors.primary[400]} !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <div className="sidebar">

                    <Menu iconShape="square">
                        {/* LOGO AND MENU ICON */}
                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                            style={{
                                margin: "10px 0 20px 0",
                                color: colors.grey[100],
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                    ml="15px"
                                >
                                    <Typography variant="h3" color={colors.grey[100]}>
                                        Tessell Convoy
                                    </Typography>
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>

                        <Box paddingLeft={isCollapsed ? undefined : "10%"}>
                            {items.map((item, index) =>
                                item.type === "item" ? (
                                    <Item
                                        key={index}
                                        title={item.title}
                                        to={item.to}
                                        icon={item.icon}
                                        selected={selected}
                                        setSelected={setSelected}
                                    />
                                ) : (
                                    <Typography
                                        key={index}
                                        variant="h6"
                                        color={colors.grey[300]}
                                        sx={{ m: "15px 0 5px 20px" }}
                                    >
                                        {item.title}
                                    </Typography>
                                )
                            )}
                        </Box>
                    </Menu>
                </div>

            </ProSidebar>
        </Box>

    );
};

export default Sidebar;