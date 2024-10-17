import DFAExampleDefinition_1 from "../examples/DFADefinition_1.json";
import DFAExampleDefinition_2 from "../examples/DFADefinition_2.json";
import { StateMachine } from "../src/StateMachine";

describe("DFA tests", () => {
    describe("Example 1", () => {
        it("Should properly create a state machine", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_1);
            expect(stateMachine).toBeDefined();
        });

        it("Should properly process one right input", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_1);

            expect(
                stateMachine.processInput(
                    DFAExampleDefinition_1.exampleRightInput?.[0] ?? ""
                )
            ).toBe(true);
        });

        it("Should properly process multiple right inputs", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_1);

            DFAExampleDefinition_1.exampleRightInput.forEach(
                (rightInputExample) =>
                    expect(stateMachine.processInput(rightInputExample)).toBe(
                        true
                    )
            );
        });

        it("Should properly process one wrong input", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_1);

            expect(
                stateMachine.processInput(
                    DFAExampleDefinition_1.exampleWrongInput?.[0] ?? ""
                )
            ).toBe(false);
        });

        it("Should properly process multiple wrong inputs", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_1);

            DFAExampleDefinition_1.exampleWrongInput.forEach(
                (wrongInputExample) =>
                    expect(stateMachine.processInput(wrongInputExample)).toBe(
                        false
                    )
            );
        });
    });
    describe("Example 2", () => {
        it("Should properly create a state machine", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_2);
            expect(stateMachine).toBeDefined();
        });

        it("Should properly process one right input", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_2);

            expect(
                stateMachine.processInput(
                    DFAExampleDefinition_2.exampleRightInput?.[0] ?? ""
                )
            ).toBe(true);
        });

        it("Should properly process multiple right inputs", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_2);

            DFAExampleDefinition_2.exampleRightInput.forEach(
                (rightInputExample) =>
                    expect(stateMachine.processInput(rightInputExample)).toBe(
                        true
                    )
            );
        });

        it("Should properly process one wrong input", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_2);

            expect(
                stateMachine.processInput(
                    DFAExampleDefinition_2.exampleWrongInput?.[0] ?? ""
                )
            ).toBe(false);
        });

        it("Should properly process multiple wrong inputs", () => {
            const stateMachine = new StateMachine(DFAExampleDefinition_2);

            DFAExampleDefinition_2.exampleWrongInput.forEach(
                (wrongInputExample) =>
                    expect(stateMachine.processInput(wrongInputExample)).toBe(
                        false
                    )
            );
        });
    });
});
