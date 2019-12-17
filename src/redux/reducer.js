import { REGISTER_EVENTS, REGISTER_ACTIONS, REGISTER_TRIGGERS, FIRE_EVENT } from './actions';
const initialState = { cardActions: {}, cardEvents: {}, cardTriggers: {} };
export default function appReducer(state = initialState, action) {
    switch (action.type) {
        case REGISTER_ACTIONS:
            const cardActions = Object.assign({}, { ...state.cardActions }, { ...action.payload });
            return Object.assign({}, state, { cardActions })
        case REGISTER_EVENTS:
            const cardEvents = Object.assign({}, { ...state.cardEvents }, { ...action.payload });
            return Object.assign({}, state, { cardEvents })
        case REGISTER_TRIGGERS:
            const cardTriggers = Object.assign({}, { ...state.cardTriggers }, { ...action.payload });
            return Object.assign({}, state, { cardTriggers })
        case FIRE_EVENT:
            return Object.assign({}, state, { firedEvents: action.payload })
        default:
            return {};
    }
}