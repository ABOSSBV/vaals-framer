import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Input } from "vaals"

// ABOSS Button

export interface Props {
    width: Number
    height: Number
}

export function VaalsInput(props) {
    return <Input {...props} />
}

VaalsInput.defaultProps = {
    width: 250,
    height: 61,
    label: "Label",
    placeholder: "Placeholder",
}

addPropertyControls(VaalsInput, {
    label: { type: ControlType.String, title: "Label" },
    placeholder: { type: ControlType.String, title: "Placeholder" },
})
