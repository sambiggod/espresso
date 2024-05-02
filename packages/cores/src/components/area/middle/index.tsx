import * as React from "react";
import './index.less';
import RenderPanel from "@/components/presetPanel/render/index";
import SimulatorPanel from "@/components/presetPanel/simulator/index";
import { AREA_CONTAINER_IDS } from "@/utils/constant";

const Middle: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoMiddleContainer" id={AREA_CONTAINER_IDS.MIDDLE_CONTAINER_ID}>
                <div>middle 区域</div>
                <RenderPanel />
                <SimulatorPanel />
            </div>
        </React.Fragment>
    )
}

export default Middle;