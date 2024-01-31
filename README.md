# WatermarkRemover.io

Figma Plugin for [WatermarkRemover.io](WatermarkRemover.io), it helps users remove watermark from images, present in Figma files. 

## Installation

1. Open Figma and navigate to the 'Plugins' section.
2. Search for 'WatermarkRemover.io', or visit this [link]() to access the plugin directly.
3. Click 'Install', and the plugin will be added to your Figma account.


## Project Structure

- **`manifest.json`**: The configuration file, it details the plugin's name, unique ID, API version, and interactive menu options for users. It also specifies allowed domains for network access, ensuring secure functionality.

- **`plugin`**: Contains the core functionality with `index.ts` as the entry point. This script initializes the plugin and orchestrates its operations.

- **`ui`**: Manages the user interface. The `index.html` file, integrated via the `showUI` function in the plugin folder, displays the UI. The primary UI component is in  `App.tsx`, which outlines the interface layout and interactions.

## Development Process

1. **Clone Repository**:  

    `git clone https://github.com/pixelbin-dev/watermark-remover-figma-plugin.git` 

2. **Install Dependencies**: 

    `npm install -D`

3. **Build the Plugin**: 

    `npm run create:build`

4. **Add to Figma**: 
    - In Figma, navigate to 'Plugins' > 'Development' > 'New Plugin'.
    - Choose 'Link existing plugin' and select the `manifest.json` file from your plugin's build directory.

5. **Test and Develop**: Run the plugin within Figma for testing and further development. After making code changes, rebuild and reload the plugin in Figma as needed.

## References

1. [Figma's introduction to plugin development](https://www.figma.com/plugin-docs/intro/)
2. [Figma Plugin's with UI guide](https://github.com/thomas-lowry/figma-plugin-ds?tab=readme-ov-file#checkbox)
