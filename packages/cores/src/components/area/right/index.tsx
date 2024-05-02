import * as React from "react";
import './index.less';
import SetterPanel from "@/components/presetPanel/setter/index";
import { AREA_CONTAINER_IDS } from "@/utils/constant";

const Right: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoRightContainer" id={AREA_CONTAINER_IDS.RIGHT_CONTAINER_ID}>
                <div>right区域</div>
                <SetterPanel />
            </div>
        </React.Fragment>
    )
}

export default Right;
