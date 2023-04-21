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
  showLeftPane={false}
  showRightPane={true}
  showToolbar={false}
  themeId={sisenseThemeId}
  volatile={true}
  editMode={false}
  unmountShouldDestroySisenseFrame={false}
  unmountShouldUnloadEmbedSdk={false}
  onDashboardLoaded={(event: any, args: any) => handleDashboardLoaded(event, args)}
  onDashboardFirstLoaded={(loadedDashboard: any) => setCurrentDashboardObject(loadedDashboard)}
/>
```
