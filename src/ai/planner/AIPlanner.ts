import { ExecutionPlan } from "../model/ExecutionPlan";

/**
 * AIPlanner
 *
 * Responsibility:
 * ----------------
 * Understands the user command and creates an Execution Plan.
 *
 * Current Version:
 * ----------------
 * Uses hardcoded values.
 *
 * Future Version:
 * ----------------
 * Will call an LLM (Qwen3) to understand the command.
 */
export class AIPlanner {

    /**
     * Generate an execution plan.
     *
     * @param command User command
     * @returns ExecutionPlan
     */
    public createPlan(command: string): ExecutionPlan {

        console.log("--------------------------------");
        console.log("AI Planner Started");
        console.log("--------------------------------");

        console.log(`Understanding command: ${command}`);

        /**
         * TODO:
         * Replace this hardcoded plan with LLM response.
         */
        const plan: ExecutionPlan = {

            goal: "Execute Login Test",

            plugin: "web",

            workflow: "Login",

            application: "Salesforce",

            country: "Germany",

            environment: "UAT"

        };

        console.log("Execution Plan Created.");

        return plan;

    }

}