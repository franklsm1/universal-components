(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{267:function(module,exports,__webpack_require__){__webpack_require__(268),__webpack_require__(414),module.exports=__webpack_require__(415)},332:function(module,exports){},4:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return ROOT_URL})),__webpack_require__.d(__webpack_exports__,"c",(function(){return createScript})),__webpack_require__.d(__webpack_exports__,"b",(function(){return createCodeNote}));__webpack_require__(17),__webpack_require__(160),__webpack_require__(48),__webpack_require__(256);var ROOT_URL="https://universal-component-library.s3.amazonaws.com",createScript=function(){var widgetDiv=document.getElementById("widgetId"),newDiv=document.createElement("div");newDiv.id="widgetId",widgetDiv.replaceWith(newDiv);var script=document.createElement("script");return script.setAttribute("data-id","widgetId"),script},createCodeNote=function(script){var widgetDiv=document.getElementById(script.dataset.id),jsNote="const script = document.createElement('script');\n      script.setAttribute('data-id', '".concat("widgetId","');\n      script.src = '").concat(script.src,"';\n      document.body.appendChild(script);");return"<span>".concat(0<widgetDiv.outerHTML.indexOf("&quot;")?"NOTE: When data attributes contain arrays or objects the below code snippet shows `&quot;` HTML values as left double quotes (`“`) due to being stringified":"","</span>\n    <p>Component div to be placed in code where you want on UI:</p>\n    <code>\n      ").concat(widgetDiv.outerHTML.replace(/</,"&lt;").replace(/">/,'"<br/>>').replace(/ ([a-z-]*=)/g,"<br/>&nbsp;&nbsp;$1").replace(/=""/g,""),"\n      </code>\n      <p>JS snippet to hydrate component div on page (for frameworks):</p>\n      <code>\n        ").concat(jsNote.replace(/;/g,";<br/>"),"\n      </code>\n      <p>HTML snippet to hydrate component div on page (for pure HTML):</p>\n      <code>\n      ").concat(script.outerHTML.replace(/</,"&lt;").replace(/">/,'"<br/>>').replace(/ ([a-z-]*=)/g,"<br/>&nbsp;&nbsp;$1"),"\n    </code>")}},415:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var _storybook_html__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(163),_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(266);Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.addDecorator)(_storybook_addon_notes__WEBPACK_IMPORTED_MODULE_1__.withNotes),Object(_storybook_html__WEBPACK_IMPORTED_MODULE_0__.configure)(__webpack_require__(609),module)}.call(this,__webpack_require__(416)(module))},609:function(module,exports,__webpack_require__){var map={"./components/CustomAppBar/CustomAppBar.stories.js":610,"./components/DynamicCard/DynamicCard.stories.js":611,"./components/FoodTable/FoodTable.stories.js":612,"./components/ReactCard/ReactCard.stories.js":613};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=609},610:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DefaultBlueCustomAppBar",(function(){return DefaultBlueCustomAppBar})),__webpack_require__.d(__webpack_exports__,"GreenCustomAppBar",(function(){return GreenCustomAppBar})),__webpack_require__.d(__webpack_exports__,"OrangeCustomAppBar",(function(){return OrangeCustomAppBar}));var _utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_exports__.default={title:"Custom App Bar"};var appDrawerSrc="".concat(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.a,"/CustomAppBar.js"),createDefaultBlueCustomAppBarScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)();return script.src=appDrawerSrc,script},DefaultBlueCustomAppBar=function(){return createDefaultBlueCustomAppBarScript()};DefaultBlueCustomAppBar.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createDefaultBlueCustomAppBarScript())}};var createGreenCustomAppBarScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)(),widget=document.getElementById(script.dataset.id);return widget.dataset.color="green",widget.dataset.title="Green Title",script.src=appDrawerSrc,script},GreenCustomAppBar=function(){return createGreenCustomAppBarScript()};GreenCustomAppBar.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createGreenCustomAppBarScript())}};var createOrangeCustomAppBarScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)(),widget=document.getElementById(script.dataset.id);return widget.dataset.color="orange",widget.dataset.title="Orange Title",script.src=appDrawerSrc,script},OrangeCustomAppBar=function(){return createOrangeCustomAppBarScript()};OrangeCustomAppBar.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createOrangeCustomAppBarScript())}}},611:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ReactCard",(function(){return ReactCard})),__webpack_require__.d(__webpack_exports__,"AngularCard",(function(){return AngularCard}));var _utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_exports__.default={title:"Dynamic Card"};var dynamicCardSrc="".concat(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.a,"/DynamicCard.js"),createReactCardScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)(),widget=document.getElementById(script.dataset.id);return widget.dataset.cardImage="https://reactjs.org/logo-og.png",widget.dataset.cardHeader="React",widget.dataset.cardSubText="My preferred JavaScript library for building user interfaces",widget.dataset.cardLink="https://reactjs.org/",script.src=dynamicCardSrc,script},ReactCard=function(){return createReactCardScript()};ReactCard.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createReactCardScript())}};var createAngularCardScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)(),widget=document.getElementById(script.dataset.id);return widget.dataset.cardImage="https://banner2.cleanpng.com/20180420/sxw/kisspng-angularjs-ruby-on-rails-typescript-web-application-icon-hacker-5ad97b80139367.5630065415242023680802.jpg",widget.dataset.cardHeader="Angular",widget.dataset.cardSubText="Another JavaScript library for building user interfaces",widget.dataset.cardLink="https://angular.io/",script.src=dynamicCardSrc,script},AngularCard=function(){return createAngularCardScript()};AngularCard.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createAngularCardScript())}}},612:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"DesertFoodTable",(function(){return DesertFoodTable})),__webpack_require__.d(__webpack_exports__,"BreakfastFoodTable",(function(){return BreakfastFoodTable}));var _utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_exports__.default={title:"Food Table"};var appDrawerSrc="".concat(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.a,"/FoodTable.js");function createData(name,calories,fat,carbs,protein){return{name:name,calories:calories,fat:fat,carbs:carbs,protein:protein}}var desertDataRows=[createData("Frozen yogurt",159,6,24,4),createData("Ice cream sandwich",237,9,37,4.3),createData("Eclair",262,16,24,6),createData("Cupcake",305,3.7,67,4.3),createData("Gingerbread",356,16,49,3.9)],createDesertFoodTableScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)();return document.getElementById(script.dataset.id).dataset.tableData=JSON.stringify(desertDataRows),script.src=appDrawerSrc,script},DesertFoodTable=function(){return createDesertFoodTableScript()};DesertFoodTable.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createDesertFoodTableScript())}};var breakfastDataRows=[createData("Crescent",356,16,49,3.9),createData("Pancake",159,6,24,4),createData("Bacon",262,16,24,6),createData("Egg Sandwich",305,3.7,67,4.3),createData("Waffle",237,9,37,4.3)],createBreakfastFoodTableScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)();return document.getElementById(script.dataset.id).dataset.tableData=JSON.stringify(breakfastDataRows),script.src=appDrawerSrc,script},BreakfastFoodTable=function(){return createBreakfastFoodTableScript()};BreakfastFoodTable.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createBreakfastFoodTableScript())}}},613:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"OrangeReactCard",(function(){return OrangeReactCard}));var _utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(4);__webpack_exports__.default={title:"Card using project image"};var reactCardSrc="".concat(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.a,"/ReactCard.js"),createOrangeReactCardScript=function(){var script=Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.c)();return document.getElementById(script.dataset.id).dataset.cardColor="orange",script.src=reactCardSrc,script},OrangeReactCard=function(){return createOrangeReactCardScript()};OrangeReactCard.story={parameters:{notes:Object(_utils_storybookHelpers__WEBPACK_IMPORTED_MODULE_0__.b)(createOrangeReactCardScript())}}}},[[267,1,2]]]);
//# sourceMappingURL=main.38758b4389cf699ec1ba.bundle.js.map