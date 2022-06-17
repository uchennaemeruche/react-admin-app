import "./widget.css"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"
const Widget = ({ data: { title, isMoney, link, icon, value } }) => {
    return (
        <div className="widget">
            <div className="left">
                <span className="title">{title}</span>
                <span className="counter">{isMoney && "₦"} {value}</span>
                <span className="link">{link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon />
                    20%
                </div>
                {icon}

            </div>
        </div>
    )
}

export default Widget