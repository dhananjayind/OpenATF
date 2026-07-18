import { IPlugin } from "../../shared/interfaces/IPlugin";
import { WebPlugin } from "../../plugins/web/WebPlugin";

/**
 * PluginManager
 *
 * Responsibility:
 * ----------------
 * Loads the appropriate plugin.
 *
 * Future:
 * - Web Plugin
 * - Salesforce Plugin
 * - SAP Plugin
 * - Mobile Plugin
 */
export class PluginManager {

    /**
     * Returns the requested plugin.
     *
     * @param pluginName Name of the plugin
     */
    public getPlugin(pluginName: string): IPlugin {

        console.log(`Loading Plugin: ${pluginName}`);

        switch (pluginName.toLowerCase()) {

            case "web":
                return new WebPlugin();

            default:
                throw new Error(`Plugin '${pluginName}' not found.`);
        }
    }
}