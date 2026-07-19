
import { ExecutionRequest } from "../../shared/models/ExecutionRequest";
import { IPlugin } from "../../shared/interfaces/IPlugin";
import { ExecutionPlan } from "../../ai/model/ExecutionPlan";


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
    public getExecutionRequest(plan: ExecutionPlan): ExecutionRequest {

        console.log("Loading Web Plugin...");

        return {

            workflowName: plan.workflow,

            url: this.getApplicationUrl(plan)

        };

    }

    /**
 * Returns application URL based on execution plan.
 */
    private getApplicationUrl(plan: ExecutionPlan): string {

        if (plan.application === "Salesforce") {
            return "https://test.salesforce.com";
        }

        return "https://example.com";
    }

}