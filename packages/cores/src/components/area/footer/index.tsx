import * as React from "react";
import FooterPanel from '../../presetPanel/footer/index';
import './index.less';

const Footer: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoFooterContainer">
                <div>footer 区域</div>
                <FooterPanel />
            </div>
        </React.Fragment>
    )
}

export default Footer;
