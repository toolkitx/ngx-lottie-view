## Lottie component for Angular

[![npm version](https://badge.fury.io/js/ngx-lottie-view.svg)](https://badge.fury.io/js/ngx-lottie-view)

Lottie is a mobile library for Android and iOS that parses [Adobe After Effects](http://www.adobe.com/products/aftereffects.html) animations exported as JSON with [bodymovin](https://github.com/bodymovin/bodymovin) and renders them natively on mobile!

### Install

```bash
npm install ngx-lottie-view lottie-web --save
```
 
### Usage

1. Import module

```javascript

import { NgxLottieViewModule } from 'ngx-lottie-view';

@NgModule({
  declarations: [
    YourComponent
  ],
  imports: [
    ...,
    NgxLottieViewModule // Import NgxLottieViewModule
  ],
  bootstrap: [YourComponent]
})
export class YourModule { }

```
2. Add component
```html
<ngx-lottie-view path="your-json-path.json"
                 style="width: 200px; height: 200px;">
</ngx-lottie-view>
```

### APIs
#### Props
| Prop     | Description                                                         | Default |
|----------|---------------------------------------------------------------------|---------|
| path     | The relative path to the animation object                           | null    |
| loop     | A boolean/number flag indicating whether or not the animation should loop. | true    |
| render   | 'svg' / 'canvas' / 'html' to set the renderer                       | svg     |
| autoPlay | true / false it will start playing as soon as it is ready           | true    |

#### Events
| Output            | Description |
|-------------------|-------------|
| animationLoad     | DOMLoaded   |
| animationComplete | complete    |




