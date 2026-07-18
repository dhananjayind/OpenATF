
import { ExecutionRequest } from "../../../shared/models/ExecutionRequest";

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
export class WebPlugin {

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