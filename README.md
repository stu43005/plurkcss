# 我的 Plurk 自訂佈景

使用[SASS語言](http://sass-lang.com/)並以結構化方式表示，使用前須先建置成CSS檔案。

## 如何建置

### 需求
* [NPM](https://www.npmjs.org/): [Node.js](https://nodejs.org/) package manager >= 0.8.0
* [Grunt](http://gruntjs.com/) CLI >= 0.4.x
  * Installing the CLI by command: `npm install -g grunt-cli`

### 建置
1. 安裝所需的packages: `npm install`
2. 使用Grunt建置專案: `grunt`
3. 建置完成的CSS檔案將存放在stylesheets資料夾內

## 如何套用佈景
1. 進入噗浪[自訂佈景](https://www.plurk.com/Settings/show?page=theme)設定
2. 將CSS檔案內容貼到`自訂佈景風格`欄位內
  * **注意此處不能直接貼上SCSS檔案內容**
3. 點擊儲存並更新即可
