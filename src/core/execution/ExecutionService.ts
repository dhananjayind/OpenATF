import { BrowserManager } from "./BrowserManager";
import { PlaywrightAdapter } from "../../adapters/playwright/PlaywrightAdapter";
import { ExecutionRequest } from "../../shared/models/ExecutionRequest";
/**
 * ExecutionService
 *
 * Responsibility:
 * ----------------
 * This class is responsible for executing a workflow.
 *
 * NOTE:
 * It does NOT know how browser automation works.
 * It simply starts the execution process.
 */
export class ExecutionService {

    /**
     * Execute the workflow.
     *
     * @param workflowName Name of the workflow to execute
     */
    public async execute(request: ExecutionRequest): Promise<void> {
        // Browser lifecycle
        const browserManager = new BrowserManager();

        await browserManager.launch();

        // Get current page
        const page = browserManager.getPage();

        // Browser actions
        const playwrightAdapter = new PlaywrightAdapter();

        await playwrightAdapter.openUrl(page, request.url);

        await playwrightAdapter.printTitle(page);

        // Close browser
        await browserManager.close();
        // Future:
        // 1. Initialize browser
        // 2. Execute workflow steps
        // 3. Collect execution result
        // 4. Return report

    }

}