import * as React from "react";
import FooterPanel from '@/components/presetPanel/footer/index';
import './index.less';
import { AREA_CONTAINER_IDS } from "@/utils/constant";

const Footer: React.FC<any> = (props) => {

    return (
        <React.Fragment>
            <div className="espressoFooterContainer" id={AREA_CONTAINER_IDS.FOOTER_CONTAINER_ID}>
                <div>footer 区域</div>
                <FooterPanel />
            </div>
        </React.Fragment>
    )
}

export default Footer;
