import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Loading } from "vaals"

// ABOSS Button

export interface Props {
    width: Number
    height: Number
}

export function VaalsLoading(props) {
    return <Loading color={props.loadingColor} />
}

VaalsLoading.defaultProps = {
    width: 44,
    height: 44,
}

addPropertyControls(VaalsLoading, {
    customColor: {
        type: ControlType.Boolean,
        title: "Custom Color",
        defaultValue: false,
    },
    loadingColor: {
        type: ControlType.Color,
        hidden(props) {
            return props.customColor === false
        },
    },
})
