/**
 * ExecutionRequest
 *
 * This model contains all information required
 * to execute an automation workflow.
 *
 * Today:
 *  - workflowName
 *  - url
 *
 * Future:
 *  - browser
 *  - country
 *  - environment
 *  - plugin
 *  - credentials
 *  - executionId
 */
export interface ExecutionRequest {

    /**
     * Workflow to execute.
     *
     * Example:
     * Login Workflow
     */
    workflowName: string;

    /**
     * Website URL.
     */
    url: string;

}