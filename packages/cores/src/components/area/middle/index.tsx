import * as React from "react";
import './index.less';
import RenderPanel from "../../presetPanel/render/index";
import SimulatorPanel from "../../presetPanel/simulator/index";

const Middle: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoMiddleContainer">
                <div>middle 区域</div>
                <RenderPanel />
                <SimulatorPanel />
            </div>
        </React.Fragment>
    )
}

export default Middle;