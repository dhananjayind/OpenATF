
import { ExecutionRequest } from "../../shared/models/ExecutionRequest";
import { IPlugin } from "../../shared/interfaces/IPlugin";


/**
 * WebPlugin
 *
 * Responsibility:
 * ----------------
 * Provides execution details for a web automation.
 *
 * Future:
 * - Read configuration
 * - Read environment
 * - Read browser
 * - Read credentials
 */
export class WebPlugin implements IPlugin {

    /**
     * Build execution request.
     */
    public getExecutionRequest(): ExecutionRequest {

        console.log("Loading Web Plugin...");

        return {

            workflowName: "Login Workflow",

            url: "https://example.com"

        };

    }

}