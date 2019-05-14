import * as React from "react"
import { Block } from "vaals"

// ABOSS Button

export interface Props {
    width: Number
    height: Number
}

export function VaalsBlock(props) {
    return <Block {...props}>{props.children}</Block>
}

VaalsBlock.defaultProps = {
    width: 200,
    height: 200,
}
