import { chromium, Browser, BrowserContext, Page } from "playwright";

/**
 * BrowserManager
 *
 * Responsibility:
 * ----------------
 * Manages browser lifecycle.
 */
export class BrowserManager {

        private browser!: Browser;
        private context!: BrowserContext;
         private page!: Page;

    /**
     * Launches browser and returns browser session.
     */
    public async launchBrowser(): Promise<{
        browser: Browser;
        context: BrowserContext;
        page: Page;
    }> {

        console.log("Launching browser...");

        const browser = await chromium.launch({
            headless: false
        });

        const context = await browser.newContext();

        const page = await context.newPage();

        return {
            browser,
            context,
            page
        };
    }

        /**
     * Returns current page.
     */
    public getPage(): Page {

        return this.page;

    }
    /**
     * Closes browser.
     *
     * @param browser Active browser instance
     */
    public async close(browser: Browser): Promise<void> {

        console.log("Closing browser...");

        await browser.close();
    }

}