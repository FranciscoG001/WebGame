import React from 'react';
import './Home.css';

function Home() {
    return (
        <div className="HomePage">
            {/* Top page */}
            <div className="City"></div>
            <div className="GridContainerResources">
                <div className="GridItemResources"></div>
                <div className="GridItemResources"></div>
            </div>
            <div className="GridContainerResources2">
                <div className="GridItemResources2"></div>
                <div className="GridItemResources2"></div>
            </div>
            <div className="GridContainerResources3">
                <div className="GridItemResources3"></div>
                <div className="GridItemResources3"></div>
            </div>

            {/* Bottom page */}
            <div className="GridContainer">
                <div className="GridItem"></div>
                <div className="GridItem"></div>
                <div className="GridItem"></div>
                <div className="GridItem"></div>
            </div>
            <div className="Minorcircle"></div>
            <div className="Minorcircle2"></div>
            <div className="Minorcircle3"></div>
            <div className="Season"></div>
            <div className="DataTimeGame"></div>
            <div className="Chat"></div>
        </div>
    );
}

export default Home;