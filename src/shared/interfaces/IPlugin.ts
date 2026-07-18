import { ExecutionRequest } from "../models/ExecutionRequest";

/**
 * IPlugin
 *
 * Common contract for all plugins.
 *
 * Every platform plugin must implement this interface.
 *
 * Example:
 * Web Plugin
 * Salesforce Plugin
 * SAP Plugin
 * Mobile Plugin
 */
export interface IPlugin {

    /**
     * Creates an execution request.
     *
     * Returns all details required by
     * the Execution Service.
     */
    getExecutionRequest(): ExecutionRequest;

}