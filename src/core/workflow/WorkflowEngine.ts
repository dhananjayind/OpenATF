import { ExecutionService } from "../execution/ExecutionService";
import { ExecutionRequest } from "../../shared/models/ExecutionRequest";
import { WebPlugin } from "../plugin/web/WebPlugin";

/**
 * WorkflowEngine
 *
 * Responsibility:
 * ----------------
 * Decides which workflow should run
 * based on the user command.
 */
export class WorkflowEngine {

    /**
     * Start workflow execution.
     *
     * @param command User command
     */
    public async start(command: string): Promise<void> {

        console.log("Workflow Engine Started...");
        console.log(`Preparing workflow for: ${command}`);

        /**
         * Build execution request.
         *
         * Currently this is hardcoded.
         * Later AI will dynamically create this object
         * after understanding the user's command.
         */

        // Load Web Plugin
        const webPlugin = new WebPlugin();

        // Build execution request
        const request = webPlugin.getExecutionRequest();
        // Create Execution Service
        const executionService = new ExecutionService();

        // Execute workflow
        await executionService.execute(request);

    }

}