import { DFADefinition } from "./types";

export class StateMachine {
    private alphabet: string[];
    private startState: string;
    private acceptStates: string[];
    private transitions: { [state: string]: { [input: string]: string } };
    private currentState: string;

    constructor(config: DFADefinition) {
        this.alphabet = config.alphabet;
        this.startState = config.startState;
        this.acceptStates = config.acceptStates;
        this.transitions = config.transitions;
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
