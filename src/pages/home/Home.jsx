import "./home.css"
import Sidebar from '../../components/sidebar/Sidebar'
import Navbar from '../../components/navbar/Navbar'
import Widget from "../../components/widget/Widget";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined"
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
const Home = () => {

    const widgets = [
        {
            type: "user",
            title: "USERS",
            isMoney: false,
            link: "See all users",
            value: 21312,
            icon: <PersonOutlinedIcon className="icon" style={{ color: "crimson", backgroundColor: "rgba(255, 0, 0, 0.2)" }} />
        },
        {
            type: "order",
            title: "ORDERS",
            isMoney: false,
            link: "View all orders",
            value: 200,
            icon: <ShoppingCartOutlinedIcon className="icon" style={{ color: "goldenrod", backgroundColor: "rgba(218, 165, 32, 0.2)" }} />
        },
        {
            type: "earning",
            title: "EARNINGS",
            isMoney: true,
            link: "View net earnings",
            value: 300000.00,
            icon: <MonetizationOnOutlinedIcon className="icon" style={{ color: "green", backgroundColor: "rgba(0, 128, 0, 0.2)" }} />
        },
        {
            type: "balance",
            title: "BALANCE",
            isMoney: true,
            link: "See details",
            value: 600000.34,
            icon: <AccountBalanceWalletOutlinedIcon className="icon" style={{ color: "purple", backgroundColor: "rgba(128, 0, 128, 0.2)" }} />
        },
    ]
    return (
        <div className="home">
            <Sidebar />
            <div className="home-container">
                <Navbar />
                <div className="widgets">
                    {widgets.map((widget, i) => {
                        return <Widget key={i} data={widget} />
                    })}
                </div>

                <div className="charts">
                    <Featured />
                    <Chart />
                </div>
            </div>
        </div>
    );
};

export default Home;
