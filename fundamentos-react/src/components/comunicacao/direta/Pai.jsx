import React from "react";

import Filho from "./Filho";

export default props => 
    <div>
        <Filho {...props}>Joao</Filho>
        <Filho {...props}>Maria</Filho>
        <Filho {...props}>Davi</Filho>
    </div>