import { ExecutionService } from "../execution/ExecutionService";
import { PluginManager } from "../plugin/PluginManager";

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
     * Starts workflow execution.
     *
     * @param command User command
     */
    public async start(command: string): Promise<void> {

        console.log("--------------------------------");
        console.log("Workflow Engine Started");
        console.log("--------------------------------");

        console.log(`Preparing workflow for: ${command}`);

        // Create Plugin Manager
        const pluginManager = new PluginManager();

        // Load Web Plugin
        const plugin = pluginManager.getPlugin("web");

        // Build execution request
        const request = plugin.getExecutionRequest();

        // Execute request
        const executionService = new ExecutionService();

        await executionService.execute(request);
    }
}