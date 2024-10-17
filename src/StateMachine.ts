import { AlphabetElement, DFADefinition, State } from "./types";

export class StateMachine {
    private alphabet: AlphabetElement[];
    private startState: State;
    private acceptStates: State[];
    private transitions: {
        [state: State]: { [input: AlphabetElement]: State };
    };
    private currentState: State;

    constructor(definition: DFADefinition) {
        this.alphabet = definition.alphabet;
        this.startState = definition.startState;
        this.acceptStates = definition.acceptStates;
        this.transitions = definition.transitions;
        this.currentState = this.startState;
    }

    private resetState = () => {
        this.currentState = this.startState;
    };

    public processInput(input: string): boolean {
        for (const symbol of input) {
            if (!this.alphabet.includes(symbol)) {
                throw new Error(`Invalid input symbol: ${symbol}`);
            }

            const nextState = this.transitions[this.currentState]?.[symbol];
            if (!nextState) {
                throw new Error(
                    `No transition defined for state ${this.currentState} on input ${symbol}`
                );
            }

            this.currentState = nextState;
        }

        const currentState = this.currentState;
        this.resetState();
        return this.acceptStates.includes(currentState);
    }
}

// if (dfa.processInput(inputString)) {
//     console.log(`The string "${inputString}" is accepted by the DFA.`);
// } else {
//     console.log(`The string "${inputString}" is rejected by the DFA.`);
// }
