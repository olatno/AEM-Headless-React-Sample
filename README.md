# AEM-React-Sample

This repository corresponds to the fully wired React + AEM Headless template.

To integrate:
1. Copy the `ui.apps` and `ui.content` structures into your AEM Maven project.
2. Copy the `react-app` directory as your front-end root.
3. Install dependencies and build:
   ```sh
   cd react-app
   npm install
   npm run build
   ```
4. Deploy clientlibs and ensure `clientlib-react` loads.
