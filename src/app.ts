import chalk from "chalk";
import * as fs from "fs";
import * as readline from "readline";
import { StateMachine } from "./StateMachine";
import { DFADefinition } from "./types";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function promptUser(question: string): Promise<string> {
    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            resolve(answer);
        });
    });
}

export async function runApp() {
    try {
        const fileName = await promptUser(
            "Enter the DFA Definition JSON file name: "
        );

        const fileContent = fs.readFileSync(fileName, "utf8");
        const dfaDefinition: DFADefinition = JSON.parse(fileContent);

        const dfaStateMachine = new StateMachine(dfaDefinition);

        console.log(`DFA definition loaded ${chalk.green("successfully")}!\n`);

        while (true) {
            const inputString = await promptUser(
                "Enter an input string (or type 'exit' to quit): "
            );

            if (inputString.toLowerCase() === "exit") {
                console.log("\nGoodbye!");
                break;
            }

            try {
                const isAccepted = dfaStateMachine.processInput(inputString);
                if (isAccepted) {
                    console.log(
                        `\nThe string "${inputString}" is ${chalk.green(
                            "accepted"
                        )} by the DFA.\n`
                    );
                } else {
                    console.log(
                        `\nThe string "${inputString}" is ${chalk.red(
                            "rejected"
                        )} by the DFA.\n`
                    );
                }
            } catch (error: any) {
                console.error(`Error: ${error.message}`);
            }
        }
    } catch (error: any) {
        console.error(`Failed to load DFA: ${error.message}`);
    } finally {
        rl.close();
    }
}
