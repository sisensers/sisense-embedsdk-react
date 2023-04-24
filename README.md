# Getting Started with Sisense EmbedSDK React

## Using the EmbedSDK component in your application

Install using npm
```
npm install --save sisensers/sisense-embedsdk-react
```
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
