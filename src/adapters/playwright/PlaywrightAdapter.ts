import { Page } from "playwright";

/**
 * PlaywrightAdapter
 *
 * Responsibility:
 * ----------------
 * Perform browser actions.
 *
 * It does NOT create or close browser.
 */
export class PlaywrightAdapter {

    /**
     * Open website.
     */
    public async openUrl(page: Page, url: string): Promise<void> {

        console.log(`Opening : ${url}`);

        await page.goto(url);

        await page.waitForLoadState("networkidle");

    }

    /**
     * Print page title.
     */
    public async printTitle(page: Page): Promise<void> {

        const title = await page.title();

        console.log("-----------------------------");
        console.log(`Page Title : ${title}`);
        console.log("-----------------------------");

    }

}