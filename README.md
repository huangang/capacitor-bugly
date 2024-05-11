# capacitor-bugly

![npm](https://img.shields.io/npm/v/capacitor-bugly)

📱 Bugly plugin for Capacitor

## Install

```bash
npm install capacitor-bugly
npx cap sync
```

## Setup

Edit your `capacitor.config.json` like below

``` json
// capacitor.config.json
{
	"appId": "**.***.**",
	"appName": "Name",
	"plugins": {
		"Bugly": {
			"androidAppId": "**",
			"iOSAppId": "**",
			"debug": false
		}
	}
}
```

## API

<docgen-index>

* [`initCrashReport()`](#initcrashreport)
* [`setUserValue(...)`](#setuservalue)
* [`setUserSceneTag(...)`](#setuserscenetag)
* [Interfaces](#interfaces)

</docgen-index>

<docgen-api>
<!--Update the source file JSDoc comments and rerun docgen to update the docs below-->

### initCrashReport()

```typescript
initCrashReport() => Promise<void>
```

Manually initializing Bugly

--------------------


### setUserValue(...)

```typescript
setUserValue(options: SetUserValueOptions) => Promise<void>
```

Custom Map parameters can save some custom environment information when a crash occurs

| Param         | Type                                                                |
| ------------- | ------------------------------------------------------------------- |
| **`options`** | <code><a href="#setuservalueoptions">SetUserValueOptions</a></code> |

--------------------


### setUserSceneTag(...)

```typescript
setUserSceneTag(options: SetUserSceneTagOptions) => Promise<void>
```

Custom tags are used to indicate a certain "scene" in the app. When a crash occurs,
the "scene" where the crash occurs will be displayed,
based on the last set label, and the label ID must be greater than 0

| Param         | Type                                                                      |
| ------------- | ------------------------------------------------------------------------- |
| **`options`** | <code><a href="#setuserscenetagoptions">SetUserSceneTagOptions</a></code> |

--------------------


### Interfaces


#### SetUserValueOptions

| Prop        | Type                |
| ----------- | ------------------- |
| **`key`**   | <code>string</code> |
| **`value`** | <code>string</code> |


#### SetUserSceneTagOptions

| Prop      | Type                |
| --------- | ------------------- |
| **`tag`** | <code>number</code> |

</docgen-api>

# Inspiration

- [Bugly](https://bugly.qq.com/v2/)
