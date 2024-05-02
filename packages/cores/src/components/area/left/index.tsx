import * as React from "react";
import MaterialPanel from "@/components/presetPanel/material/index";
import './index.less';
import { AREA_CONTAINER_IDS } from "@/utils/constant";

const Left: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoLeftContainer" id={AREA_CONTAINER_IDS.LEFT_CONTAINER_ID}>
                <div>left区域</div>
                <MaterialPanel />
            </div>
        </React.Fragment>
    )
}

export default Left;
