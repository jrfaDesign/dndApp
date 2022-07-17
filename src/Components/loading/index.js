import {ClipLoader } from "react-spinners"

export default function Loading(props){
    return(
        <ClipLoader
            size={props.size}
            color={props.color}
            loading={props.loading}
            speedMultiplier={1}
        />
    )
}