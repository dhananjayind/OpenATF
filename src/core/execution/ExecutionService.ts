import { BrowserManager } from "./BrowserManager";
import { PlaywrightAdapter } from "../../adapters/playwright/PlaywrightAdapter";
import { ExecutionRequest } from "../../shared/models/ExecutionRequest";

/**
 * ExecutionService
 *
 * Responsibility:
 * ----------------
 * Executes the requested workflow.
 *
 * NOTE:
 * This class coordinates execution only.
 * Browser operations are delegated to BrowserManager.
 * Browser actions are delegated to PlaywrightAdapter.
 */
export class ExecutionService {

    /**
     * Executes workflow.
     */
    public async execute(request: ExecutionRequest): Promise<void> {

        const browserManager = new BrowserManager();

        const { browser, page } = await browserManager.launchBrowser();

        const playwrightAdapter = new PlaywrightAdapter();

        await playwrightAdapter.openUrl(page, request.url);

        await playwrightAdapter.printTitle(page);

        await browserManager.close(browser);

    }

}