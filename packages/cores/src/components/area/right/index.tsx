import * as React from "react";
import './index.less';
import SetterPanel from "../../presetPanel/setter/index";

const Right: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoRightContainer">
                <div>right区域</div>
                <SetterPanel />
            </div>
        </React.Fragment>
    )
}

export default Right;
