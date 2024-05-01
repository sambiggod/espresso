import * as React from "react";
import MaterialPanel from "../../presetPanel/material/index";
import './index.less';

const Left: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoLeftContainer">
                <div>left区域</div>
                <MaterialPanel />
            </div>
        </React.Fragment>
    )
}

export default Left;
