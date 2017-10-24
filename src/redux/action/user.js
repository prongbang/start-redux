import {SET, RESET} from './types/user';

export function set(data) {
    return {
        type: SET,
        data
    }
}
export function reset() {
    return {
        type: RESET
    }
}