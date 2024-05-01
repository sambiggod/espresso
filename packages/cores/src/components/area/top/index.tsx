import * as React from "react";
import './index.less';
import HeaderPanel from "../../presetPanel/header/index";

const Top: React.FC<any> = (props) => {
    return (
        <React.Fragment>
            <div className="espressoTopContainer">
                <div>top区域</div>
                <HeaderPanel />
            </div>
        </React.Fragment>
    )
}

export default Top;
