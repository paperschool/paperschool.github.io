import React, { FunctionComponent } from "react";
import Logo from "../../assets/logo.svg";

import { header, logo } from "./index.scss";

const Header: FunctionComponent = () => {
    return <div className={header}>
        <p>ono sendai dot space</p>
        <Logo className={logo} />
    </div>
}

export default Header;