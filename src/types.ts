export type State = string;
export type AlphabetElement = string;

export type DFADefinition = {
    states: Array<State>;
    alphabet: Array<AlphabetElement>;
    startState: State;
    acceptStates: Array<State>;
    transitions: Record<State, Record<AlphabetElement, State>>;
};
