import { CommandProcessor } from "./core/command/CommandProcessor";

async function main(): Promise<void> {

    console.log("==================================");
    console.log("      OpenATF Started");
    console.log("==================================");

    // Create Command Processor
    const commandProcessor = new CommandProcessor();

    // Process user command
    await commandProcessor.process("Run Login Test");

}

// Start application
main().catch((error) => {
    console.error("Application Failed");
    console.error(error);
});