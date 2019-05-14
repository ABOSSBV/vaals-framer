import * as React from "react"
import { addPropertyControls, ControlType } from "framer"
import { Button } from "vaals"

// ABOSS Button

export interface Props {
    width: Number
    height: Number
}

export function VaalsButton(props) {
    return (
        <Button
            content={props.content}
            color={props.color}
            lightness={props.lightness}
            containerLeftVisible={props.containerLeftVisible}
            containerLeftType={props.containerLeftType}
            containerLeftContent={props.containerLeftContent}
            containerRightVisible={props.containerRightVisible}
            containerRightType={props.containerRightType}
            containerRightContent={props.containerRightContent}
            loading={props.loading}
        />
    )
}

VaalsButton.defaultProps = {
    width: 99,
    height: 48,
    content: "Button",
    containerLeftVisible: false,
    containerLeftType: "icon",
    containerRightVisible: false,
    containerRightType: "icon",
    loading: false,
}

addPropertyControls(VaalsButton, {
    content: { type: ControlType.String, title: "Button Content" },
    color: {
        type: ControlType.Enum,
        title: "Color",
        options: [
            "primary",
            "secondary",
            "warning",
            "positive",
            "alert",
            "primarygray",
            "gray",
        ],
        optionTitles: [
            "Primary",
            "Secondary",
            "Warning",
            "Positive",
            "Alert",
            "Primary Gray",
            "Gray",
        ],
    },
    content: { type: ControlType.String, title: "Button Content" },
    lightness: {
        type: ControlType.Number,
        defaultValue: 500,
        min: 100,
        max: 900,
        step: 100,
        displayStepper: true,
    },
    containerLeftVisible: {
        type: ControlType.Boolean,
        title: "Container L visible",
    },
    containerLeftType: {
        type: ControlType.Enum,
        title: "Container L Type",
        options: ["icon", "text"],
        optionTitles: ["Icon", "Text"],
        hidden(props) {
            return props.iconLeftVisible === false
        },
    },
    containerLeftContent: {
        type: ControlType.String,
        title: "Container L Content",
        hidden(props) {
            return props.iconLeftVisible === false
        },
    },
    containerRightVisible: {
        type: ControlType.Boolean,
        title: "Container R visible",
    },
    containerRightType: {
        type: ControlType.Enum,
        title: "Container R Type",
        options: ["icon", "text"],
        optionTitles: ["Icon", "Text"],
        hidden(props) {
            return props.iconRightVisible === false
        },
    },
    containerRightContent: {
        type: ControlType.String,
        title: "Container R Content",
        hidden(props) {
            return props.iconRightVisible === false
        },
    },
    loading: {
        type: ControlType.Boolean,
        title: "Loading",
    },
})
