import React from "react";

export interface typetemplateAction {
    increase?: string
}
const typeAction: typetemplateAction = {
    increase: "increase"
}

function ActionMouse(typeAction: typetemplateAction, payload: any) {
    return {
        type: typeAction,
        payload: { ...payload }
    }
}
export { typeAction, ActionMouse }