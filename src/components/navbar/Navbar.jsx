import "./navbar.css"
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined"
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined"
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined"
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined"
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined"
import ChatBubbleOutlineOutlined from "@mui/icons-material/ChatBubbleOutlineOutlined"
import ListOutlinedIcon from "@mui/icons-material/ListOutlined"
const Navbar = () => {
    return (
        <div className="navbar">
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder="Search..." />
                    <SearchOutlinedIcon className="icon" />
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageOutlinedIcon className="icon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="icon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlined className="icon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="icon" />
                    </div>
                    <div className="item">
                        <img src="https://cdn.hashnode.com/res/hashnode/image/upload/v1612965396384/seF95bAiu.jpeg"
                            alt=""
                            className="avatar"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar