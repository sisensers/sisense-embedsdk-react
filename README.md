# Getting Started with Sisense Embed SDK React
Typescript React component for embedding [Sisense](https://www.sisense.com/platform/embedded-analytics/) into a react application, using [Sisense Embed SDK](https://sisense.dev/guides/embedding/embed-sdk.html) as a React Component.


Yes, it's true, I _would_ like like web searches for "how to embed Sisense into react" to find this page!

For a live preview of the Sisense React component being used in a sample application, check out [this link](https://sisensers.github.io/sisense-embedsdk-react-sampleapp/) or check out the source code [here](https://github.com/sisensers/sisense-embedsdk-react-sampleapp)

## Using the Sisense Embed SDK component in your react application

Install using npm
```
npm install --save sisensers/sisense-embedsdk-react
```

_Alternatively, clone this repo locally and run `npm install` followed by `npm run build`, and use the outputs from the 'dist' folder in your react application._

\
Import the module into your react application
```
import SisenseDashboardEmbed from 'sisense-embedsdk-react'
```
\
Minimum required is to provide a sisenseUrl and dashboardId in the props of the `SisenseDashboardEmbed` component:

```
<SisenseDashboardEmbed
  sisenseUrl={sisenseUrl}
  dashboardId={dashboardId}
/>
```
\
Other features can be contolled via the component props:

```
<SisenseDashboardEmbed
  sisenseUrl={sisenseUrl}
  urlParams={urlParams}
  dashboardId={dashboardId}
  frameHeight='calc(100vh - 100px)'
  frameWidth='100%'
  showLeftPane={false}
  showRightPane={true}
  showToolbar={false}
  themeId={sisenseThemeId}
  volatile={true}
  editMode={false}
  unmountShouldDestroySisenseFrame={false}
  unmountShouldUnloadEmbedSdk={false}
  onDashboardLoaded={(event: any, args: any) => handleDashboardLoaded(event, args)} //call your own function when the dashboard has loaded
  onDashboardFirstLoaded={(loadedDashboard: any) => setCurrentDashboardObject(loadedDashboard)}
/>
```

# Quickstart example
For a quickstart example, check out https://github.com/sisensers/sisense-embedsdk-react-sampleapp

![react-embedSDK](https://user-images.githubusercontent.com/9842660/232162477-1871de35-25dd-4936-8e31-949180004439.gif)
