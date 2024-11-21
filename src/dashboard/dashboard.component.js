import { Link } from "react-router-dom";
import "./style.css"
import RightPaneBG1 from "../assets/images/dashboardRightPaneBG1.jpg"
import RightPaneBG2 from "../assets/images/dashboardRightPaneBG2.jpg"

const Dashboard = () => {
    return (
        <>
            <div className="dashboardOuterContainer">
                <div className="dashboardInnerContainer">
                    <div className="dashboardInnerContainerLeftPane">
                        <div className="dashboardInnerContainerLeftPaneHeader">
                            Mayur Daily Needs
                        </div>
                        <div className="dashboardInnerContainerLeftPaneBody">
                            <div className="dashboardInnerContainerLeftPaneBodyTagLine">
                                Bring the store to <b>your door.</b>
                            </div>
                            <div className="dashboardInnerContainerLeftPaneBodyTagLineDecription">
                                Your trusted local store for high-quality essentials like wheat, rice, pulses, edible oils and more.
                                We bring the finest grains and everyday necessities right to your doorstep ensuring freshness and affordability
                                in every purchase.
                            </div>
                        </div>
                        <div className="dashboardInnerContainerLeftPaneBodyActions">
                            <Link className="dashboardInnerContainerLeftPaneBodyActionsGetStarted">
                                <button>
                                    Get Started
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className="dashboardInnerContainerRightPane">
                        <div className="dashboardInnerContainerRightPaneOverlay"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard;