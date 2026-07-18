import { Browser, BrowserContext, chromium, Page } from "playwright";

/**
 * BrowserManager
 *
 * Responsibility:
 * ----------------
 * Manage browser lifecycle.
 *
 * It is responsible for:
 * - Launching browser
 * - Creating browser context
 * - Creating page
 * - Closing browser
 */
export class BrowserManager {

    private browser!: Browser;
    private context!: BrowserContext;
    private page!: Page;

    /**
     * Launch Chromium browser.
     */
    public async launch(): Promise<void> {

        console.log("Launching Browser...");

        this.browser = await chromium.launch({
            headless: false
        });

        this.context = await this.browser.newContext();

        this.page = await this.context.newPage();

    }

    /**
     * Returns current page.
     */
    public getPage(): Page {

        return this.page;

    }

    /**
     * Close browser.
     */
    public async close(): Promise<void> {

        console.log("Closing Browser...");

        await this.browser.close();

    }

}