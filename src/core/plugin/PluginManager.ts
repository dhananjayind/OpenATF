/**
 * PluginManager
 *
 * Responsibility:
 * ----------------
 * Manages all plugins available in OpenATF.
 *
 * Today:
 * - Returns Web Plugin
 *
 * Future:
 * - Load Salesforce Plugin
 * - Load SAP Plugin
 * - Load plugins dynamically
 */

import { WebPlugin } from "./web/WebPlugin";

export class PluginManager {

    /**
     * Returns the plugin based on plugin name.
     *
     * @param pluginName Name of the plugin
     */
    public getPlugin(pluginName: string) {

        console.log(`Loading Plugin : ${pluginName}`);

        switch (pluginName.toLowerCase()) {

            case "web":
                return new WebPlugin();

            default:
                throw new Error(`Plugin '${pluginName}' not found.`);
        }

    }

}