import { WorkflowEngine } from "../workflow/WorkflowEngine";

/**
 * CommandProcessor
 *
 * Entry point of OpenATF.
 *
 * Responsibility:
 * ---------------
 * 1. Receive user command
 * 2. Basic validation
 * 3. Pass command to Workflow Engine
 *
 * It SHOULD NOT contain business logic.
 */
export class CommandProcessor {

    /**
     * Process user command.
     *
     * @param command User entered command
     */

    
    public async process(command: string): Promise<void> {

        console.log("Calling Workflow Engine...");
        console.log("----------------------------------");
        console.log("Processing Command...");
        console.log(`Command : ${command}`);
        console.log("----------------------------------");

        // Basic validation
        if (!command.trim()) {
            throw new Error("Command cannot be empty.");
        }

        // Create Workflow Engine
        const workflowEngine = new WorkflowEngine();

        // Pass command for further processing
       await  workflowEngine.start(command);

    }

}