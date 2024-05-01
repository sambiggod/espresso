import * as React from "react";
import Top from "./area/top/index";
import Left from "./area/left/index";
import Middle from "./area/middle/index";
import Right from "./area/right/index";
import Footer from "./area/footer/index";
import './app.less';

const App: React.FC<any> = () => {
    return (
        <React.Fragment>
            <div className="espressoContainer">
                <Top></Top>
                <div className="subContainer">
                    <Left></Left>
                    <Middle></Middle>
                    <Right></Right>
                </div>
                <Footer></Footer>
            </div>
        </React.Fragment>
    )
}

export default App;