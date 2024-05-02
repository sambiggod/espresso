import * as React from "react";
import './index.less';
import HeaderPanel from "@/components/presetPanel/header/index";
import { AREA_CONTAINER_IDS } from "@/utils/constant";

const Top: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <div className="espressoTopContainer" id={AREA_CONTAINER_IDS.TOP_CONTAINER_ID}>
                <div>top区域</div>
                <HeaderPanel />
            </div>
        </React.Fragment>
    )
}

export default Top;
