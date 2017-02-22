import {INCREMENT_COUNTER, DECREMENT_COUNTER} from '../constants';


export const increment = (by: number): IncrementCounterAction => ({
    type: INCREMENT_COUNTER,
    by
});

export function decrement() {
    return {
        type: DECREMENT_COUNTER,
    };
}

export type DecrementCounterAction = {
    type: DECREMENT_COUNTER,
    by: number
};

export type IncrementCounterAction = {
    type: INCREMENT_COUNTER,
    by: number
};

export type OtherAction = {type: ''};
export const OtherAction: OtherAction = {type: ''};
