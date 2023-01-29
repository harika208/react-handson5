import React ,{memo} from "react";

const PureFunction=()=>{
    return(
        <div>
            PureFunction base Component
        </div>
    )
}
export default memo(PureFunction);
