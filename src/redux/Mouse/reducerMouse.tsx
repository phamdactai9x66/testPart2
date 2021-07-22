import React from "react";
import { typeAction } from "./typeActionMouse";
export interface templateMouse {
    countMouse: number
}
export const initialMouse: templateMouse = {
    countMouse: 0
}

export function reducerMouse(state = initialMouse, action: { type: any, payload: any }) {
    switch (action.type) {
        case typeAction.increase: {

            return state;
        }
        default: {
            return state;
        }
    }
}