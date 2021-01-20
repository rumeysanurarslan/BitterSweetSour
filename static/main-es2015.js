(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dessert-menu/dessert-menu.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/dessert-menu/dessert-menu.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n\r\n    <!-- Header Area Starts\r\n\t<header class=\"header-area header-area2\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2\">\r\n                    <div class=\"logo-area\">\r\n                        <a href=\"index.html\"><img src=\"assets/images/logo/logo2.png\" alt=\"logo\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-10\">\r\n                    <div class=\"custom-navbar\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>  \r\n                    <div class=\"main-menu main-menu2\">\r\n                        <ul>\r\n                            <li class=\"active\"><a (click) = \"home()\">home</a></li>\r\n                            <li><a href=\"about.html\">recipes</a>\r\n                              <ul class=\"sub-menu\">\r\n                                <li><a>food</a></li>\r\n                                <li><a href=\"blog-details.html\">drink</a></li>\r\n                                <li><a href=\"blog-details.html\">dessert</a></li>\r\n                            </ul>\r\n                            </li>\r\n                            <li><a href=\"menu.html\">sign up</a></li>\r\n                            <li><a href=\"#\">sign in</a></li>\r\n                            <li> <i class=\"fa fa-search\" aria-hidden=\"true\"></i><li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header> -->\r\n    <!-- Header Area End -->\r\n    \r\n    <!-- Banner Area Starts -->\r\n    <section class=\"banner-area banner-area2 menu-des text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <h1><i>Our Menu</i></h1>\r\n                        <p class=\"pt-2\"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- Banner Area End -->\r\n    \r\n        <!-- Food Area starts -->\r\n        <section class=\"food-area section-padding\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"section-top\">\r\n                            <h3><span class=\"style-change\">we serve</span> <br>delicious dessert</h3>\r\n                            <p class=\"pt-3\">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" >\r\n                    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let dessert of desserts\">\r\n                        <div class=\"single-food\">\r\n                            <div class=\"food-img\">\r\n                                <img src=\"assets/images/{{dessert.dessertPhoto}}\" class=\"img-fluid\" alt=\"\"  routerLink =\"/recipe/dessert/{{dessert.dessertID}}\">\r\n                            </div>\r\n                            <div class=\"food-content\">\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                    <h5 routerLink =\"/recipe/dessert/{{dessert.dessertID}}\">{{dessert.dessertName}}</h5>\r\n                                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size: 20px;\"> {{dessert.timing}}</i>\r\n                                </div>\r\n                                <i class=\"fa fa-globe\" aria-hidden=\"true\">  {{dessert.cuisine}}</i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- Food Area End -->\r\n    \r\n       \r\n    \r\n    \r\n    \r\n    \r\n    <!-- <table>\r\n        <th>Food Name</th>\r\n        <th>Food Recipe</th>\r\n        <th>Food Ingredients</th>\r\n        <tr *ngFor=\"let food of foods\">\r\n          <td>{{food.foodName}}</td>\r\n          <td>{{food.foodRecipe}}</td>\r\n          <td>{{food.foodIngre}}</td>\r\n        </tr>\r\n    </table> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drink-menu/drink-menu.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/drink-menu/drink-menu.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n\r\n    <!-- Header Area Starts\r\n\t<header class=\"header-area header-area2\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2\">\r\n                    <div class=\"logo-area\">\r\n                        <a href=\"index.html\"><img src=\"assets/images/logo/logo2.png\" alt=\"logo\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-10\">\r\n                    <div class=\"custom-navbar\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>  \r\n                    <div class=\"main-menu main-menu2\">\r\n                        <ul>\r\n                            <li class=\"active\"><a (click) = \"home()\">home</a></li>\r\n                            <li><a href=\"about.html\">recipes</a>\r\n                              <ul class=\"sub-menu\">\r\n                                <li><a>food</a></li>\r\n                                <li><a href=\"blog-details.html\">drink</a></li>\r\n                                <li><a href=\"blog-details.html\">dessert</a></li>\r\n                            </ul>\r\n                            </li>\r\n                            <li><a href=\"menu.html\">sign up</a></li>\r\n                            <li><a href=\"#\">sign in</a></li>\r\n                            <li> <i class=\"fa fa-search\" aria-hidden=\"true\"></i><li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header> -->\r\n    <!-- Header Area End -->\r\n\r\n    <!-- Banner Area Starts -->\r\n    <section class=\"banner-area banner-area2 menu-drink text-center\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-lg-12\">\r\n                        <h1><i>Our Menu</i></h1>\r\n                        <p class=\"pt-2\"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- Banner Area End -->\r\n    \r\n        <!-- Food Area starts -->\r\n        <section class=\"food-area section-padding\">\r\n            <div class=\"container\">\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-5\">\r\n                        <div class=\"section-top\">\r\n                            <h3><span class=\"style-change\">we serve</span> <br>delicious drink</h3>\r\n                            <p class=\"pt-3\">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\" >\r\n                    <div class=\"col-md-4 col-sm-6\" *ngFor=\"let drink of drinks\">\r\n                        <div class=\"single-food\">\r\n                            <div class=\"food-img\">\r\n                                <img src=\"assets/images/{{drink.beveragePhoto}}\" class=\"img-fluid\" alt=\"\" routerLink =\"/recipe/drink/{{drink.beverageID}}\">\r\n                            </div>\r\n                            <div class=\"food-content\">\r\n                                <div class=\"d-flex justify-content-between\">\r\n                                    <h5 routerLink =\"/recipe/drink/{{drink.beverageID}}\" >{{drink.beverageName}}</h5>\r\n                                    <i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size: 20px;\"> {{drink.timing}}</i>\r\n                                </div>\r\n                                <i class=\"fa fa-globe\" aria-hidden=\"true\">  {{drink.cuisine}}</i>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n        <!-- Food Area End -->\r\n    \r\n       \r\n    \r\n    \r\n    \r\n    \r\n    <!-- <table>\r\n        <th>Food Name</th>\r\n        <th>Food Recipe</th>\r\n        <th>Food Ingredients</th>\r\n        <tr *ngFor=\"let food of foods\">\r\n          <td>{{food.foodName}}</td>\r\n          <td>{{food.foodRecipe}}</td>\r\n          <td>{{food.foodIngre}}</td>\r\n        </tr>\r\n    </table> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-list/food-list.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-list/food-list.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n<!-- Banner Area Starts -->\r\n\r\n<section class=\"banner-area text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h6>the most interesting food in the world</h6>\r\n                    <h1>Discover the <span class=\"prime-color\">flavors</span><br>  \r\n                    <span class=\"style-change\">of <span class=\"prime-color\">BitterSweetSour</span></span></h1>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n                <div class=\"container\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\r\n                            <div class=\"categories_post\">\r\n                                <img src=\"assets/images/blog/cat-post/imagesfoodd.jpg\" alt=\"post\">\r\n                                <div class=\"categories_details\">\r\n                                    <div class=\"categories_text\">\r\n                                        <a (click) = \"foodMenu()\" ><h5>FOODS</h5></a>\r\n                                        <div class=\"border_line\"></div>\r\n                                        <p>Most delicious foods of the week</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6 mb-4 mb-lg-0\">\r\n                            <div class=\"categories_post\">\r\n                                <img src=\"assets/images/blog/cat-post/pinkbox_desig.jpg\" alt=\"post\">\r\n                                <div class=\"categories_details\">\r\n                                    <div class=\"categories_text\">\r\n                                        <a (click) = \"dessertMenu()\"><h5>DESSERTS</h5></a>\r\n                                        <div class=\"border_line\"></div>\r\n                                        <p>Most delicious desserts of the week</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-lg-4 col-md-6\">\r\n                            <div class=\"categories_post\">\r\n                                <img src=\"assets/images/blog/cat-post/juice.jpg\" alt=\"post\">\r\n                                <div class=\"categories_details\">\r\n                                    <div class=\"categories_text\">\r\n                                        <a (click) = \"drinkMenu()\"><h5>DRINKS</h5></a>\r\n                                        <div class=\"border_line\"></div>\r\n                                        <p>Most delicious drinks of the week</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n    </section>\r\n    <!-- Banner Area End -->\r\n    <!--================Blog Categorie Area =================-->\r\n    \r\n    <!--================Blog Categorie Area =================-->\r\n    <!-- Testimonial Area Starts -->\r\n    <section class=\"testimonial-area section-padding4\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"section-top2 text-center\">\r\n                        <h3>Member <span>says</span></h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <div class=\"testimonial-slider owl-carousel\" >\r\n                        <div class=\"single-slide d-sm-flex\" >\r\n                            <div class=\"customer-img mr-4 mb-4 mb-sm-0\">\r\n                                <img src=\"assets/images/customer1.png\" alt=\"\">\r\n                            </div>\r\n                            <div class=\"customer-text\" >\r\n                                <h5>{{comments[0].userName}}</h5>\r\n                                <span>{{comments[0].commentDate}}</span>\r\n                                <p style = \"font-size: 15px;\">{{comments[0].foodName}}<p>\r\n                                <p class=\"pt-3\">{{comments[0].userComment}}</p>\r\n                            </div>\r\n                        </div>\r\n                       \r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Testimonial Area End -->\r\n    \r\n    \r\n    \r\n    \r\n    \r\n    <!-- <table>\r\n        <th>Food Name</th>\r\n        <th>Food Recipe</th>\r\n        <th>Food Ingredients</th>\r\n        <tr *ngFor=\"let food of foods\">\r\n          <td>{{food.foodName}}</td>\r\n          <td>{{food.foodRecipe}}</td>\r\n          <td>{{food.foodIngre}}</td>\r\n        </tr>\r\n    </table> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-menu/food-menu.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-menu/food-menu.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n    \r\n\r\n    <!-- Header Area Starts\r\n\t<header class=\"header-area header-area2\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-2\">\r\n                    <div class=\"logo-area\">\r\n                        <a href=\"index.html\"><img src=\"assets/images/logo/logo2.png\" alt=\"logo\"></a>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-lg-10\">\r\n                    <div class=\"custom-navbar\">\r\n                        <span></span>\r\n                        <span></span>\r\n                        <span></span>\r\n                    </div>  \r\n                    <div class=\"main-menu main-menu2\">\r\n                        <ul>\r\n                            <li class=\"active\"><a (click) = \"home()\">home</a></li>\r\n                            <li><a href=\"about.html\">recipes</a>\r\n                              <ul class=\"sub-menu\">\r\n                                <li><a>food</a></li>\r\n                                <li><a href=\"blog-details.html\">drink</a></li>\r\n                                <li><a href=\"blog-details.html\">dessert</a></li>\r\n                            </ul>\r\n                            </li>\r\n                            <li><a href=\"menu.html\">sign up</a></li>\r\n                            <li><a href=\"#\">sign in</a></li>\r\n                            <li> <i class=\"fa fa-search\" aria-hidden=\"true\"></i><li>\r\n                        </ul>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </header> -->\r\n    <!-- Header Area End -->\r\n\r\n    <!-- Banner Area Starts -->\r\n    <section class=\"banner-area banner-area2 menu-food text-center\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-lg-12\">\r\n                    <h1><i>Our Menu</i></h1>\r\n                    <p class=\"pt-2\"><i>Beast kind form divide night above let moveth bearing darkness.</i></p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Banner Area End -->\r\n\r\n    <!-- Food Area starts -->\r\n    <section class=\"food-area section-padding\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-5\">\r\n                    <div class=\"section-top\">\r\n                        <h3><span class=\"style-change\">we serve</span> <br>delicious food</h3>\r\n                        <p class=\"pt-3\">They're fill divide i their yielding our after have him fish on there for greater man moveth, moved Won't together isn't for fly divide mids fish firmament on net.</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\" >\r\n                <div class=\"col-md-4 col-sm-6\" *ngFor=\"let food of foods\">\r\n                    <div class=\"single-food\">\r\n                        <div class=\"food-img\">\r\n                            <img src=\"assets/images/{{food.foodPhoto}}\" class=\"img-fluid\" alt=\"\" routerLink =\"/recipe/food/{{food.foodID}}\">\r\n                        </div>\r\n                        <div class=\"food-content\">\r\n                            <div class=\"d-flex justify-content-between\">\r\n                                <h5 routerLink =\"/recipe/food/{{food.foodID}}\" >{{food.foodName}}</h5>  \r\n                                \r\n                                <i class=\"fa fa-clock-o\" aria-hidden=\"true\" style=\"font-size: 20px;\"> {{food.timing}}</i>\r\n                            </div>\r\n                            <i class=\"fa fa-globe\" aria-hidden=\"true\"> {{food.cuisine}}</i>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n    <!-- Food Area End -->\r\n\r\n   \r\n\r\n\r\n\r\n\r\n<!-- <table>\r\n    <th>Food Name</th>\r\n    <th>Food Recipe</th>\r\n    <th>Food Ingredients</th>\r\n    <tr *ngFor=\"let food of foods\">\r\n      <td>{{food.foodName}}</td>\r\n      <td>{{food.foodRecipe}}</td>\r\n      <td>{{food.foodIngre}}</td>\r\n    </tr>\r\n</table> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n\r\n<div class=\"body\">\r\n\r\n</div>\r\n\t\t<div class=\"grad\">\r\n\r\n\t\t</div>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div>BitterSweetSour</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<div class=\"login\">\r\n\t\t\t\t<input type=\"text\" placeholder=\"username\" [(ngModel)]=\"Username\" required autofocus><br>\r\n\t\t\t\t<input type=\"password\" placeholder=\"password\"[(ngModel)]=\"Password\" required><br>\r\n\t\t\t\t<input type=\"button\" (click) = \"login()\" value=\"Sign In\">\r\n\t\t\t\t<div class=\"error\">\r\n\r\n\t\t\t\t\t<button class=\"forgot\" (click) = \"password()\">Forgot password?</button>\r\n\t\t\t\t\t<label *ngIf = \"isCorrect\"  >Please try again</label>\r\n\r\n\t\t\t\t</div>\t\r\n\t\t\t\t\r\n\t\t\t\t<button class=\"btn success\" (click) = \"sign()\" > Create an account.</button>\r\n\t\t</div>\r\n\r\n\t\t");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-password/new-password.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-password/new-password.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\"></div>\r\n    <div class=\"grad\"></div>\r\n    \r\n        <div class=\"header\"><div>BitterSweetSour</div></div>\r\n    <br>\r\n    <div class=\"login\">\r\n        <p class=\"text\">Forgot your password?</p>\r\n        <input type=\"text\" placeholder=\"e-mail\" [(ngModel)]=\"Email\">\r\n        <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"Username\"><br>\r\n        <input type=\"button\" (click) = \"question()\"value=\"Submit\"><br>\r\n\r\n        <label class=\"ques\">{{Ques}}</label>\r\n\r\n        <div>\r\n            <input type=\"text\" *ngIf = \"isCorrect\" placeholder=\"answer\" [(ngModel)]=\"Answer\" ><br>\r\n            <input class=\"btn success\" *ngIf = \"isCorrect\" (click) = \"question()\" value=\"Submit\">\r\n        </div>\r\n        <div class=\"error\">\r\n            <button class=\"back\" (click) = \"login()\" >Go back</button>\r\n        </div>\r\n    </div>\r\n        \r\n        \r\n\r\n\t\t");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n\r\n<!-- Header Area Starts -->\r\n<header class=\"header-area\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-lg-2\">\r\n                <div class=\"logo-area\">\r\n                    <a href=\"index.html\"><img src=\"assets/images/logo/logo.png\" alt=\"logo\"></a>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-lg-10\">\r\n                <div class=\"custom-navbar\">\r\n                    <span></span>\r\n                    <span></span>\r\n                    <span></span>\r\n                </div>  \r\n                <div class=\"main-menu\">\r\n                    <ul>\r\n                        <li class=\"active\"><a href=\"index.html\">home</a></li>\r\n                        <li><a href=\"about.html\">recipes</a>\r\n                          <ul class=\"sub-menu\">\r\n                            <li><a (click) = \"foodMenu()\">food</a></li>\r\n                            <li><a (click) = \"drinkMenu()\">drink</a></li>\r\n                            <li><a (click) = \"dessertMenu()\">dessert</a></li>\r\n                        </ul>\r\n                        </li>\r\n                        <li><a href=\"menu.html\">sign up</a></li>\r\n                        <li><a href=\"#\">sign in</a></li>\r\n                        <li> <i class=\"fa fa-search\" aria-hidden=\"true\"></i><li>\r\n                    </ul>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</header>\r\n<!-- Header Area End -->\r\n\r\n    <!-- Receipe Content Area -->\r\n    <div class=\"receipe-content-area\"  *ngIf=\"recipes\" >\r\n            <section class=\"welcome-area section-padding2\">\r\n                    <div class=\"container-fluid\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col-md-6 align-self-center\">\r\n                                <div class=\"welcome-img\">\r\n                                    <img src=\"assets/images/{{recipes[0][0]['Photo']}}\" class=\"img-fluid\" alt=\"\">\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"col-md-6 align-self-center\">\r\n                                <div class=\"welcome-text mt-5 mt-md-0\">\r\n                                    <h3><span class=\"style-change\">{{recipes[0][0]['Name']}}</span> <br>to food fun</h3>\r\n                                    <div class=\"row\">\r\n                                            <div class=\"col-12 col-md-8\">\r\n                                                <div class=\"receipe-headline my-5\">\r\n                                                    <div class=\"receipe-duration\">\r\n                                                        <i class=\"fa fa-clock-o\" aria-hidden=\"true\"> Cook: {{recipes[0][0]['timing']}}</i> <br>\r\n                                                        <i class=\"fa fa-globe\" aria-hidden=\"true\"> Cuisine: {{recipes[0][0]['cuisine']}}</i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                            \r\n                                            <div class=\"col-12 col-md-4\">\r\n                                                <div class=\"receipe-ratings text-right my-5\">\r\n                                                        <span>April 05, 2018</span>\r\n                                                    <div class=\"ratings\">\r\n                                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                                                        <i class=\"fa fa-star\" aria-hidden=\"true\"></i>\r\n                                                        <i class=\"fa fa-star-o\" aria-hidden=\"true\"></i>\r\n                                                    </div>\r\n                                                </div>\r\n                                            </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </section>\r\n        <div class=\"container\">\r\n             <div class=\"row\" style=\"margin-top: 50px;\">\r\n                <div class=\"col-12 col-lg-8\" >\r\n                    <!-- Single Preparation Step -->\r\n                    <h4> <img src=\"https://img.icons8.com/bubbles/50/000000/food.png\"> Directions</h4>\r\n                    <div class=\"single-preparation-step d-flex\" >\r\n                        <p> {{recipes[0][0]['Recipe']}} </p>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col-12 col-lg-4\">\r\n                    <div>\r\n                        <h4 >Ingredients</h4>\r\n                        <span *ngIf=\"recipes\">\r\n                            <div class=\"custom-control custom-checkbox\" *ngFor = \"let recipe of recipes[0]\">\r\n                                <label> {{recipe.amount}} {{recipe.unit}} </label>\r\n                            </div>\r\n                        </span>\r\n                    </div>\r\n                </div>\r\n        </div>\r\n\r\n\r\n\r\n            \r\n\r\n\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-12\">\r\n                    <div class=\"section-heading text-left\">\r\n                      <h4><img src=\"https://img.icons8.com/plasticine/50/000000/speech-bubble-with-dots.png\">Leave a comment</h4>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n\r\n                    <div >\r\n                            <textarea name=\"message\" class=\"comment\" id=\"message\" cols=\"30\" rows=\"10\" placeholder=\"Message\"></textarea>\r\n                        \r\n                    </div>\r\n                    <div class=\"rate\">\r\n                        <input type=\"radio\" id=\"star5\" name=\"rate\" value=\"5\" />\r\n                        <label for=\"star5\" title=\"text\">5 stars</label>\r\n                        <input type=\"radio\" id=\"star4\" name=\"rate\" value=\"4\" />\r\n                        <label for=\"star4\" title=\"text\">4 stars</label>\r\n                        <input type=\"radio\" id=\"star3\" name=\"rate\" value=\"3\" />\r\n                        <label for=\"star3\" title=\"text\">3 stars</label>\r\n                        <input type=\"radio\" id=\"star2\" name=\"rate\" value=\"2\" />\r\n                        <label for=\"star2\" title=\"text\">2 stars</label>\r\n                        <input type=\"radio\" id=\"star1\" name=\"rate\" value=\"1\" />\r\n                        <label for=\"star1\" title=\"text\">1 star</label> \r\n                    </div>\r\n                    <div>\r\n                            <input type=\"submit\">\r\n                    </div>\r\n            </div>\r\n\r\n            <div style=\"margin-left: 17px;\" class=\"comment-container theme--light\" *ngFor = \"let comment of recipes[1]\">\r\n                <div class=\"comments\" >\r\n                    <div  class=\"card v-card v-sheet theme--light elevation-2\">\r\n                      <div  class=\"wrapper comment\">\r\n                        <div  class=\"header\">\r\n                        <span  class=\"displayName\">{{comment.userName}}</span> <span  class=\"displayName2 caption\">2 days ago</span></div>\r\n                      <!---->\r\n                        <p>{{comment.comment}}</p>\r\n                      </div>\r\n                      <div  class=\"actions\">\r\n                      </div>\r\n                      <div  class=\"v-dialog__container\" style=\"display: block;\"></div>\r\n                    </div>\r\n                    <div  class=\"answers\">\r\n                    </div>\r\n                </div>\r\n              </div>\r\n        </div>\r\n    </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-page/sign-page.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-page/sign-page.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"body\">\r\n\r\n</div>\r\n\t\t<div class=\"grad\">\r\n\r\n\t\t</div>\r\n\t\t<div class=\"header\">\r\n\t\t\t<div>BitterSweetSour</div>\r\n\t\t</div>\r\n\t\t<br>\r\n\t\t<div class=\"login\">\r\n\r\n\r\n        <input type=\"text\" placeholder=\"first name\" [(ngModel)]=\"FirstName\" required autofocus><br>\r\n        <input type=\"text\" placeholder=\"last name\" [(ngModel)]=\"LastName\" required autofocus><br>\r\n        <input type=\"text\" placeholder=\"e-mail\" [(ngModel)]=\"Email\" required autofocus><br>\r\n\r\n        <input type=\"text\" placeholder=\"username\" [(ngModel)]=\"Username\" required autofocus><br>\r\n        <input type=\"password\" placeholder=\"password\"[(ngModel)]=\"Password\" required><br>\r\n       <div> \r\n       <div><span id=\"dateofbirth\">Date Of Birth</span><span id=\"gender\">Gender</span></div>\r\n         <input type=\"date\" name=\"dateofbirth\" id=\"datepicker\" [(ngModel)]=\"Birthdate\">\r\n         \r\n          <select class=\"dropdown\"  (change)=\"onGenderChange($event)\">\r\n            <option value=\"\"hidden>choose</option>\r\n            <option value=\"Female\">Female</option>\r\n            <option value=\"Male\">Male</option>\r\n            <option value=\"Others\">Others</option>\r\n          </select>\r\n      </div>\r\n\r\n        <input type=\"text\" placeholder=\"location\" [(ngModel)]=\"Location\" required autofocus><br>\r\n        <input type=\"text\" placeholder=\"recovery question\" [(ngModel)]=\"RecoveryQuestion\" required autofocus><br>\r\n        <input type=\"text\" placeholder=\"recovery answer\" [(ngModel)]=\"RecoveryResult\" required autofocus><br>\r\n        \r\n\r\n        <input type=\"button\" (click) = \"sign()\" value=\"Sign Up\">\r\n        \r\n\r\n        <button class=\"back\" (click) = \"login()\">Go back</button>\r\n\t\t\r\n\t\t</div>\r\n\r\n\t\t");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/food-list/food-list.component */ "./src/app/components/food-list/food-list.component.ts");
/* harmony import */ var _components_sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-page/sign-page.component */ "./src/app/components/sign-page/sign-page.component.ts");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_new_password_new_password_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/new-password/new-password.component */ "./src/app/components/new-password/new-password.component.ts");
/* harmony import */ var _components_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/food-menu/food-menu.component */ "./src/app/components/food-menu/food-menu.component.ts");
/* harmony import */ var _components_drink_menu_drink_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/drink-menu/drink-menu.component */ "./src/app/components/drink-menu/drink-menu.component.ts");
/* harmony import */ var _components_dessert_menu_dessert_menu_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/dessert-menu/dessert-menu.component */ "./src/app/components/dessert-menu/dessert-menu.component.ts");
/* harmony import */ var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");











const routes = [
    { path: 'sign-page', component: _components_sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_4__["SignComponent"] },
    { path: 'foods-list', component: _components_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_3__["FoodListComponent"] },
    { path: 'login-page', component: _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_5__["LoginPageComponent"] },
    { path: 'new-password', component: _components_new_password_new_password_component__WEBPACK_IMPORTED_MODULE_6__["NewPasswordComponent"] },
    { path: 'food-menu', component: _components_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_7__["FoodMenuComponent"] },
    { path: 'drink-menu', component: _components_drink_menu_drink_menu_component__WEBPACK_IMPORTED_MODULE_8__["DrinkMenuComponent"] },
    { path: 'dessert-menu', component: _components_dessert_menu_dessert_menu_component__WEBPACK_IMPORTED_MODULE_9__["DessertMenuComponent"] },
    { path: 'recipe/food/:id', component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeComponent"] },
    { path: 'recipe/drink/:id', component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeComponent"] },
    { path: 'recipe/dessert/:id', component: _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_10__["RecipeComponent"] },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'bss-ui';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/food-list/food-list.component */ "./src/app/components/food-list/food-list.component.ts");
/* harmony import */ var _components_sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-page/sign-page.component */ "./src/app/components/sign-page/sign-page.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/login-page/login-page.component */ "./src/app/components/login-page/login-page.component.ts");
/* harmony import */ var _components_new_password_new_password_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/new-password/new-password.component */ "./src/app/components/new-password/new-password.component.ts");
/* harmony import */ var _components_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/food-menu/food-menu.component */ "./src/app/components/food-menu/food-menu.component.ts");
/* harmony import */ var _components_drink_menu_drink_menu_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/drink-menu/drink-menu.component */ "./src/app/components/drink-menu/drink-menu.component.ts");
/* harmony import */ var _components_dessert_menu_dessert_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/dessert-menu/dessert-menu.component */ "./src/app/components/dessert-menu/dessert-menu.component.ts");
/* harmony import */ var _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/recipe/recipe.component */ "./src/app/components/recipe/recipe.component.ts");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_food_list_food_list_component__WEBPACK_IMPORTED_MODULE_5__["FoodListComponent"],
            _components_sign_page_sign_page_component__WEBPACK_IMPORTED_MODULE_6__["SignComponent"],
            _components_login_page_login_page_component__WEBPACK_IMPORTED_MODULE_9__["LoginPageComponent"],
            _components_new_password_new_password_component__WEBPACK_IMPORTED_MODULE_10__["NewPasswordComponent"],
            _components_food_menu_food_menu_component__WEBPACK_IMPORTED_MODULE_11__["FoodMenuComponent"],
            _components_drink_menu_drink_menu_component__WEBPACK_IMPORTED_MODULE_12__["DrinkMenuComponent"],
            _components_dessert_menu_dessert_menu_component__WEBPACK_IMPORTED_MODULE_13__["DessertMenuComponent"],
            _components_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_14__["RecipeComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/dessert-menu/dessert-menu.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/dessert-menu/dessert-menu.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nobject {\r\n  display: none;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  background-color: rgb(255, 255, 255);\r\n  color: rgb(59, 67, 68);\r\n  font-family: 'Montserrat', sans-serif;\r\n  background-image: url(http://assets.mugfoundation.com/images/textures/noisy/noisy1px.png);\r\n}\r\nh1, h2, h3{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul, p{\r\n  margin: 0;\r\n  padding: 0 0 1em 0;\r\n}\r\nh1,h2 {\r\n  color: rgb(241, 47, 93);\r\n}\r\nh1 {\r\n  font-size: 137.5%;\r\n}\r\nh2 {\r\n  font-size: 125%;\r\n}\r\nh3 {\r\n  font-size: 100%;\r\n}\r\na:link, a:visited{\r\n  color: rgba(261, 47, 93, 0.8);\r\n}\r\na:hover, a:active{\r\n  color: rgb(241, 47, 93);\r\n}\r\n.nav{\r\n  list-style-type: none;\r\n  padding: 0;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n}\r\n.nav a:link, .nav a:visited{\r\n  text-decoration: none;\r\n  display: block;\r\n  border-top: 1px solid rgb(232, 243, 248);\r\n  padding: 0.5em 0 0.5em 0;\r\n  color: rgb(66, 148, 182);\r\n}\r\n.nav a:hover, .nav a:active{\r\n  background-color: rgba(232, 243, 248, 0.3);\r\n}\r\n.infobox {\r\n  .avatar, .avatar img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n  }\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  //border-bottom: 1.5px solid rgb(59, 67, 68);\r\n  p {\r\n    text-align: center;\r\n    font-size: 120%;\r\n  }\r\n  .title {\r\n    text-align: center;\r\n    font-size: 2em;\r\n  }\r\n  .quote{\r\n    background-color: rgb(238, 238, 238);\r\n    padding: 5px;\r\n    font-size: 130%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n.menu-des {\r\n  background-image: url(waffle.jpg);\r\n}\r\n.social{\r\n  margin-top: 2%;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n}\r\n.wrapper{\r\n  width: 100%;\r\n  margin: 0 auto 0 auto;\r\n}\r\n.header{\r\n  text-align: right;\r\n  padding: 2.5% 0 0 0;\r\n  border-bottom: 8px solid rgb(59, 67, 68);\r\n  margin-bottom: 2%;\r\n  h1{\r\n    font-size: 200%;\r\n    margin-bottom: 2%;\r\n    color: rgb(59, 67, 68);\r\n    span{\r\n      font-weight: bold;\r\n      color: rgb(241, 47, 93);\r\n    }\r\n  }\r\n}\r\n.main{\r\n  position: relative;\r\n}\r\n.article{\r\n  padding-left: 1.7em;\r\n  position: absolute;\r\n  left: 20%;\r\n  top: 0;\r\n  width: 48%;\r\n  margin-left: 1.5%;\r\n  .thumbnail, .thumbnail img {\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n.right{\r\n  width: 25%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  border-left: 1px solid rgb(59, 67, 68);\r\n  padding-left: 1%;\r\n}\r\n.footer{\r\n  margin-top: 2%;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  a:link, a:visited{\r\n    color: rgba(261, 47, 93, 0.8);\r\n  }\r\n  a:hover, a:active{\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n  p{\r\n    font-size: 120%;\r\n    padding-bottom: 1%;\r\n  }\r\n}\r\n.left{\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 20%;\r\n  border-right: 1.5px solid rgb(59, 67, 68);\r\n  margin-right: 1em;\r\n  padding-right: 1%;\r\n}\r\n@media only screen and (min-width: 768px){\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n    }\r\n      p {\r\n        text-align: center;\r\n        font-size: 100%;\r\n      }\r\n      .title {\r\n        text-align: center;\r\n        font-size: 110%;\r\n      }\r\n      .quote{\r\n        background-color: rgb(238, 238, 238);\r\n        padding: 5px;\r\n        font-size: 130%;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n  .article{\r\n    .thumbnail, .thumbnail img {\r\n      width: 100px;\r\n      height: 100px;\r\n    }\r\n  }\r\n  .right{\r\n    witdth: 20%;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px){\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n    }\r\n      p {\r\n        text-align: center;\r\n        font-size: 100%;\r\n      }\r\n      .title {\r\n        text-align: center;\r\n        font-size: 110%;\r\n      }\r\n      .quote{\r\n        background-color: rgb(238, 238, 238);\r\n        padding: 5px;\r\n        font-size: 130%;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n  .article{\r\n    .thumbnail, .thumbnail img {\r\n      width: 300px;\r\n      height: 300px;\r\n    }\r\n  }\r\n  .right{\r\n    witdth: 30%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZXNzZXJ0LW1lbnUvZGVzc2VydC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxVQUFVO0FBQ1o7QUFDQTtFQUNFLG9DQUFvQztFQUNwQyxzQkFBc0I7RUFDdEIscUNBQXFDO0VBQ3JDLHlGQUF5RjtBQUMzRjtBQUNBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0UsU0FBUztFQUNULGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLGVBQWU7QUFDakI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsVUFBVTtFQUNWLHVDQUF1QztBQUN6QztBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsd0JBQXdCO0VBQ3hCLHdCQUF3QjtBQUMxQjtBQUNBO0VBQ0UsMENBQTBDO0FBQzVDO0FBRUE7RUFDRTtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0VBQ0EsdUNBQXVDO0VBQ3ZDLDRDQUE0QztFQUM1QztJQUNFLGtCQUFrQjtJQUNsQixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsY0FBYztFQUNoQjtFQUNBO0lBQ0Usb0NBQW9DO0lBQ3BDLFlBQVk7SUFDWixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtFQUNyQjtBQUNGO0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGNBQWM7RUFDZCx1Q0FBdUM7RUFDdkM7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0FBQ0Y7QUFDQTtFQUNFLFdBQVc7RUFDWCxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQjtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsc0JBQXNCO0lBQ3RCO01BQ0UsaUJBQWlCO01BQ2pCLHVCQUF1QjtJQUN6QjtFQUNGO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsTUFBTTtFQUNOLFVBQVU7RUFDVixpQkFBaUI7RUFDakI7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtBQUNGO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixNQUFNO0VBQ04sc0NBQXNDO0VBQ3RDLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVDQUF1QztFQUN2QztJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFVBQVU7RUFDVix5Q0FBeUM7RUFDekMsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0U7SUFDRTtNQUNFLFdBQVc7TUFDWCxZQUFZO01BQ1osa0JBQWtCO0lBQ3BCO01BQ0U7UUFDRSxrQkFBa0I7UUFDbEIsZUFBZTtNQUNqQjtNQUNBO1FBQ0Usa0JBQWtCO1FBQ2xCLGVBQWU7TUFDakI7TUFDQTtRQUNFLG9DQUFvQztRQUNwQyxZQUFZO1FBQ1osZUFBZTtRQUNmLGdCQUFnQjtRQUNoQixtQkFBbUI7TUFDckI7SUFDRjtFQUNGO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtJQUNmO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGO0FBQ0E7RUFDRTtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7TUFDRTtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCO01BQ0E7UUFDRSxrQkFBa0I7UUFDbEIsZUFBZTtNQUNqQjtNQUNBO1FBQ0Usb0NBQW9DO1FBQ3BDLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtNQUNyQjtJQUNGO0VBQ0Y7SUFDRTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Rlc3NlcnQtbWVudS9kZXNzZXJ0LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5vYmplY3Qge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuaHRtbCwgYm9keSB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG59XHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICBjb2xvcjogcmdiKDU5LCA2NywgNjgpO1xyXG4gIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9hc3NldHMubXVnZm91bmRhdGlvbi5jb20vaW1hZ2VzL3RleHR1cmVzL25vaXN5L25vaXN5MXB4LnBuZyk7XHJcbn1cclxuaDEsIGgyLCBoM3tcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG51bCwgcHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMCAwIDFlbSAwO1xyXG59XHJcbmgxLGgyIHtcclxuICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1zaXplOiAxMzcuNSU7XHJcbn1cclxuaDIge1xyXG4gIGZvbnQtc2l6ZTogMTI1JTtcclxufVxyXG5oMyB7XHJcbiAgZm9udC1zaXplOiAxMDAlO1xyXG59XHJcbmE6bGluaywgYTp2aXNpdGVke1xyXG4gIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG59XHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG59XHJcbi5uYXZ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG59XHJcbi5uYXYgYTpsaW5rLCAubmF2IGE6dmlzaXRlZHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzIsIDI0MywgMjQ4KTtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDA7XHJcbiAgY29sb3I6IHJnYig2NiwgMTQ4LCAxODIpO1xyXG59XHJcbi5uYXYgYTpob3ZlciwgLm5hdiBhOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQzLCAyNDgsIDAuMyk7XHJcbn1cclxuXHJcbi5pbmZvYm94IHtcclxuICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbiAgLnF1b3Rle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcblxyXG4ubWVudS1kZXMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCh3YWZmbGUuanBnKTtcclxufVxyXG4uc29jaWFse1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG59XHJcbi53cmFwcGVye1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxufVxyXG4uaGVhZGVye1xyXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gIHBhZGRpbmc6IDIuNSUgMCAwIDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICBoMXtcclxuICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgY29sb3I6IHJnYig1OSwgNjcsIDY4KTtcclxuICAgIHNwYW57XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1haW57XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5hcnRpY2xle1xyXG4gIHBhZGRpbmctbGVmdDogMS43ZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGxlZnQ6IDIwJTtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDQ4JTtcclxuICBtYXJnaW4tbGVmdDogMS41JTtcclxuICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxufVxyXG4ucmlnaHR7XHJcbiAgd2lkdGg6IDI1JTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gIHBhZGRpbmctbGVmdDogMSU7XHJcbn1cclxuLmZvb3RlcntcclxuICBtYXJnaW4tdG9wOiAyJTtcclxuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgYTpsaW5rLCBhOnZpc2l0ZWR7XHJcbiAgICBjb2xvcjogcmdiYSgyNjEsIDQ3LCA5MywgMC44KTtcclxuICB9XHJcbiAgYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICB9XHJcbiAgdWx7XHJcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBwe1xyXG4gICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gIH1cclxufVxyXG4ubGVmdHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDIwJTtcclxuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAuaW5mb2JveCB7XHJcbiAgICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgICAgcCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudGl0bGUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnF1b3Rle1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIC5hcnRpY2xle1xyXG4gICAgLnRodW1ibmFpbCwgLnRodW1ibmFpbCBpbWcge1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodHtcclxuICAgIHdpdGR0aDogMjAlO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAuaW5mb2JveCB7XHJcbiAgICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgfVxyXG4gICAgICAucXVvdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLmFydGljbGV7XHJcbiAgICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0e1xyXG4gICAgd2l0ZHRoOiAzMCU7XHJcbiAgfVxyXG59Il19 */");

/***/ }),

/***/ "./src/app/components/dessert-menu/dessert-menu.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/dessert-menu/dessert-menu.component.ts ***!
  \*******************************************************************/
/*! exports provided: DessertMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DessertMenuComponent", function() { return DessertMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DessertMenuComponent = class DessertMenuComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.desserts = [];
    }
    ngOnInit() {
        this.getDesserts();
    }
    getDesserts() {
        this.appService.dessertMenu().subscribe(dessert => this.desserts = dessert);
        console.log(this.desserts);
    }
};
DessertMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DessertMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'dessert-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dessert-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/dessert-menu/dessert-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dessert-menu.component.css */ "./src/app/components/dessert-menu/dessert-menu.component.css")).default]
    })
], DessertMenuComponent);



/***/ }),

/***/ "./src/app/components/drink-menu/drink-menu.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/drink-menu/drink-menu.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nobject {\r\n  display: none;\r\n}\r\nhtml, body {\r\n  height: 100%;\r\n  width: 100%;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nbody {\r\n  background-color: rgb(255, 255, 255);\r\n  color: rgb(59, 67, 68);\r\n  font-family: 'Montserrat', sans-serif;\r\n  background-image: url(http://assets.mugfoundation.com/images/textures/noisy/noisy1px.png);\r\n}\r\nh1, h2, h3{\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\nul, p{\r\n  margin: 0;\r\n  padding: 0 0 1em 0;\r\n}\r\nh1,h2 {\r\n  color: rgb(241, 47, 93);\r\n}\r\nh1 {\r\n  font-size: 137.5%;\r\n}\r\nh2 {\r\n  font-size: 125%;\r\n}\r\nh3 {\r\n  font-size: 100%;\r\n}\r\n.menu-drink{\r\n  background-image: url(watermelon.jpg);\r\n}\r\na:link, a:visited{\r\n  color: rgba(261, 47, 93, 0.8);\r\n}\r\na:hover, a:active{\r\n  color: rgb(241, 47, 93);\r\n}\r\n.nav{\r\n  list-style-type: none;\r\n  padding: 0;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n}\r\n.nav a:link, .nav a:visited{\r\n  text-decoration: none;\r\n  display: block;\r\n  border-top: 1px solid rgb(232, 243, 248);\r\n  padding: 0.5em 0 0.5em 0;\r\n  color: rgb(66, 148, 182);\r\n}\r\n.nav a:hover, .nav a:active{\r\n  background-color: rgba(232, 243, 248, 0.3);\r\n}\r\n.infobox {\r\n  .avatar, .avatar img {\r\n    width: 200px;\r\n    height: 200px;\r\n    border-radius: 50%;\r\n  }\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  //border-bottom: 1.5px solid rgb(59, 67, 68);\r\n  p {\r\n    text-align: center;\r\n    font-size: 120%;\r\n  }\r\n  .title {\r\n    text-align: center;\r\n    font-size: 2em;\r\n  }\r\n  .quote{\r\n    background-color: rgb(238, 238, 238);\r\n    padding: 5px;\r\n    font-size: 130%;\r\n    margin-top: 10px;\r\n    margin-bottom: 10px;\r\n  }\r\n}\r\n.social{\r\n  margin-top: 2%;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n}\r\n.wrapper{\r\n  width: 100%;\r\n  margin: 0 auto 0 auto;\r\n}\r\n.header{\r\n  text-align: right;\r\n  padding: 2.5% 0 0 0;\r\n  border-bottom: 8px solid rgb(59, 67, 68);\r\n  margin-bottom: 2%;\r\n  h1{\r\n    font-size: 200%;\r\n    margin-bottom: 2%;\r\n    color: rgb(59, 67, 68);\r\n    span{\r\n      font-weight: bold;\r\n      color: rgb(241, 47, 93);\r\n    }\r\n  }\r\n}\r\n.main{\r\n  position: relative;\r\n}\r\n.article{\r\n  padding-left: 1.7em;\r\n  position: absolute;\r\n  left: 20%;\r\n  top: 0;\r\n  width: 48%;\r\n  margin-left: 1.5%;\r\n  .thumbnail, .thumbnail img {\r\n    width: 300px;\r\n    height: 300px;\r\n    border-radius: 50%;\r\n  }\r\n}\r\n.right{\r\n  width: 25%;\r\n  position: absolute;\r\n  right: 0;\r\n  top: 0;\r\n  border-left: 1px solid rgb(59, 67, 68);\r\n  padding-left: 1%;\r\n}\r\n.footer{\r\n  margin-top: 2%;\r\n  border-top: 1.5px solid rgb(59, 67, 68);\r\n  a:link, a:visited{\r\n    color: rgba(261, 47, 93, 0.8);\r\n  }\r\n  a:hover, a:active{\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  ul{\r\n    list-style-type: none;\r\n    padding: 0;\r\n  }\r\n  p{\r\n    font-size: 120%;\r\n    padding-bottom: 1%;\r\n  }\r\n}\r\n.left{\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 20%;\r\n  border-right: 1.5px solid rgb(59, 67, 68);\r\n  margin-right: 1em;\r\n  padding-right: 1%;\r\n}\r\n@media only screen and (min-width: 768px){\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 50px;\r\n      height: 50px;\r\n      border-radius: 50%;\r\n    }\r\n      p {\r\n        text-align: center;\r\n        font-size: 100%;\r\n      }\r\n      .title {\r\n        text-align: center;\r\n        font-size: 110%;\r\n      }\r\n      .quote{\r\n        background-color: rgb(238, 238, 238);\r\n        padding: 5px;\r\n        font-size: 130%;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n  .article{\r\n    .thumbnail, .thumbnail img {\r\n      width: 100px;\r\n      height: 100px;\r\n    }\r\n  }\r\n  .right{\r\n    witdth: 20%;\r\n  }\r\n}\r\n@media only screen and (min-width: 992px){\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n    }\r\n      p {\r\n        text-align: center;\r\n        font-size: 100%;\r\n      }\r\n      .title {\r\n        text-align: center;\r\n        font-size: 110%;\r\n      }\r\n      .quote{\r\n        background-color: rgb(238, 238, 238);\r\n        padding: 5px;\r\n        font-size: 130%;\r\n        margin-top: 10px;\r\n        margin-bottom: 10px;\r\n      }\r\n    }\r\n  .article{\r\n    .thumbnail, .thumbnail img {\r\n      width: 300px;\r\n      height: 300px;\r\n    }\r\n  }\r\n  .right{\r\n    witdth: 30%;\r\n  }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kcmluay1tZW51L2RyaW5rLW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsU0FBUztFQUNULFVBQVU7QUFDWjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0QixxQ0FBcUM7RUFDckMseUZBQXlGO0FBQzNGO0FBQ0E7RUFDRSxTQUFTO0VBQ1QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxTQUFTO0VBQ1Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsZUFBZTtBQUNqQjtBQUNBO0VBQ0UscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVix1Q0FBdUM7QUFDekM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsd0NBQXdDO0VBQ3hDLHdCQUF3QjtFQUN4Qix3QkFBd0I7QUFDMUI7QUFDQTtFQUNFLDBDQUEwQztBQUM1QztBQUVBO0VBQ0U7SUFDRSxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtFQUNwQjtFQUNBLHVDQUF1QztFQUN2Qyw0Q0FBNEM7RUFDNUM7SUFDRSxrQkFBa0I7SUFDbEIsZUFBZTtFQUNqQjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxZQUFZO0lBQ1osZUFBZTtJQUNmLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7QUFDRjtBQUNBO0VBQ0UsY0FBYztFQUNkLHVDQUF1QztFQUN2QztJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7QUFDRjtBQUNBO0VBQ0UsV0FBVztFQUNYLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQix3Q0FBd0M7RUFDeEMsaUJBQWlCO0VBQ2pCO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixzQkFBc0I7SUFDdEI7TUFDRSxpQkFBaUI7TUFDakIsdUJBQXVCO0lBQ3pCO0VBQ0Y7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxNQUFNO0VBQ04sVUFBVTtFQUNWLGlCQUFpQjtFQUNqQjtJQUNFLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0VBQ3BCO0FBQ0Y7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLE1BQU07RUFDTixzQ0FBc0M7RUFDdEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsdUNBQXVDO0VBQ3ZDO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGVBQWU7SUFDZixrQkFBa0I7RUFDcEI7QUFDRjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLE9BQU87RUFDUCxNQUFNO0VBQ04sVUFBVTtFQUNWLHlDQUF5QztFQUN6QyxpQkFBaUI7RUFDakIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRTtJQUNFO01BQ0UsV0FBVztNQUNYLFlBQVk7TUFDWixrQkFBa0I7SUFDcEI7TUFDRTtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCO01BQ0E7UUFDRSxrQkFBa0I7UUFDbEIsZUFBZTtNQUNqQjtNQUNBO1FBQ0Usb0NBQW9DO1FBQ3BDLFlBQVk7UUFDWixlQUFlO1FBQ2YsZ0JBQWdCO1FBQ2hCLG1CQUFtQjtNQUNyQjtJQUNGO0VBQ0Y7SUFDRTtNQUNFLFlBQVk7TUFDWixhQUFhO0lBQ2Y7RUFDRjtFQUNBO0lBQ0UsV0FBVztFQUNiO0FBQ0Y7QUFDQTtFQUNFO0lBQ0U7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtNQUNFO1FBQ0Usa0JBQWtCO1FBQ2xCLGVBQWU7TUFDakI7TUFDQTtRQUNFLGtCQUFrQjtRQUNsQixlQUFlO01BQ2pCO01BQ0E7UUFDRSxvQ0FBb0M7UUFDcEMsWUFBWTtRQUNaLGVBQWU7UUFDZixnQkFBZ0I7UUFDaEIsbUJBQW1CO01BQ3JCO0lBQ0Y7RUFDRjtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjtFQUNGO0VBQ0E7SUFDRSxXQUFXO0VBQ2I7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZHJpbmstbWVudS9kcmluay1tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxub2JqZWN0IHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbmh0bWwsIGJvZHkge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5ib2R5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCAyNTUsIDI1NSk7XHJcbiAgY29sb3I6IHJnYig1OSwgNjcsIDY4KTtcclxuICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChodHRwOi8vYXNzZXRzLm11Z2ZvdW5kYXRpb24uY29tL2ltYWdlcy90ZXh0dXJlcy9ub2lzeS9ub2lzeTFweC5wbmcpO1xyXG59XHJcbmgxLCBoMiwgaDN7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxudWwsIHB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDAgMCAxZW0gMDtcclxufVxyXG5oMSxoMiB7XHJcbiAgY29sb3I6IHJnYigyNDEsIDQ3LCA5Myk7XHJcbn1cclxuaDEge1xyXG4gIGZvbnQtc2l6ZTogMTM3LjUlO1xyXG59XHJcbmgyIHtcclxuICBmb250LXNpemU6IDEyNSU7XHJcbn1cclxuaDMge1xyXG4gIGZvbnQtc2l6ZTogMTAwJTtcclxufVxyXG4ubWVudS1kcmlua3tcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwod2F0ZXJtZWxvbi5qcGcpO1xyXG59XHJcbmE6bGluaywgYTp2aXNpdGVke1xyXG4gIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG59XHJcbmE6aG92ZXIsIGE6YWN0aXZle1xyXG4gIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG59XHJcbi5uYXZ7XHJcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG59XHJcbi5uYXYgYTpsaW5rLCAubmF2IGE6dmlzaXRlZHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzIsIDI0MywgMjQ4KTtcclxuICBwYWRkaW5nOiAwLjVlbSAwIDAuNWVtIDA7XHJcbiAgY29sb3I6IHJnYig2NiwgMTQ4LCAxODIpO1xyXG59XHJcbi5uYXYgYTpob3ZlciwgLm5hdiBhOmFjdGl2ZXtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQzLCAyNDgsIDAuMyk7XHJcbn1cclxuXHJcbi5pbmZvYm94IHtcclxuICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIH1cclxuICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgLy9ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgcCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgfVxyXG4gIC50aXRsZSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDJlbTtcclxuICB9XHJcbiAgLnF1b3Rle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgfVxyXG59XHJcbi5zb2NpYWx7XHJcbiAgbWFyZ2luLXRvcDogMiU7XHJcbiAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gIHVse1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcbn1cclxuLndyYXBwZXJ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG59XHJcbi5oZWFkZXJ7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgcGFkZGluZzogMi41JSAwIDAgMDtcclxuICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gIGgxe1xyXG4gICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBjb2xvcjogcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgc3BhbntcclxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4ubWFpbntcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLmFydGljbGV7XHJcbiAgcGFkZGluZy1sZWZ0OiAxLjdlbTtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMjAlO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogNDglO1xyXG4gIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gIC50aHVtYm5haWwsIC50aHVtYm5haWwgaW1nIHtcclxuICAgIHdpZHRoOiAzMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbi5yaWdodHtcclxuICB3aWR0aDogMjUlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogMDtcclxuICB0b3A6IDA7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgcGFkZGluZy1sZWZ0OiAxJTtcclxufVxyXG4uZm9vdGVye1xyXG4gIG1hcmdpbi10b3A6IDIlO1xyXG4gIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICBhOmxpbmssIGE6dmlzaXRlZHtcclxuICAgIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG4gIH1cclxuICBhOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gIH1cclxuICB1bHtcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHB7XHJcbiAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgfVxyXG59XHJcbi5sZWZ0e1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICB3aWR0aDogMjAlO1xyXG4gIGJvcmRlci1yaWdodDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDElO1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gIC5pbmZvYm94IHtcclxuICAgIC5hdmF0YXIsIC5hdmF0YXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgfVxyXG4gICAgICAucXVvdGV7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgLmFydGljbGV7XHJcbiAgICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0e1xyXG4gICAgd2l0ZHRoOiAyMCU7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gIC5pbmZvYm94IHtcclxuICAgIC5hdmF0YXIsIC5hdmF0YXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICAgIHAge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRpdGxlIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5xdW90ZXtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAuYXJ0aWNsZXtcclxuICAgIC50aHVtYm5haWwsIC50aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgICB3aXRkdGg6IDMwJTtcclxuICB9XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/drink-menu/drink-menu.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/drink-menu/drink-menu.component.ts ***!
  \***************************************************************/
/*! exports provided: DrinkMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkMenuComponent", function() { return DrinkMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let DrinkMenuComponent = class DrinkMenuComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.drinks = [];
    }
    ngOnInit() {
        this.getDrinks();
    }
    getDrinks() {
        this.appService.drinkMenu().subscribe(drink => this.drinks = drink);
        console.log(this.drinks);
    }
    home() {
        this.router.navigateByUrl('/foods-list');
    }
};
DrinkMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
DrinkMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'drink-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./drink-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/drink-menu/drink-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./drink-menu.component.css */ "./src/app/components/drink-menu/drink-menu.component.css")).default]
    })
], DrinkMenuComponent);



/***/ }),

/***/ "./src/app/components/food-list/food-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/food-list/food-list.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nobject {\r\n    display: none;\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  body {\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(59, 67, 68);\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-image: url(http://assets.mugfoundation.com/images/textures/noisy/noisy1px.png);\r\n  }\r\n  h1, h2, h3{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  ul, p{\r\n    margin: 0;\r\n    padding: 0 0 1em 0;\r\n  }\r\n  h1,h2 {\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  h1 {\r\n    font-size: 137.5%;\r\n  }\r\n  h2 {\r\n    font-size: 125%;\r\n  }\r\n  h3 {\r\n    font-size: 100%;\r\n  }\r\n  a:link, a:visited{\r\n    color: rgba(261, 47, 93, 0.8);\r\n  }\r\n  a:hover, a:active{\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  .nav{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n  }\r\n  .nav a:link, .nav a:visited{\r\n    text-decoration: none;\r\n    display: block;\r\n    border-top: 1px solid rgb(232, 243, 248);\r\n    padding: 0.5em 0 0.5em 0;\r\n    color: rgb(66, 148, 182);\r\n  }\r\n  .nav a:hover, .nav a:active{\r\n    background-color: rgba(232, 243, 248, 0.3);\r\n  }\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n    }\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    //border-bottom: 1.5px solid rgb(59, 67, 68);\r\n    p {\r\n      text-align: center;\r\n      font-size: 120%;\r\n    }\r\n    .title {\r\n      text-align: center;\r\n      font-size: 2em;\r\n    }\r\n    .quote{\r\n      background-color: rgb(238, 238, 238);\r\n      padding: 5px;\r\n      font-size: 130%;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n  .social{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n  }\r\n  .wrapper{\r\n    width: 100%;\r\n    margin: 0 auto 0 auto;\r\n  }\r\n  .header{\r\n    text-align: right;\r\n    padding: 2.5% 0 0 0;\r\n    border-bottom: 8px solid rgb(59, 67, 68);\r\n    margin-bottom: 2%;\r\n    h1{\r\n      font-size: 200%;\r\n      margin-bottom: 2%;\r\n      color: rgb(59, 67, 68);\r\n      span{\r\n        font-weight: bold;\r\n        color: rgb(241, 47, 93);\r\n      }\r\n    }\r\n  }\r\n  .main{\r\n    position: relative;\r\n  }\r\n  .article{\r\n    padding-left: 1.7em;\r\n    position: absolute;\r\n    left: 20%;\r\n    top: 0;\r\n    width: 48%;\r\n    margin-left: 1.5%;\r\n    .thumbnail, .thumbnail img {\r\n      width: 300px;\r\n      height: 300px;\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n  .right{\r\n    width: 25%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    border-left: 1px solid rgb(59, 67, 68);\r\n    padding-left: 1%;\r\n  }\r\n  .footer{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    a:link, a:visited{\r\n      color: rgba(261, 47, 93, 0.8);\r\n    }\r\n    a:hover, a:active{\r\n      color: rgb(241, 47, 93);\r\n    }\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n    p{\r\n      font-size: 120%;\r\n      padding-bottom: 1%;\r\n    }\r\n  }\r\n  .left{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 20%;\r\n    border-right: 1.5px solid rgb(59, 67, 68);\r\n    margin-right: 1em;\r\n    padding-right: 1%;\r\n  }\r\n  @media only screen and (min-width: 768px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 50px;\r\n        height: 50px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 100px;\r\n        height: 100px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 20%;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 992px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 200px;\r\n        height: 200px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 300px;\r\n        height: 300px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 30%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb29kLWxpc3QvZm9vZC1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLHlGQUF5RjtFQUMzRjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0VBRUE7SUFDRTtNQUNFLFlBQVk7TUFDWixhQUFhO01BQ2Isa0JBQWtCO0lBQ3BCO0lBQ0EsdUNBQXVDO0lBQ3ZDLDRDQUE0QztJQUM1QztNQUNFLGtCQUFrQjtNQUNsQixlQUFlO0lBQ2pCO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsY0FBYztJQUNoQjtJQUNBO01BQ0Usb0NBQW9DO01BQ3BDLFlBQVk7TUFDWixlQUFlO01BQ2YsZ0JBQWdCO01BQ2hCLG1CQUFtQjtJQUNyQjtFQUNGO0VBQ0E7SUFDRSxjQUFjO0lBQ2QsdUNBQXVDO0lBQ3ZDO01BQ0UscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtFQUNGO0VBQ0E7SUFDRSxXQUFXO0lBQ1gscUJBQXFCO0VBQ3ZCO0VBQ0E7SUFDRSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHdDQUF3QztJQUN4QyxpQkFBaUI7SUFDakI7TUFDRSxlQUFlO01BQ2YsaUJBQWlCO01BQ2pCLHNCQUFzQjtNQUN0QjtRQUNFLGlCQUFpQjtRQUNqQix1QkFBdUI7TUFDekI7SUFDRjtFQUNGO0VBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULE1BQU07SUFDTixVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7RUFDRjtFQUNBO0lBQ0UsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsTUFBTTtJQUNOLHNDQUFzQztJQUN0QyxnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkM7TUFDRSw2QkFBNkI7SUFDL0I7SUFDQTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UscUJBQXFCO01BQ3JCLFVBQVU7SUFDWjtJQUNBO01BQ0UsZUFBZTtNQUNmLGtCQUFrQjtJQUNwQjtFQUNGO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLE1BQU07SUFDTixVQUFVO0lBQ1YseUNBQXlDO0lBQ3pDLGlCQUFpQjtJQUNqQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFO01BQ0U7UUFDRSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtNQUNwQjtRQUNFO1VBQ0Usa0JBQWtCO1VBQ2xCLGVBQWU7UUFDakI7UUFDQTtVQUNFLGtCQUFrQjtVQUNsQixlQUFlO1FBQ2pCO1FBQ0E7VUFDRSxvQ0FBb0M7VUFDcEMsWUFBWTtVQUNaLGVBQWU7VUFDZixnQkFBZ0I7VUFDaEIsbUJBQW1CO1FBQ3JCO01BQ0Y7SUFDRjtNQUNFO1FBQ0UsWUFBWTtRQUNaLGFBQWE7TUFDZjtJQUNGO0lBQ0E7TUFDRSxXQUFXO0lBQ2I7RUFDRjtFQUNBO0lBQ0U7TUFDRTtRQUNFLFlBQVk7UUFDWixhQUFhO1FBQ2Isa0JBQWtCO01BQ3BCO1FBQ0U7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjtRQUNBO1VBQ0Usa0JBQWtCO1VBQ2xCLGVBQWU7UUFDakI7UUFDQTtVQUNFLG9DQUFvQztVQUNwQyxZQUFZO1VBQ1osZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixtQkFBbUI7UUFDckI7TUFDRjtJQUNGO01BQ0U7UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmO0lBQ0Y7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb29kLWxpc3QvZm9vZC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxub2JqZWN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9hc3NldHMubXVnZm91bmRhdGlvbi5jb20vaW1hZ2VzL3RleHR1cmVzL25vaXN5L25vaXN5MXB4LnBuZyk7XHJcbiAgfVxyXG4gIGgxLCBoMiwgaDN7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICB1bCwgcHtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDAgMCAxZW0gMDtcclxuICB9XHJcbiAgaDEsaDIge1xyXG4gICAgY29sb3I6IHJnYigyNDEsIDQ3LCA5Myk7XHJcbiAgfVxyXG4gIGgxIHtcclxuICAgIGZvbnQtc2l6ZTogMTM3LjUlO1xyXG4gIH1cclxuICBoMiB7XHJcbiAgICBmb250LXNpemU6IDEyNSU7XHJcbiAgfVxyXG4gIGgzIHtcclxuICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICB9XHJcbiAgYTpsaW5rLCBhOnZpc2l0ZWR7XHJcbiAgICBjb2xvcjogcmdiYSgyNjEsIDQ3LCA5MywgMC44KTtcclxuICB9XHJcbiAgYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICB9XHJcbiAgLm5hdntcclxuICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgfVxyXG4gIC5uYXYgYTpsaW5rLCAubmF2IGE6dmlzaXRlZHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYigyMzIsIDI0MywgMjQ4KTtcclxuICAgIHBhZGRpbmc6IDAuNWVtIDAgMC41ZW0gMDtcclxuICAgIGNvbG9yOiByZ2IoNjYsIDE0OCwgMTgyKTtcclxuICB9XHJcbiAgLm5hdiBhOmhvdmVyLCAubmF2IGE6YWN0aXZle1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMzIsIDI0MywgMjQ4LCAwLjMpO1xyXG4gIH1cclxuICBcclxuICAuaW5mb2JveCB7XHJcbiAgICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgLy9ib3JkZXItYm90dG9tOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBwIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICB9XHJcbiAgICAudGl0bGUge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG4gICAgLnF1b3Rle1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAuc29jaWFse1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICB1bHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gIH1cclxuICAud3JhcHBlcntcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG8gMCBhdXRvO1xyXG4gIH1cclxuICAuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBwYWRkaW5nOiAyLjUlIDAgMCAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogOHB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgaDF7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjAwJTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICAgIGNvbG9yOiByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICAgIHNwYW57XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICAgICAgY29sb3I6IHJnYigyNDEsIDQ3LCA5Myk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgLm1haW57XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG4gIC5hcnRpY2xle1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxLjdlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiA0OCU7XHJcbiAgICBtYXJnaW4tbGVmdDogMS41JTtcclxuICAgIC50aHVtYm5haWwsIC50aHVtYm5haWwgaW1nIHtcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5yaWdodHtcclxuICAgIHdpZHRoOiAyNSU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxJTtcclxuICB9XHJcbiAgLmZvb3RlcntcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgYTpsaW5rLCBhOnZpc2l0ZWR7XHJcbiAgICAgIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG4gICAgfVxyXG4gICAgYTpob3ZlciwgYTphY3RpdmV7XHJcbiAgICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gICAgfVxyXG4gICAgdWx7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIHB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgICAgcGFkZGluZy1ib3R0b206IDElO1xyXG4gICAgfVxyXG4gIH1cclxuICAubGVmdHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDFlbTtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDElO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcclxuICAgIC5pbmZvYm94IHtcclxuICAgICAgLmF2YXRhciwgLmF2YXRhciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgIGhlaWdodDogNTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1b3Rle1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAuYXJ0aWNsZXtcclxuICAgICAgLnRodW1ibmFpbCwgLnRodW1ibmFpbCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHR7XHJcbiAgICAgIHdpdGR0aDogMjAlO1xyXG4gICAgfVxyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIC5pbmZvYm94IHtcclxuICAgICAgLmF2YXRhciwgLmF2YXRhciBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAyMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXVvdGV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC5hcnRpY2xle1xyXG4gICAgICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgICAgd2l0ZHRoOiAzMCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");

/***/ }),

/***/ "./src/app/components/food-list/food-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/food-list/food-list.component.ts ***!
  \*************************************************************/
/*! exports provided: FoodListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodListComponent", function() { return FoodListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FoodListComponent = class FoodListComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.comments = [];
    }
    ngOnInit() {
        this.getComment();
    }
    foodMenu() {
        this.router.navigateByUrl('/food-menu');
    }
    drinkMenu() {
        this.router.navigateByUrl('/drink-menu');
    }
    dessertMenu() {
        this.router.navigateByUrl('/dessert-menu');
    }
    getComment() {
        this.appService.getComments().subscribe(comment => this.comments = comment);
        console.log(this.comments);
    }
};
FoodListComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FoodListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'food-list',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-list/food-list.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-list.component.css */ "./src/app/components/food-list/food-list.component.css")).default]
    })
], FoodListComponent);



/***/ }),

/***/ "./src/app/components/food-menu/food-menu.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/food-menu/food-menu.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nobject {\r\n    display: none;\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  body {\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(59, 67, 68);\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-image: url(http://assets.mugfoundation.com/images/textures/noisy/noisy1px.png);\r\n  }\r\n  h1, h2, h3{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  ul, p{\r\n    margin: 0;\r\n    padding: 0 0 1em 0;\r\n  }\r\n  h1,h2 {\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  h1 {\r\n    font-size: 137.5%;\r\n  }\r\n  h2 {\r\n    font-size: 125%;\r\n  }\r\n  h3 {\r\n    font-size: 100%;\r\n  }\r\n  a:link, a:visited{\r\n    color: rgba(261, 47, 93, 0.8);\r\n  }\r\n  a:hover, a:active{\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  .nav{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n  }\r\n  .nav a:link, .nav a:visited{\r\n    text-decoration: none;\r\n    display: block;\r\n    border-top: 1px solid rgb(232, 243, 248);\r\n    padding: 0.5em 0 0.5em 0;\r\n    color: rgb(66, 148, 182);\r\n  }\r\n  .nav a:hover, .nav a:active{\r\n    background-color: rgba(232, 243, 248, 0.3);\r\n  }\r\n  .menu-food{\r\n    background-image: url(pizza.jpg);\r\n  }\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n    }\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    //border-bottom: 1.5px solid rgb(59, 67, 68);\r\n    p {\r\n      text-align: center;\r\n      font-size: 120%;\r\n    }\r\n    .title {\r\n      text-align: center;\r\n      font-size: 2em;\r\n    }\r\n    .quote{\r\n      background-color: rgb(238, 238, 238);\r\n      padding: 5px;\r\n      font-size: 130%;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n  .social{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n  }\r\n  .wrapper{\r\n    width: 100%;\r\n    margin: 0 auto 0 auto;\r\n  }\r\n  .header{\r\n    text-align: right;\r\n    padding: 2.5% 0 0 0;\r\n    border-bottom: 8px solid rgb(59, 67, 68);\r\n    margin-bottom: 2%;\r\n    h1{\r\n      font-size: 200%;\r\n      margin-bottom: 2%;\r\n      color: rgb(59, 67, 68);\r\n      span{\r\n        font-weight: bold;\r\n        color: rgb(241, 47, 93);\r\n      }\r\n    }\r\n  }\r\n  .main{\r\n    position: relative;\r\n  }\r\n  .article{\r\n    padding-left: 1.7em;\r\n    position: absolute;\r\n    left: 20%;\r\n    top: 0;\r\n    width: 48%;\r\n    margin-left: 1.5%;\r\n    .thumbnail, .thumbnail img {\r\n      width: 300px;\r\n      height: 300px;\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n  .right{\r\n    width: 25%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    border-left: 1px solid rgb(59, 67, 68);\r\n    padding-left: 1%;\r\n  }\r\n  .footer{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    a:link, a:visited{\r\n      color: rgba(261, 47, 93, 0.8);\r\n    }\r\n    a:hover, a:active{\r\n      color: rgb(241, 47, 93);\r\n    }\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n    p{\r\n      font-size: 120%;\r\n      padding-bottom: 1%;\r\n    }\r\n  }\r\n  .left{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 20%;\r\n    border-right: 1.5px solid rgb(59, 67, 68);\r\n    margin-right: 1em;\r\n    padding-right: 1%;\r\n  }\r\n  @media only screen and (min-width: 768px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 50px;\r\n        height: 50px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 100px;\r\n        height: 100px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 20%;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 992px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 200px;\r\n        height: 200px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 300px;\r\n        height: 300px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 30%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mb29kLW1lbnUvZm9vZC1tZW51LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLHlGQUF5RjtFQUMzRjtFQUNBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztJQUNULGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLDZCQUE2QjtFQUMvQjtFQUNBO0lBQ0UsdUJBQXVCO0VBQ3pCO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsVUFBVTtJQUNWLHVDQUF1QztFQUN6QztFQUNBO0lBQ0UscUJBQXFCO0lBQ3JCLGNBQWM7SUFDZCx3Q0FBd0M7SUFDeEMsd0JBQXdCO0lBQ3hCLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsMENBQTBDO0VBQzVDO0VBQ0E7SUFDRSxnQ0FBZ0M7RUFDbEM7RUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQSx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7SUFDakI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsbUJBQW1CO0lBQ3JCO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkM7TUFDRSxxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQjtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCO1FBQ0UsaUJBQWlCO1FBQ2pCLHVCQUF1QjtNQUN6QjtJQUNGO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFVBQVU7SUFDVixpQkFBaUI7SUFDakI7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sc0NBQXNDO0lBQ3RDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHVDQUF1QztJQUN2QztNQUNFLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7TUFDRTtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO01BQ3BCO1FBQ0U7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjtRQUNBO1VBQ0Usa0JBQWtCO1VBQ2xCLGVBQWU7UUFDakI7UUFDQTtVQUNFLG9DQUFvQztVQUNwQyxZQUFZO1VBQ1osZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixtQkFBbUI7UUFDckI7TUFDRjtJQUNGO01BQ0U7UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmO0lBQ0Y7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGO0VBQ0E7SUFDRTtNQUNFO1FBQ0UsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7TUFDcEI7UUFDRTtVQUNFLGtCQUFrQjtVQUNsQixlQUFlO1FBQ2pCO1FBQ0E7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjtRQUNBO1VBQ0Usb0NBQW9DO1VBQ3BDLFlBQVk7VUFDWixlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLG1CQUFtQjtRQUNyQjtNQUNGO0lBQ0Y7TUFDRTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7SUFDRjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Zvb2QtbWVudS9mb29kLW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5vYmplY3Qge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgaHRtbCwgYm9keSB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4gICAgY29sb3I6IHJnYig1OSwgNjcsIDY4KTtcclxuICAgIGZvbnQtZmFtaWx5OiAnTW9udHNlcnJhdCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cDovL2Fzc2V0cy5tdWdmb3VuZGF0aW9uLmNvbS9pbWFnZXMvdGV4dHVyZXMvbm9pc3kvbm9pc3kxcHgucG5nKTtcclxuICB9XHJcbiAgaDEsIGgyLCBoM3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHVsLCBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMCAwIDFlbSAwO1xyXG4gIH1cclxuICBoMSxoMiB7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMzcuNSU7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gIH1cclxuICBhOmxpbmssIGE6dmlzaXRlZHtcclxuICAgIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG4gIH1cclxuICBhOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gIH1cclxuICAubmF2e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICB9XHJcbiAgLm5hdiBhOmxpbmssIC5uYXYgYTp2aXNpdGVke1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzMiwgMjQzLCAyNDgpO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xyXG4gICAgY29sb3I6IHJnYig2NiwgMTQ4LCAxODIpO1xyXG4gIH1cclxuICAubmF2IGE6aG92ZXIsIC5uYXYgYTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQzLCAyNDgsIDAuMyk7XHJcbiAgfVxyXG4gIC5tZW51LWZvb2R7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwocGl6emEuanBnKTtcclxuICB9XHJcbiAgXHJcbiAgLmluZm9ib3gge1xyXG4gICAgLmF2YXRhciwgLmF2YXRhciBpbWcge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIC8vYm9yZGVyLWJvdHRvbTogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgcCB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgfVxyXG4gICAgLnRpdGxlIHtcclxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICBmb250LXNpemU6IDJlbTtcclxuICAgIH1cclxuICAgIC5xdW90ZXtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIH1cclxuICB9XHJcbiAgLnNvY2lhbHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgYm9yZGVyLXRvcDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgdWx7XHJcbiAgICAgIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICB9XHJcbiAgLndyYXBwZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMCBhdXRvIDAgYXV0bztcclxuICB9XHJcbiAgLmhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogMi41JSAwIDAgMDtcclxuICAgIGJvcmRlci1ib3R0b206IDhweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgIGgxe1xyXG4gICAgICBmb250LXNpemU6IDIwMCU7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIlO1xyXG4gICAgICBjb2xvcjogcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgICBzcGFue1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5tYWlue1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICAuYXJ0aWNsZXtcclxuICAgIHBhZGRpbmctbGVmdDogMS43ZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogNDglO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEuNSU7XHJcbiAgICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG4gIH1cclxuICAucmlnaHR7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIHBhZGRpbmctbGVmdDogMSU7XHJcbiAgfVxyXG4gIC5mb290ZXJ7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIGE6bGluaywgYTp2aXNpdGVke1xyXG4gICAgICBjb2xvcjogcmdiYSgyNjEsIDQ3LCA5MywgMC44KTtcclxuICAgIH1cclxuICAgIGE6aG92ZXIsIGE6YWN0aXZle1xyXG4gICAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICAgIH1cclxuICAgIHVse1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgICBwe1xyXG4gICAgICBmb250LXNpemU6IDEyMCU7XHJcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxJTtcclxuICAgIH1cclxuICB9XHJcbiAgLmxlZnR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxJTtcclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuaW5mb2JveCB7XHJcbiAgICAgIC5hdmF0YXIsIC5hdmF0YXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogNTBweDtcclxuICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLmFydGljbGV7XHJcbiAgICAgIC50aHVtYm5haWwsIC50aHVtYm5haWwgaW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICB3aXRkdGg6IDIwJTtcclxuICAgIH1cclxuICB9XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5OTJweCl7XHJcbiAgICAuaW5mb2JveCB7XHJcbiAgICAgIC5hdmF0YXIsIC5hdmF0YXIgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgIH1cclxuICAgICAgICBwIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTEwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnF1b3Rle1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzOCwgMjM4LCAyMzgpO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMzAlO1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAuYXJ0aWNsZXtcclxuICAgICAgLnRodW1ibmFpbCwgLnRodW1ibmFpbCBpbWcge1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDMwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAucmlnaHR7XHJcbiAgICAgIHdpdGR0aDogMzAlO1xyXG4gICAgfVxyXG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/food-menu/food-menu.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/food-menu/food-menu.component.ts ***!
  \*************************************************************/
/*! exports provided: FoodMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodMenuComponent", function() { return FoodMenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let FoodMenuComponent = class FoodMenuComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.foods = [];
        this.recipes = [];
        this.foodID = [];
    }
    ngOnInit() {
        this.getFood();
    }
    getFood() {
        this.appService.foodMenu().subscribe(food => this.foods = food);
    }
};
FoodMenuComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
FoodMenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'food-menu',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./food-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/food-menu/food-menu.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./food-menu.component.css */ "./src/app/components/food-menu/food-menu.component.css")).default]
    })
], FoodMenuComponent);



/***/ }),

/***/ "./src/app/components/login-page/login-page.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\r\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\r\nbody{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: #fff;\r\n\r\n\tcolor: #fff;\r\n\tfont-family: Arial;\r\n\tfont-size: 12px;\r\n}\r\n.body{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground-image: url(login.jpg);\r\n\tbackground-size: cover;\r\n\t-webkit-filter: blur(5px);\r\n\tz-index: 0;\r\n}\r\n.grad{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */\r\n\tz-index: 1;\r\n\topacity: 0.7;\r\n}\r\n.header{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 35px);\r\n\tleft: calc(42% - 255px);\r\n\tz-index: 2;\r\n}\r\n.header div{\r\n\tfloat: left;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 35px;\r\n\tfont-weight: 200;\r\n}\r\n.header div span{\r\n\tcolor: #5379fa !important;\r\n}\r\n.login{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 75px);\r\n\tleft: calc(50% - 50px);\r\n\theight: 150px;\r\n\twidth: 350px;\r\n\tpadding: 10px;\r\n\tz-index: 2;\r\n}\r\n.login input[type=text]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n}\r\n.login input[type=password]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tbackground: #b32400;\r\n\tborder: 1px solid #b32400;\r\n\tcursor: pointer;\r\n\tborder-radius: 4px;\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]:hover{\r\n\topacity: 0.8;\r\n}\r\n.login input[type=button]:active{\r\n\topacity: 0.6;\r\n}\r\n.login input[type=text]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=password]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=button]:focus{\r\n\toutline: none;\r\n}\r\n.login .error{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.btn{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tborder: none;\r\n\tbackground-color: inherit;\r\n\tfont-size: 18px;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tpadding: 6px;\r\n\tmargin-top: 50px;\r\n  }\r\n.success {\r\n\tcolor: #eee3d1;\r\n  }\r\n.success:hover {\r\n\tbackground-color: rgb(142, 199, 144);\r\n\tcolor: white;\r\n  }\r\n.forgot {\r\n\tbackground-color:transparent;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size:14px;\r\n\tpadding:0px 0px;\r\n\tborder: none;\r\n}\r\n.forgot:hover {\r\n\tbackground-color:transparent;\r\n}\r\n.forgot:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n::-webkit-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n::-moz-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRUFBb0U7QUFDcEUsZ0ZBQWdGO0FBRWhGO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7O0NBRWhCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtBQUNoQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixXQUFXO0NBQ1gsWUFBWTtDQUNaLGdDQUFnQztDQUNoQyxzQkFBc0I7Q0FDdEIseUJBQXlCO0NBQ3pCLFVBQVU7QUFDWDtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLFVBQVU7Q0FDVixXQUFXO0NBQ1gsWUFBWTtDQUNaLGFBQWE7Q0FDYixXQUFXO0NBQ1gsWUFBWTtDQUNaLDRIQUE0SCxFQUFFLG9CQUFvQjtDQUNsSixVQUFVO0NBQ1YsWUFBWTtBQUNiO0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLHVCQUF1QjtDQUN2QixVQUFVO0FBQ1g7QUFFQTtDQUNDLFdBQVc7Q0FDWCxXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLFlBQVk7Q0FDWixhQUFhO0NBQ2IsVUFBVTtBQUNYO0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qix1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLHVDQUF1QztDQUN2QyxrQkFBa0I7Q0FDbEIsV0FBVztDQUNYLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFFQTtDQUNDLFlBQVk7Q0FDWixZQUFZO0NBQ1osbUJBQW1CO0NBQ25CLHlCQUF5QjtDQUN6QixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLFlBQVk7QUFDYjtBQUVBO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztBQUN4QztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVDQUF1QztBQUN4QztBQUVBO0NBQ0MsYUFBYTtBQUNkO0FBQ0E7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGVBQWU7Q0FDZixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixnQkFBZ0I7RUFDZjtBQUVGO0NBQ0MsY0FBYztFQUNiO0FBRUY7Q0FDQyxvQ0FBb0M7Q0FDcEMsWUFBWTtFQUNYO0FBRUE7Q0FDRCw0QkFBNEI7Q0FDNUIsb0JBQW9CO0NBQ3BCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsOEJBQThCO0NBQzlCLGNBQWM7Q0FDZCxlQUFlO0NBQ2YsWUFBWTtBQUNiO0FBQ0E7Q0FDQyw0QkFBNEI7QUFDN0I7QUFDQTtDQUNDLGlCQUFpQjtDQUNqQixPQUFPO0FBQ1I7QUFFQTtHQUNHLDRCQUE0QjtBQUMvQjtBQUVBO0dBQ0csNEJBQTRCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi1wYWdlL2xvZ2luLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1FeG86MTAwLDIwMCw0MDApO1xyXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK1NhbnMrUHJvOjcwMCw0MDAsMzAwKTtcclxuXHJcbmJvZHl7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0YmFja2dyb3VuZDogI2ZmZjtcclxuXHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6IEFyaWFsO1xyXG5cdGZvbnQtc2l6ZTogMTJweDtcclxufVxyXG5cclxuLmJvZHl7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogLTIwcHg7XHJcblx0bGVmdDogLTIwcHg7XHJcblx0cmlnaHQ6IC00MHB4O1xyXG5cdGJvdHRvbTogLTQwcHg7XHJcblx0d2lkdGg6IGF1dG87XHJcblx0aGVpZ2h0OiBhdXRvO1xyXG5cdGJhY2tncm91bmQtaW1hZ2U6IHVybChsb2dpbi5qcGcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuXHR6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZ3JhZHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMjBweDtcclxuXHRsZWZ0OiAtMjBweDtcclxuXHRyaWdodDogLTQwcHg7XHJcblx0Ym90dG9tOiAtNDBweDtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDAsMCwwLDApKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMCwwLDAsMC42NSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0ei1pbmRleDogMTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSAzNXB4KTtcclxuXHRsZWZ0OiBjYWxjKDQyJSAtIDI1NXB4KTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaGVhZGVyIGRpdntcclxuXHRmbG9hdDogbGVmdDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgZGl2IHNwYW57XHJcblx0Y29sb3I6ICM1Mzc5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2lue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IGNhbGMoNTAlIC0gNzVweCk7XHJcblx0bGVmdDogY2FsYyg1MCUgLSA1MHB4KTtcclxuXHRoZWlnaHQ6IDE1MHB4O1xyXG5cdHdpZHRoOiAzNTBweDtcclxuXHRwYWRkaW5nOiAxMHB4O1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXRleHRde1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDMwcHg7XHJcblx0YmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG5cdGJvcmRlci1yYWRpdXM6IDJweDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0cGFkZGluZzogNHB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF17XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNiMzI0MDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2IzMjQwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGNvbG9yOiAjZWVlM2QxO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZle1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbi5sb2dpbiAuZXJyb3J7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNlZWUzZDE7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYnRue1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0Ym9yZGVyOiBub25lO1xyXG5cdGJhY2tncm91bmQtY29sb3I6IGluaGVyaXQ7XHJcblx0Zm9udC1zaXplOiAxOHB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblx0cGFkZGluZzogNnB4O1xyXG5cdG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgfVxyXG4gIFxyXG4uc3VjY2VzcyB7XHJcblx0Y29sb3I6ICNlZWUzZDE7XHJcbiAgfVxyXG4gIFxyXG4uc3VjY2Vzczpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTk5LCAxNDQpO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcblxyXG4gIC5mb3Jnb3Qge1xyXG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0Y29sb3I6I2VlZTNkMTtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0cGFkZGluZzowcHggMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG4uZm9yZ290OmhvdmVyIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG59XHJcbi5mb3Jnb3Q6YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcblxyXG46Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXJ7XHJcbiAgIGNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcbn1cclxuXHJcbjo6LW1vei1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/login-page/login-page.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/login-page/login-page.component.ts ***!
  \***************************************************************/
/*! exports provided: LoginPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageComponent", function() { return LoginPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let LoginPageComponent = class LoginPageComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.memberId = [];
        this.isCorrect = false;
        this.members = [];
        this.userLogin();
    }
    ngOnInit() {
    }
    userLogin() {
        this.appService.getMembers().subscribe(member => this.members = member);
    }
    login() {
        console.log(this.members);
        this.members.forEach(row => {
            if (row.username === this.Username && row.userPassword === this.Password) {
                this.router.navigateByUrl('/foods-list');
            }
            else {
                this.isCorrect = true;
            }
        });
    }
    password() {
        this.router.navigateByUrl('/new-password');
    }
    sign() {
        this.router.navigateByUrl('/sign-page');
    }
};
LoginPageComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
LoginPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'login-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login-page/login-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-page.component.css */ "./src/app/components/login-page/login-page.component.css")).default]
    })
], LoginPageComponent);



/***/ }),

/***/ "./src/app/components/new-password/new-password.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/new-password/new-password.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\r\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\r\nbody{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: #fff;\r\n\r\n\tcolor: #fff;\r\n\tfont-family: Arial;\r\n\tfont-size: 12px;\r\n}\r\n.body{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground-image: url(https://wallpaperplay.com/walls/full/1/6/2/93324.jpg);\r\n\tbackground-size: cover;\r\n\t-webkit-filter: blur(5px);\r\n\tz-index: 0;\r\n}\r\n.grad{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */\r\n\tz-index: 1;\r\n\topacity: 0.7;\r\n}\r\n.header{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 35px);\r\n\tleft: calc(42% - 255px);\r\n\tz-index: 2;\r\n}\r\n.header div{\r\n\tfloat: left;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 35px;\r\n\tfont-weight: 200;\r\n}\r\n.header div span{\r\n\tcolor: #5379fa !important;\r\n}\r\n.login{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 75px);\r\n\tleft: calc(50% - 50px);\r\n\theight: 150px;\r\n\twidth: 350px;\r\n\tpadding: 10px;\r\n\tz-index: 2;\r\n}\r\n.login input[type=text]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n}\r\n.login input[type=password]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tbackground: #b32400;\r\n\tborder: 1px solid #b32400;\r\n\tcursor: pointer;\r\n\tborder-radius: 4px;\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]:hover{\r\n\topacity: 0.8;\r\n}\r\n.login input[type=button]:active{\r\n\topacity: 0.6;\r\n}\r\n.login input[type=text]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=password]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=button]:focus{\r\n\toutline: none;\r\n}\r\n.login .text{\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n}\r\n.login .error{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tcursor: pointer;\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 18px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.back {\r\n\tbackground-color:transparent;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size:14px;\r\n\tpadding:0px 0px;\r\n\tborder: none;\r\n}\r\n.back:hover {\r\n\tbackground-color:transparent;\r\n}\r\n.back:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\n.ques{\r\n\t\tdisplay: inline-block;\r\n\t\tcolor: #e5e5e5;\r\n\t\tmargin-top: 20px;\r\n\t\tfont-size: 15px;\r\n\t\tfont-family: 'Exo', sans-serif;\r\n}\r\n.btn{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tborder: none;\r\n\tbackground-color: inherit;\r\n\tfont-size: 15px;\r\n\tcursor: pointer;\r\n\tdisplay: inline-block;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n\tfont-family: 'Exo', sans-serif;\r\n  }\r\n.success {\r\n\tcolor: #eee3d1;\r\n  }\r\n.success:hover {\r\n\tbackground-color: rgb(142, 199, 144);\r\n\tcolor: white;\r\n  }\r\n::-webkit-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n::-moz-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctcGFzc3dvcmQvbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFLGdGQUFnRjtBQUVoRjtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZ0JBQWdCOztDQUVoQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWiwyRUFBMkU7Q0FDM0Usc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixVQUFVO0FBQ1g7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWiw0SEFBNEgsRUFBRSxvQkFBb0I7Q0FDbEosVUFBVTtDQUNWLFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsVUFBVTtBQUNYO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7QUFDWDtBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsdUNBQXVDO0NBQ3ZDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtBQUNiO0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qix1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLGFBQWE7Q0FDYix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLGFBQWE7Q0FDYix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUVBO0NBQ0MsY0FBYztDQUNkLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7QUFDYjtBQUNBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixlQUFlO0NBQ2YsY0FBYztDQUNkLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsZ0JBQWdCO0NBQ2hCLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7QUFDQTtDQUNDLDRCQUE0QjtDQUM1QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87QUFDUjtBQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDhCQUE4QjtBQUNoQztBQUNBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWixZQUFZO0NBQ1oseUJBQXlCO0NBQ3pCLGVBQWU7Q0FDZixlQUFlO0NBQ2YscUJBQXFCO0NBQ3JCLFlBQVk7Q0FDWixnQkFBZ0I7Q0FDaEIsOEJBQThCO0VBQzdCO0FBRUY7Q0FDQyxjQUFjO0VBQ2I7QUFFRjtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0VBQ1g7QUFDRjtHQUNHLDRCQUE0QjtBQUMvQjtBQUVBO0dBQ0csNEJBQTRCO0FBQy9CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9uZXctcGFzc3dvcmQvbmV3LXBhc3N3b3JkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RXhvOjEwMCwyMDAsNDAwKTtcclxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVNvdXJjZStTYW5zK1Bybzo3MDAsNDAwLDMwMCk7XHJcblxyXG5ib2R5e1xyXG5cdG1hcmdpbjogMDtcclxuXHRwYWRkaW5nOiAwO1xyXG5cdGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiBBcmlhbDtcclxuXHRmb250LXNpemU6IDEycHg7XHJcbn1cclxuXHJcbi5ib2R5e1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0yMHB4O1xyXG5cdGxlZnQ6IC0yMHB4O1xyXG5cdHJpZ2h0OiAtNDBweDtcclxuXHRib3R0b206IC00MHB4O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly93YWxscGFwZXJwbGF5LmNvbS93YWxscy9mdWxsLzEvNi8yLzkzMzI0LmpwZyk7XHJcblx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuXHQtd2Via2l0LWZpbHRlcjogYmx1cig1cHgpO1xyXG5cdHotaW5kZXg6IDA7XHJcbn1cclxuXHJcbi5ncmFke1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IC0yMHB4O1xyXG5cdGxlZnQ6IC0yMHB4O1xyXG5cdHJpZ2h0OiAtNDBweDtcclxuXHRib3R0b206IC00MHB4O1xyXG5cdHdpZHRoOiBhdXRvO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHRiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBjb2xvci1zdG9wKDAlLHJnYmEoMCwwLDAsMCkpLCBjb2xvci1zdG9wKDEwMCUscmdiYSgwLDAsMCwwLjY1KSkpOyAvKiBDaHJvbWUsU2FmYXJpNCsgKi9cclxuXHR6LWluZGV4OiAxO1xyXG5cdG9wYWNpdHk6IDAuNztcclxufVxyXG5cclxuLmhlYWRlcntcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiBjYWxjKDUwJSAtIDM1cHgpO1xyXG5cdGxlZnQ6IGNhbGMoNDIlIC0gMjU1cHgpO1xyXG5cdHotaW5kZXg6IDI7XHJcbn1cclxuXHJcbi5oZWFkZXIgZGl2e1xyXG5cdGZsb2F0OiBsZWZ0O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDM1cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDIwMDtcclxufVxyXG5cclxuLmhlYWRlciBkaXYgc3BhbntcclxuXHRjb2xvcjogIzUzNzlmYSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubG9naW57XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSA3NXB4KTtcclxuXHRsZWZ0OiBjYWxjKDUwJSAtIDUwcHgpO1xyXG5cdGhlaWdodDogMTUwcHg7XHJcblx0d2lkdGg6IDM1MHB4O1xyXG5cdHBhZGRpbmc6IDEwcHg7XHJcblx0ei1pbmRleDogMjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9dGV4dF17XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA0cHg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDRweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25de1xyXG5cdHdpZHRoOiAyNTBweDtcclxuXHRoZWlnaHQ6IDM1cHg7XHJcblx0YmFja2dyb3VuZDogI2IzMjQwMDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCAjYjMyNDAwO1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxuXHRib3JkZXItcmFkaXVzOiA0cHg7XHJcblx0Y29sb3I6ICNlZWUzZDE7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmhvdmVye1xyXG5cdG9wYWNpdHk6IDAuODtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTphY3RpdmV7XHJcblx0b3BhY2l0eTogMC42O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT10ZXh0XTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9cGFzc3dvcmRdOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1idXR0b25dOmZvY3Vze1xyXG5cdG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5sb2dpbiAudGV4dHtcclxuXHRjb2xvcjogI2VlZTNkMTtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAxNnB4O1xyXG5cdGZvbnQtd2VpZ2h0OiA0MDA7XHJcblx0cGFkZGluZzogNnB4O1xyXG59XHJcbi5sb2dpbiAuZXJyb3J7XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Y29sb3I6ICNlZWUzZDE7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMThweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG5cdHBhZGRpbmc6IDZweDtcclxuXHRtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcbi5iYWNrIHtcclxuXHRiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG5cdGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG5cdGN1cnNvcjpwb2ludGVyO1xyXG5cdGNvbG9yOiNlZWUzZDE7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZToxNHB4O1xyXG5cdHBhZGRpbmc6MHB4IDBweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcbn1cclxuLmJhY2s6aG92ZXIge1xyXG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcbn1cclxuLmJhY2s6YWN0aXZlIHtcclxuXHRwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHR0b3A6MXB4O1xyXG59XHJcbi5xdWVze1xyXG5cdFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cdFx0Y29sb3I6ICNlNWU1ZTU7XHJcblx0XHRtYXJnaW4tdG9wOiAyMHB4O1xyXG5cdFx0Zm9udC1zaXplOiAxNXB4O1xyXG5cdFx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG59XHJcbi5idG57XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzVweDtcclxuXHRib3JkZXI6IG5vbmU7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxuXHRmb250LXNpemU6IDE1cHg7XHJcblx0Y3Vyc29yOiBwb2ludGVyO1xyXG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG4gIFxyXG4uc3VjY2VzcyB7XHJcblx0Y29sb3I6ICNlZWUzZDE7XHJcbiAgfVxyXG4gIFxyXG4uc3VjY2Vzczpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiKDE0MiwgMTk5LCAxNDQpO1xyXG5cdGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxufVxyXG5cclxuOjotbW96LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/new-password/new-password.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/new-password/new-password.component.ts ***!
  \*******************************************************************/
/*! exports provided: NewPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewPasswordComponent", function() { return NewPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let NewPasswordComponent = class NewPasswordComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.person = [];
        this.isCorrect = false;
        this.showAns = false;
        this.members = [];
        this.userLogin();
    }
    ngOnInit() {
    }
    sign() {
        this.person.push({
            'UserName': this.Username,
            'Email': this.Email,
            'Question': this.Ques
        });
        this.appService.postPerson(this.person);
    }
    userLogin() {
        this.appService.getMembers().subscribe(member => this.members = member);
    }
    login() {
        this.router.navigateByUrl('/login-page');
    }
    question() {
        this.members.forEach(row => {
            if (this.Username === row.username && this.Email === row.e_mail) {
                this.Ques = row.recoveryQues;
                this.isCorrect = true;
            }
            else if (this.Answer === row.recoveryAns) {
                this.router.navigateByUrl('/foods-list');
                this.isCorrect = true;
            }
        });
    }
};
NewPasswordComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
NewPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-password',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./new-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/new-password/new-password.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./new-password.component.css */ "./src/app/components/new-password/new-password.component.css")).default]
    })
], NewPasswordComponent);



/***/ }),

/***/ "./src/app/components/recipe/recipe.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\nobject {\r\n    display: none;\r\n  }\r\n  html, body {\r\n    height: 100%;\r\n    width: 100%;\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  body {\r\n    background-color: rgb(255, 255, 255);\r\n    color: rgb(59, 67, 68);\r\n    font-family: 'Montserrat', sans-serif;\r\n    background-image: url(http://assets.mugfoundation.com/images/textures/noisy/noisy1px.png);\r\n  }\r\n  h1, h2, h3{\r\n    margin: 0;\r\n    padding: 0;\r\n  }\r\n  ul, p{\r\n    margin: 0;\r\n  }\r\n  h1,h2 {\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  h1 {\r\n    font-size: 137.5%;\r\n  }\r\n  h2 {\r\n    font-size: 125%;\r\n  }\r\n  h3 {\r\n    font-size: 100%;\r\n  }\r\n  a:link, a:visited{\r\n    color: rgba(261, 47, 93, 0.8);\r\n  }\r\n  a:hover, a:active{\r\n    color: rgb(241, 47, 93);\r\n  }\r\n  .nav{\r\n    list-style-type: none;\r\n    padding: 0;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n  }\r\n  .nav a:link, .nav a:visited{\r\n    text-decoration: none;\r\n    display: block;\r\n    border-top: 1px solid rgb(232, 243, 248);\r\n    padding: 0.5em 0 0.5em 0;\r\n    color: rgb(66, 148, 182);\r\n  }\r\n  .nav a:hover, .nav a:active{\r\n    background-color: rgba(232, 243, 248, 0.3);\r\n  }\r\n  .infobox {\r\n    .avatar, .avatar img {\r\n      width: 200px;\r\n      height: 200px;\r\n      border-radius: 50%;\r\n    }\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    //border-bottom: 1.5px solid rgb(59, 67, 68);\r\n    p {\r\n      text-align: center;\r\n      font-size: 120%;\r\n    }\r\n    .title {\r\n      text-align: center;\r\n      font-size: 2em;\r\n    }\r\n    .quote{\r\n      background-color: rgb(238, 238, 238);\r\n      padding: 5px;\r\n      font-size: 130%;\r\n      margin-top: 10px;\r\n      margin-bottom: 10px;\r\n    }\r\n  }\r\n  .social{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n  }\r\n  .wrapper{\r\n    width: 100%;\r\n    margin: 0 auto 0 auto;\r\n  }\r\n  .header{\r\n    text-align: right;\r\n    padding: 2.5% 0 0 0;\r\n    border-bottom: 8px solid rgb(59, 67, 68);\r\n    margin-bottom: 2%;\r\n    h1{\r\n      font-size: 200%;\r\n      margin-bottom: 2%;\r\n      color: rgb(59, 67, 68);\r\n      span{\r\n        font-weight: bold;\r\n        color: rgb(241, 47, 93);\r\n      }\r\n    }\r\n  }\r\n  .main{\r\n    position: relative;\r\n  }\r\n  .article{\r\n    padding-left: 1.7em;\r\n    position: absolute;\r\n    left: 20%;\r\n    top: 0;\r\n    width: 48%;\r\n    margin-left: 1.5%;\r\n    .thumbnail, .thumbnail img {\r\n      width: 300px;\r\n      height: 300px;\r\n      border-radius: 50%;\r\n    }\r\n  }\r\n  .right{\r\n    width: 25%;\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    border-left: 1px solid rgb(59, 67, 68);\r\n    padding-left: 1%;\r\n  }\r\n  .footer{\r\n    margin-top: 2%;\r\n    border-top: 1.5px solid rgb(59, 67, 68);\r\n    a:link, a:visited{\r\n      color: rgba(261, 47, 93, 0.8);\r\n    }\r\n    a:hover, a:active{\r\n      color: rgb(241, 47, 93);\r\n    }\r\n    ul{\r\n      list-style-type: none;\r\n      padding: 0;\r\n    }\r\n    p{\r\n      font-size: 120%;\r\n      padding-bottom: 1%;\r\n    }\r\n  }\r\n  .left{\r\n    position: absolute;\r\n    left: 0;\r\n    top: 0;\r\n    width: 20%;\r\n    border-right: 1.5px solid rgb(59, 67, 68);\r\n    margin-right: 1em;\r\n    padding-right: 1%;\r\n  }\r\n  @media only screen and (min-width: 768px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 50px;\r\n        height: 50px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 100px;\r\n        height: 100px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 20%;\r\n    }\r\n  }\r\n  @media only screen and (min-width: 992px){\r\n    .infobox {\r\n      .avatar, .avatar img {\r\n        width: 200px;\r\n        height: 200px;\r\n        border-radius: 50%;\r\n      }\r\n        p {\r\n          text-align: center;\r\n          font-size: 100%;\r\n        }\r\n        .title {\r\n          text-align: center;\r\n          font-size: 110%;\r\n        }\r\n        .quote{\r\n          background-color: rgb(238, 238, 238);\r\n          padding: 5px;\r\n          font-size: 130%;\r\n          margin-top: 10px;\r\n          margin-bottom: 10px;\r\n        }\r\n      }\r\n    .article{\r\n      .thumbnail, .thumbnail img {\r\n        width: 300px;\r\n        height: 300px;\r\n      }\r\n    }\r\n    .right{\r\n      witdth: 30%;\r\n    }\r\n  }\r\n  .receipe-headline .receipe-duration {\r\n    border-left: 3px solid #40ba37;\r\n    padding: 15px;\r\n    font-family: \"Open Sans\", sans-serif;\r\n    font-size: 14px;\r\n}\r\n  @media only screen and (max-width: 767px)\r\n.receipe-headline h2 {\r\n    font-size: 24px;\r\n}\r\n  .receipe-headline h2 {\r\n    font-size: 36px;\r\n    color: #474747;\r\n    margin-bottom: 30px;\r\n}\r\n  h1, h2, h3, h4, h5, h6 {\r\n    color: #000000;\r\n    line-height: 1.3;\r\n    font-weight: 600;\r\n}\r\n  .receipe-ratings i {\r\n  font-size: 18px;\r\n  color: #fbb710;\r\n  padding: 0 3px;\r\n}\r\n  .fa {\r\n  display: inline-block;\r\n  font: italic normal normal 17px/1 FontAwesome;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n  color: #9b9b9b;\r\n  margin-top: 20px;\r\n}\r\n  .ingredients .custom-control-label {\r\n  margin-bottom: 0;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  padding-left: 40px;\r\n  margin-right: -70px;\r\n  margin-left: -25px;\r\n  font-size: 14px;\r\n  color: #2f2f2f;\r\n}\r\n  .ingredients .custom-checkbox .custom-control-input:checked ~ .custom-control-label::before {\r\n  background-color: #40ba37;\r\n}\r\n  .custom-checkbox .custom-control-input:checked~.custom-control-label::before {\r\n  background-color: #007bff;\r\n}\r\n  .ingredients .custom-checkbox .custom-control-label::before {\r\n  border-radius: 0;\r\n}\r\n  .custom-control-input:checked~.custom-control-label::before {\r\n  color: #fff;\r\n  background-color: #007bff;\r\n}\r\n  .ingredients .custom-control-label::before {\r\n  width: 30px;\r\n  height: 30px;\r\n  background-color: #f3f5f8;\r\n}\r\n  .custom-checkbox .custom-control-label::before {\r\n  border-radius: .25rem;\r\n}\r\n  .custom-control-label::before {\r\n  position: absolute;\r\n  top: .25rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  pointer-events: none;\r\n  content: \"\";\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  background-color: #dee2e6;\r\n}\r\n  *, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n  .ingredients .custom-control-label::after {\r\n  top: 10px;\r\n  left: 5px;\r\n  width: 20px;\r\n  height: 20px;\r\n}\r\n  .custom-control-label::after {\r\n  position: absolute;\r\n  top: .25rem;\r\n  left: 0;\r\n  display: block;\r\n  width: 1rem;\r\n  height: 1rem;\r\n  content: \"\";\r\n  background-repeat: no-repeat;\r\n  background-position: center center;\r\n  background-size: 50% 50%;\r\n}\r\n  *, ::after, ::before {\r\n  box-sizing: border-box;\r\n}\r\n  .single-preparation-step h4 {\r\n  color: #474747;\r\n  flex: 0 0 60px;\r\n  max-width: 60px;\r\n  width: 60px;\r\n  margin-bottom: 0;\r\n}\r\n  p {\r\n  color: #9b9b9b;\r\n  font-size: 14px;\r\n  line-height: 2;\r\n  font-weight: 400;\r\n  font-family: \"Open Sans\", sans-serif;\r\n  margin-bottom: 1rem;\r\n}\r\n  .ingredients h4 {\r\n  color: #474747;\r\n  margin-bottom: 30px;\r\n  font-family: inherit;\r\n  font-style: normal;\r\n  font-weight: 600;\r\n}\r\n  .welcome-area .welcome-img {\r\n  padding-left: 25%;\r\n}\r\n  .rate {\r\n  float: left;\r\n  height: 46px;\r\n  padding: 0 10px;\r\n}\r\n  .rate:not(:checked) > input {\r\n  position:absolute;\r\n  top:-9999px;\r\n}\r\n  .rate:not(:checked) > label {\r\n  float:right;\r\n  width:1em;\r\n  overflow:hidden;\r\n  white-space:nowrap;\r\n  cursor:pointer;\r\n  font-size:30px;\r\n  color:#ccc;\r\n}\r\n  .rate:not(:checked) > label:before {\r\n  content: '★ ';\r\n}\r\n  .rate > input:checked ~ label {\r\n  color: #ffc700;    \r\n}\r\n  .rate:not(:checked) > label:hover,\r\n.rate:not(:checked) > label:hover ~ label {\r\n  color: #deb217;  \r\n}\r\n  .rate > input:checked + label:hover,\r\n.rate > input:checked + label:hover ~ label,\r\n.rate > input:checked ~ label:hover,\r\n.rate > input:checked ~ label:hover ~ label,\r\n.rate > label:hover ~ input:checked ~ label {\r\n  color: #c59b08;\r\n}\r\n  .comment {\r\n    flex: 0 0 100%;\r\n    position: relative;\r\n    width: 500px;\r\n    height: 100px;\r\n    min-height: 1px;\r\n    padding-right: 15px;\r\n    padding-left: 15px;\r\n}\r\n  .comment-container {\r\n  width: 60%;\r\n  margin: 2rem auto;\r\n}\r\n  a {\r\n  color: #c40030;\r\n  background-color: transparent;\r\n  -webkit-text-decoration-skip: objects;\r\n}\r\n  .v-btn {\r\n  align-items: center;\r\n  border-radius: 2px;\r\n  display: inline-flex;\r\n  height: 36px;\r\n  flex: 0 0 auto;\r\n  font-size: 14px;\r\n  font-weight: 700;\r\n  justify-content: center;\r\n  margin: 6px 8px;\r\n  min-width: 88px;\r\n  outline: 0;\r\n  text-transform: uppercase;\r\n  text-decoration: none;\r\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1), color 1ms;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  -webkit-user-select: none;\r\n  -moz-user-select: none;\r\n  -ms-user-select: none;\r\n  user-select: none;\r\n  padding: 0 16px;\r\n}\r\n  .v-btn:before {\r\n  border-radius: inherit;\r\n  color: inherit;\r\n  content: \"\";\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  opacity: 0.12;\r\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\r\n  width: 100%;\r\n}\r\n  .v-btn:focus,\r\n.v-btn:hover {\r\n  position: relative;\r\n}\r\n  .v-btn:focus:before,\r\n.v-btn:hover:before {\r\n  background-color: currentColor;\r\n}\r\n  .v-btn__content {\r\n  align-items: center;\r\n  border-radius: inherit;\r\n  color: inherit;\r\n  display: flex;\r\n  flex: 1 0 auto;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  position: relative;\r\n  transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);\r\n  white-space: nowrap;\r\n  width: inherit;\r\n}\r\n  .v-btn:not(.v-btn--depressed):not(.v-btn--flat) {\r\n  will-change: box-shadow;\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 5px 0 rgba(0, 0, 0, 0.12);\r\n}\r\n  .v-btn:not(.v-btn--depressed):not(.v-btn--flat):active {\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n    0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n  .v-card {\r\n  text-decoration: none;\r\n}\r\n  .v-card > :first-child:not(.v-btn):not(.v-chip) {\r\n  border-top-left-radius: inherit;\r\n  border-top-right-radius: inherit;\r\n}\r\n  .v-card > :last-child:not(.v-btn):not(.v-chip) {\r\n  border-bottom-left-radius: inherit;\r\n  border-bottom-right-radius: inherit;\r\n}\r\n  .v-sheet {\r\n  display: block;\r\n  border-radius: 2px;\r\n  position: relative;\r\n}\r\n  .v-dialog__container {\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n}\r\n  .elevation-2 {\r\n  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\r\n    0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\r\n}\r\n  .headline {\r\n  font-weight: 400;\r\n  letter-spacing: normal !important;\r\n  font-size: 24px !important;\r\n  line-height: 32px !important;\r\n}\r\n  .title {\r\n  font-size: 20px !important;\r\n  font-weight: 700;\r\n  line-height: 1 !important;\r\n  letter-spacing: 0.02em !important;\r\n}\r\n  .caption {\r\n  font-weight: 400;\r\n  font-size: 12px !important;\r\n}\r\n  .theme--light.v-btn {\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n  .theme--light.v-btn:not(.v-btn--icon):not(.v-btn--flat) {\r\n  background-color: #f5f5f5;\r\n}\r\n  .theme--light .v-card {\r\n  box-shadow: rgba(0, 0, 0, 0.11) 0 15px 30px 0px,\r\n    rgba(0, 0, 0, 0.08) 0 5px 15px 0 !important;\r\n}\r\n  .theme--light.application .v-card {\r\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11),\r\n    0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\r\n  color: #102c3c !important;\r\n}\r\n  .theme--light.v-card,\r\n.theme--light.v-sheet {\r\n  background-color: #fff;\r\n  border-color: #fff;\r\n  color: rgba(0, 0, 0, 0.87);\r\n}\r\n  a,\r\na:hover {\r\n  text-decoration: none !important;\r\n}\r\n  .wrapper {\r\n  overflow: auto;\r\n}\r\n  .answers {\r\n  padding-left: 64px;\r\n}\r\n  .comment {\r\n  overflow-y: auto;\r\n  margin-left: 32px;\r\n  margin-right: 16px;\r\n}\r\n  .comment p {\r\n  font-size: 14px;\r\n  margin-bottom: 7px;\r\n}\r\n  .displayName {\r\n  margin-right: 170px;\r\n}\r\n  .displayName2 {\r\n  margin-right: 50px;\r\n}\r\n  .actions {\r\n  display: flex;\r\n  flex: 1;\r\n  flex-direction: row;\r\n  justify-content: flex-end;\r\n}\r\n  .google-span[data-v-35838f51] {\r\n  font-size: 14px;\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n  .google-button[data-v-35838f51] {\r\n  background-color: #fff;\r\n  height: 40px;\r\n  margin: 0;\r\n}\r\n  .headline {\r\n  margin-left: 32px;\r\n}\r\n  .sign-in-wrapper {\r\n  margin-top: 16px;\r\n  margin-left: 32px;\r\n}\r\n  .error-message {\r\n  font-style: oblique;\r\n  color: #c40030;\r\n}\r\n  ::-moz-selection,\r\n::-moz-selection {\r\n  background-color: #b3d4fc;\r\n  color: #000;\r\n  text-shadow: none;\r\n}\r\n  ::-moz-selection,\r\n::selection {\r\n  background-color: #b3d4fc;\r\n  color: #000;\r\n  text-shadow: none;\r\n}\r\n  .card,\r\n.card {\r\n  padding: 32px 16px;\r\n  margin-bottom: 32px;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n  .application a,\r\n[type=\"button\"],\r\nbutton {\r\n  cursor: pointer;\r\n}\r\n  @media screen and (max-width: 640px) {\r\n  .comment-container {\r\n    width: 90%;\r\n  }\r\n  .comments {\r\n    padding: 32px;\r\n  }\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksYUFBYTtFQUNmO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLFNBQVM7SUFDVCxVQUFVO0VBQ1o7RUFDQTtJQUNFLG9DQUFvQztJQUNwQyxzQkFBc0I7SUFDdEIscUNBQXFDO0lBQ3JDLHlGQUF5RjtFQUMzRjtFQUlBO0lBQ0UsU0FBUztJQUNULFVBQVU7RUFDWjtFQUNBO0lBQ0UsU0FBUztFQUNYO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsZUFBZTtFQUNqQjtFQUNBO0lBQ0UsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHFCQUFxQjtJQUNyQixVQUFVO0lBQ1YsdUNBQXVDO0VBQ3pDO0VBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztJQUNkLHdDQUF3QztJQUN4Qyx3QkFBd0I7SUFDeEIsd0JBQXdCO0VBQzFCO0VBQ0E7SUFDRSwwQ0FBMEM7RUFDNUM7RUFFQTtJQUNFO01BQ0UsWUFBWTtNQUNaLGFBQWE7TUFDYixrQkFBa0I7SUFDcEI7SUFDQSx1Q0FBdUM7SUFDdkMsNENBQTRDO0lBQzVDO01BQ0Usa0JBQWtCO01BQ2xCLGVBQWU7SUFDakI7SUFDQTtNQUNFLGtCQUFrQjtNQUNsQixjQUFjO0lBQ2hCO0lBQ0E7TUFDRSxvQ0FBb0M7TUFDcEMsWUFBWTtNQUNaLGVBQWU7TUFDZixnQkFBZ0I7TUFDaEIsbUJBQW1CO0lBQ3JCO0VBQ0Y7RUFDQTtJQUNFLGNBQWM7SUFDZCx1Q0FBdUM7SUFDdkM7TUFDRSxxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0VBQ0Y7RUFDQTtJQUNFLFdBQVc7SUFDWCxxQkFBcUI7RUFDdkI7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQjtNQUNFLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsc0JBQXNCO01BQ3RCO1FBQ0UsaUJBQWlCO1FBQ2pCLHVCQUF1QjtNQUN6QjtJQUNGO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsTUFBTTtJQUNOLFVBQVU7SUFDVixpQkFBaUI7SUFDakI7TUFDRSxZQUFZO01BQ1osYUFBYTtNQUNiLGtCQUFrQjtJQUNwQjtFQUNGO0VBQ0E7SUFDRSxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sc0NBQXNDO0lBQ3RDLGdCQUFnQjtFQUNsQjtFQUNBO0lBQ0UsY0FBYztJQUNkLHVDQUF1QztJQUN2QztNQUNFLDZCQUE2QjtJQUMvQjtJQUNBO01BQ0UsdUJBQXVCO0lBQ3pCO0lBQ0E7TUFDRSxxQkFBcUI7TUFDckIsVUFBVTtJQUNaO0lBQ0E7TUFDRSxlQUFlO01BQ2Ysa0JBQWtCO0lBQ3BCO0VBQ0Y7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixPQUFPO0lBQ1AsTUFBTTtJQUNOLFVBQVU7SUFDVix5Q0FBeUM7SUFDekMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtFQUNBO0lBQ0U7TUFDRTtRQUNFLFdBQVc7UUFDWCxZQUFZO1FBQ1osa0JBQWtCO01BQ3BCO1FBQ0U7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjtRQUNBO1VBQ0Usa0JBQWtCO1VBQ2xCLGVBQWU7UUFDakI7UUFDQTtVQUNFLG9DQUFvQztVQUNwQyxZQUFZO1VBQ1osZUFBZTtVQUNmLGdCQUFnQjtVQUNoQixtQkFBbUI7UUFDckI7TUFDRjtJQUNGO01BQ0U7UUFDRSxZQUFZO1FBQ1osYUFBYTtNQUNmO0lBQ0Y7SUFDQTtNQUNFLFdBQVc7SUFDYjtFQUNGO0VBQ0E7SUFDRTtNQUNFO1FBQ0UsWUFBWTtRQUNaLGFBQWE7UUFDYixrQkFBa0I7TUFDcEI7UUFDRTtVQUNFLGtCQUFrQjtVQUNsQixlQUFlO1FBQ2pCO1FBQ0E7VUFDRSxrQkFBa0I7VUFDbEIsZUFBZTtRQUNqQjtRQUNBO1VBQ0Usb0NBQW9DO1VBQ3BDLFlBQVk7VUFDWixlQUFlO1VBQ2YsZ0JBQWdCO1VBQ2hCLG1CQUFtQjtRQUNyQjtNQUNGO0lBQ0Y7TUFDRTtRQUNFLFlBQVk7UUFDWixhQUFhO01BQ2Y7SUFDRjtJQUNBO01BQ0UsV0FBVztJQUNiO0VBQ0Y7RUFHRjtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2Isb0NBQW9DO0lBQ3BDLGVBQWU7QUFDbkI7RUFJQTs7SUFFSSxlQUFlO0FBQ25CO0VBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLG1CQUFtQjtBQUN2QjtFQUNBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtJQUNoQixnQkFBZ0I7QUFDcEI7RUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsY0FBYztBQUNoQjtFQUNBO0VBQ0UscUJBQXFCO0VBQ3JCLDZDQUE2QztFQUM3QyxtQ0FBbUM7RUFDbkMsa0NBQWtDO0VBQ2xDLGNBQWM7RUFDZCxnQkFBZ0I7QUFDbEI7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixjQUFjO0FBQ2hCO0VBRUE7RUFDRSx5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLHlCQUF5QjtBQUMzQjtFQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gseUJBQXlCO0FBQzNCO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtFQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7RUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0UsU0FBUztFQUNULFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtBQUNkO0VBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLE9BQU87RUFDUCxjQUFjO0VBQ2QsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLGtDQUFrQztFQUNsQyx3QkFBd0I7QUFDMUI7RUFDQTtFQUNFLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0UsY0FBYztFQUdkLGNBQWM7RUFDZCxlQUFlO0VBQ2YsV0FBVztFQUNYLGdCQUFnQjtBQUNsQjtFQUVBO0VBQ0UsY0FBYztFQUNkLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7QUFDckI7RUFFQTtFQUNFLGNBQWM7RUFDZCxtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixnQkFBZ0I7QUFDbEI7RUFDQTtFQUNFLGlCQUFpQjtBQUNuQjtFQUdBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0VBQ0E7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztBQUNiO0VBQ0E7RUFDRSxXQUFXO0VBQ1gsU0FBUztFQUNULGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGNBQWM7RUFDZCxVQUFVO0FBQ1o7RUFDQTtFQUNFLGFBQWE7QUFDZjtFQUNBO0VBQ0UsY0FBYztBQUNoQjtFQUNBOztFQUVFLGNBQWM7QUFDaEI7RUFDQTs7Ozs7RUFLRSxjQUFjO0FBQ2hCO0VBRUE7SUFFSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixrQkFBa0I7QUFDdEI7RUFLQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7RUFFQTtFQUNFLGNBQWM7RUFDZCw2QkFBNkI7RUFDN0IscUNBQXFDO0FBQ3ZDO0VBRUE7RUFDRSxtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLGVBQWU7RUFDZixlQUFlO0VBQ2YsVUFBVTtFQUNWLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFDckIsMkRBQTJEO0VBQzNELGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7RUFFQTtFQUNFLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0RBQWdEO0VBQ2hELFdBQVc7QUFDYjtFQUVBOztFQUVFLGtCQUFrQjtBQUNwQjtFQUVBOztFQUVFLDhCQUE4QjtBQUNoQztFQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsYUFBYTtFQUNiLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnREFBZ0Q7RUFDaEQsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7RUFFQTtFQUNFLHVCQUF1QjtFQUN2QjttQ0FDaUM7QUFDbkM7RUFFQTtFQUNFOzBFQUN3RTtBQUMxRTtFQUdBO0VBQ0UscUJBQXFCO0FBQ3ZCO0VBRUE7RUFDRSwrQkFBK0I7RUFDL0IsZ0NBQWdDO0FBQ2xDO0VBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsbUNBQW1DO0FBQ3JDO0VBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQjtBQUNwQjtFQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLHNCQUFzQjtBQUN4QjtFQUVBO0VBQ0U7OENBQzRDO0FBQzlDO0VBR0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUNBQWlDO0VBQ2pDLDBCQUEwQjtFQUMxQiw0QkFBNEI7QUFDOUI7RUFFQTtFQUNFLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLGlDQUFpQztBQUNuQztFQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtBQUM1QjtFQUVBO0VBQ0UsMEJBQTBCO0FBQzVCO0VBRUE7RUFDRSx5QkFBeUI7QUFDM0I7RUFFQTtFQUNFOytDQUM2QztBQUMvQztFQUVBO0VBQ0U7K0NBQzZDO0VBQzdDLHlCQUF5QjtBQUMzQjtFQUVBOztFQUVFLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsMEJBQTBCO0FBQzVCO0VBRUE7O0VBRUUsZ0NBQWdDO0FBQ2xDO0VBRUE7RUFDRSxjQUFjO0FBQ2hCO0VBRUE7RUFDRSxrQkFBa0I7QUFDcEI7RUFFQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0FBQ3BCO0VBRUE7RUFDRSxtQkFBbUI7QUFDckI7RUFDQTtFQUNFLGtCQUFrQjtBQUNwQjtFQUNBO0VBQ0UsYUFBYTtFQUNiLE9BQU87RUFDUCxtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCO0VBRUE7RUFDRSxlQUFlO0VBQ2YsMEJBQTBCO0FBQzVCO0VBRUE7RUFDRSxzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFNBQVM7QUFDWDtFQUVBO0VBQ0UsaUJBQWlCO0FBQ25CO0VBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0VBR0E7RUFDRSxtQkFBbUI7RUFDbkIsY0FBYztBQUNoQjtFQUVBOztFQUVFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0VBTEE7O0VBRUUseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxpQkFBaUI7QUFDbkI7RUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7RUFFQTs7O0VBR0UsZUFBZTtBQUNqQjtFQUVBO0VBQ0U7SUFDRSxVQUFVO0VBQ1o7RUFDQTtJQUNFLGFBQWE7RUFDZjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9yZWNpcGUvcmVjaXBlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxub2JqZWN0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG4gIGh0bWwsIGJvZHkge1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG4gIH1cclxuICBib2R5IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuICAgIGNvbG9yOiByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBmb250LWZhbWlseTogJ01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHA6Ly9hc3NldHMubXVnZm91bmRhdGlvbi5jb20vaW1hZ2VzL3RleHR1cmVzL25vaXN5L25vaXN5MXB4LnBuZyk7XHJcbiAgfVxyXG5cclxuXHJcbiAgXHJcbiAgaDEsIGgyLCBoM3tcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgfVxyXG4gIHVsLCBwe1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuICBoMSxoMiB7XHJcbiAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICB9XHJcbiAgaDEge1xyXG4gICAgZm9udC1zaXplOiAxMzcuNSU7XHJcbiAgfVxyXG4gIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMTI1JTtcclxuICB9XHJcbiAgaDMge1xyXG4gICAgZm9udC1zaXplOiAxMDAlO1xyXG4gIH1cclxuICBhOmxpbmssIGE6dmlzaXRlZHtcclxuICAgIGNvbG9yOiByZ2JhKDI2MSwgNDcsIDkzLCAwLjgpO1xyXG4gIH1cclxuICBhOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgIGNvbG9yOiByZ2IoMjQxLCA0NywgOTMpO1xyXG4gIH1cclxuICAubmF2e1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICB9XHJcbiAgLm5hdiBhOmxpbmssIC5uYXYgYTp2aXNpdGVke1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgcmdiKDIzMiwgMjQzLCAyNDgpO1xyXG4gICAgcGFkZGluZzogMC41ZW0gMCAwLjVlbSAwO1xyXG4gICAgY29sb3I6IHJnYig2NiwgMTQ4LCAxODIpO1xyXG4gIH1cclxuICAubmF2IGE6aG92ZXIsIC5uYXYgYTphY3RpdmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIzMiwgMjQzLCAyNDgsIDAuMyk7XHJcbiAgfVxyXG4gIFxyXG4gIC5pbmZvYm94IHtcclxuICAgIC5hdmF0YXIsIC5hdmF0YXIgaW1nIHtcclxuICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICB9XHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICAvL2JvcmRlci1ib3R0b206IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIHAge1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTIwJTtcclxuICAgIH1cclxuICAgIC50aXRsZSB7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgZm9udC1zaXplOiAyZW07XHJcbiAgICB9XHJcbiAgICAucXVvdGV7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zb2NpYWx7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxuICAgIGJvcmRlci10b3A6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIHVse1xyXG4gICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC53cmFwcGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDAgYXV0byAwIGF1dG87XHJcbiAgfVxyXG4gIC5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIHBhZGRpbmc6IDIuNSUgMCAwIDA7XHJcbiAgICBib3JkZXItYm90dG9tOiA4cHggc29saWQgcmdiKDU5LCA2NywgNjgpO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMiU7XHJcbiAgICBoMXtcclxuICAgICAgZm9udC1zaXplOiAyMDAlO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyJTtcclxuICAgICAgY29sb3I6IHJnYig1OSwgNjcsIDY4KTtcclxuICAgICAgc3BhbntcclxuICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICBjb2xvcjogcmdiKDI0MSwgNDcsIDkzKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAubWFpbntcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB9XHJcbiAgLmFydGljbGV7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEuN2VtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDQ4JTtcclxuICAgIG1hcmdpbi1sZWZ0OiAxLjUlO1xyXG4gICAgLnRodW1ibmFpbCwgLnRodW1ibmFpbCBpbWcge1xyXG4gICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgIGhlaWdodDogMzAwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxuICB9XHJcbiAgLnJpZ2h0e1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDElO1xyXG4gIH1cclxuICAuZm9vdGVye1xyXG4gICAgbWFyZ2luLXRvcDogMiU7XHJcbiAgICBib3JkZXItdG9wOiAxLjVweCBzb2xpZCByZ2IoNTksIDY3LCA2OCk7XHJcbiAgICBhOmxpbmssIGE6dmlzaXRlZHtcclxuICAgICAgY29sb3I6IHJnYmEoMjYxLCA0NywgOTMsIDAuOCk7XHJcbiAgICB9XHJcbiAgICBhOmhvdmVyLCBhOmFjdGl2ZXtcclxuICAgICAgY29sb3I6IHJnYigyNDEsIDQ3LCA5Myk7XHJcbiAgICB9XHJcbiAgICB1bHtcclxuICAgICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgfVxyXG4gICAgcHtcclxuICAgICAgZm9udC1zaXplOiAxMjAlO1xyXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMSU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5sZWZ0e1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkIHJnYig1OSwgNjcsIDY4KTtcclxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xyXG4gICAgcGFkZGluZy1yaWdodDogMSU7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpe1xyXG4gICAgLmluZm9ib3gge1xyXG4gICAgICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDUwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgICAgIHAge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucXVvdGV7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM4LCAyMzgsIDIzOCk7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEzMCU7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIC5hcnRpY2xle1xyXG4gICAgICAudGh1bWJuYWlsLCAudGh1bWJuYWlsIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC5yaWdodHtcclxuICAgICAgd2l0ZHRoOiAyMCU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xyXG4gICAgLmluZm9ib3gge1xyXG4gICAgICAuYXZhdGFyLCAuYXZhdGFyIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICB9XHJcbiAgICAgICAgcCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50aXRsZSB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDExMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5xdW90ZXtcclxuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzgsIDIzOCwgMjM4KTtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweDtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTMwJTtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgLmFydGljbGV7XHJcbiAgICAgIC50aHVtYm5haWwsIC50aHVtYm5haWwgaW1nIHtcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnJpZ2h0e1xyXG4gICAgICB3aXRkdGg6IDMwJTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuLnJlY2VpcGUtaGVhZGxpbmUgLnJlY2VpcGUtZHVyYXRpb24ge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCAjNDBiYTM3O1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpXHJcbi5yZWNlaXBlLWhlYWRsaW5lIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG4ucmVjZWlwZS1oZWFkbGluZSBoMiB7XHJcbiAgICBmb250LXNpemU6IDM2cHg7XHJcbiAgICBjb2xvcjogIzQ3NDc0NztcclxuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbn1cclxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XHJcbiAgICBjb2xvcjogIzAwMDAwMDtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcblxyXG4ucmVjZWlwZS1yYXRpbmdzIGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBjb2xvcjogI2ZiYjcxMDtcclxuICBwYWRkaW5nOiAwIDNweDtcclxufVxyXG4uZmEge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250OiBpdGFsaWMgbm9ybWFsIG5vcm1hbCAxN3B4LzEgRm9udEF3ZXNvbWU7XHJcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XHJcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICBjb2xvcjogIzliOWI5YjtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMgLmN1c3RvbS1jb250cm9sLWxhYmVsIHtcclxuICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IC03MHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMjVweDtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICMyZjJmMmY7XHJcbn1cclxuXHJcbi5pbmdyZWRpZW50cyAuY3VzdG9tLWNoZWNrYm94IC5jdXN0b20tY29udHJvbC1pbnB1dDpjaGVja2VkIH4gLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0MGJhMzc7XHJcbn1cclxuLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG4uaW5ncmVkaWVudHMgLmN1c3RvbS1jaGVja2JveCAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxufVxyXG4uY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZH4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxufVxyXG4uaW5ncmVkaWVudHMgLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIHdpZHRoOiAzMHB4O1xyXG4gIGhlaWdodDogMzBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjNmNWY4O1xyXG59XHJcbi5jdXN0b20tY2hlY2tib3ggLmN1c3RvbS1jb250cm9sLWxhYmVsOjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxufVxyXG4uY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLjI1cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGVlMmU2O1xyXG59XHJcbiosIDo6YWZ0ZXIsIDo6YmVmb3JlIHtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4uaW5ncmVkaWVudHMgLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgdG9wOiAxMHB4O1xyXG4gIGxlZnQ6IDVweDtcclxuICB3aWR0aDogMjBweDtcclxuICBoZWlnaHQ6IDIwcHg7XHJcbn1cclxuLmN1c3RvbS1jb250cm9sLWxhYmVsOjphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogLjI1cmVtO1xyXG4gIGxlZnQ6IDA7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogNTAlIDUwJTtcclxufVxyXG4qLCA6OmFmdGVyLCA6OmJlZm9yZSB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG5cclxuLnNpbmdsZS1wcmVwYXJhdGlvbi1zdGVwIGg0IHtcclxuICBjb2xvcjogIzQ3NDc0NztcclxuICAtd2Via2l0LWJveC1mbGV4OiAwO1xyXG4gIC1tcy1mbGV4OiAwIDAgNjBweDtcclxuICBmbGV4OiAwIDAgNjBweDtcclxuICBtYXgtd2lkdGg6IDYwcHg7XHJcbiAgd2lkdGg6IDYwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxucCB7XHJcbiAgY29sb3I6ICM5YjliOWI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGxpbmUtaGVpZ2h0OiAyO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1mYW1pbHk6IFwiT3BlbiBTYW5zXCIsIHNhbnMtc2VyaWY7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxufVxyXG5cclxuLmluZ3JlZGllbnRzIGg0IHtcclxuICBjb2xvcjogIzQ3NDc0NztcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG59XHJcbi53ZWxjb21lLWFyZWEgLndlbGNvbWUtaW1nIHtcclxuICBwYWRkaW5nLWxlZnQ6IDI1JTtcclxufVxyXG5cclxuXHJcbi5yYXRlIHtcclxuICBmbG9hdDogbGVmdDtcclxuICBoZWlnaHQ6IDQ2cHg7XHJcbiAgcGFkZGluZzogMCAxMHB4O1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBpbnB1dCB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgdG9wOi05OTk5cHg7XHJcbn1cclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsIHtcclxuICBmbG9hdDpyaWdodDtcclxuICB3aWR0aDoxZW07XHJcbiAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gIHdoaXRlLXNwYWNlOm5vd3JhcDtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxuICBmb250LXNpemU6MzBweDtcclxuICBjb2xvcjojY2NjO1xyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6ICfimIUgJztcclxufVxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XHJcbiAgY29sb3I6ICNmZmM3MDA7ICAgIFxyXG59XHJcbi5yYXRlOm5vdCg6Y2hlY2tlZCkgPiBsYWJlbDpob3ZlcixcclxuLnJhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xyXG4gIGNvbG9yOiAjZGViMjE3OyAgXHJcbn1cclxuLnJhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyIH4gbGFiZWwsXHJcbi5yYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxyXG4ucmF0ZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxyXG4ucmF0ZSA+IGxhYmVsOmhvdmVyIH4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcclxuICBjb2xvcjogI2M1OWIwODtcclxufVxyXG5cclxuLmNvbW1lbnQge1xyXG4gICAgLW1zLWZsZXg6IDAgMCAxMDAlO1xyXG4gICAgZmxleDogMCAwIDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgbWluLWhlaWdodDogMXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICAgIHBhZGRpbmctbGVmdDogMTVweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIG1hcmdpbjogMnJlbSBhdXRvO1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogI2M0MDAzMDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAtd2Via2l0LXRleHQtZGVjb3JhdGlvbi1za2lwOiBvYmplY3RzO1xyXG59XHJcblxyXG4udi1idG4ge1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGhlaWdodDogMzZweDtcclxuICBmbGV4OiAwIDAgYXV0bztcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBtYXJnaW46IDZweCA4cHg7XHJcbiAgbWluLXdpZHRoOiA4OHB4O1xyXG4gIG91dGxpbmU6IDA7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpLCBjb2xvciAxbXM7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcclxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xyXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcclxuICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICBwYWRkaW5nOiAwIDE2cHg7XHJcbn1cclxuXHJcbi52LWJ0bjpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XHJcbiAgY29sb3I6IGluaGVyaXQ7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG9wYWNpdHk6IDAuMTI7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBjdWJpYy1iZXppZXIoMC4yNSwgMC44LCAwLjUsIDEpO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4udi1idG46Zm9jdXMsXHJcbi52LWJ0bjpob3ZlciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4udi1idG46Zm9jdXM6YmVmb3JlLFxyXG4udi1idG46aG92ZXI6YmVmb3JlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi52LWJ0bl9fY29udGVudCB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMSAwIGF1dG87XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zaXRpb246IDAuM3MgY3ViaWMtYmV6aWVyKDAuMjUsIDAuOCwgMC41LCAxKTtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4udi1idG46bm90KC52LWJ0bi0tZGVwcmVzc2VkKTpub3QoLnYtYnRuLS1mbGF0KSB7XHJcbiAgd2lsbC1jaGFuZ2U6IGJveC1zaGFkb3c7XHJcbiAgYm94LXNoYWRvdzogMCAzcHggMXB4IC0ycHggcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDJweCAycHggMCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxyXG4gICAgMCAxcHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLnYtYnRuOm5vdCgudi1idG4tLWRlcHJlc3NlZCk6bm90KC52LWJ0bi0tZmxhdCk6YWN0aXZlIHtcclxuICBib3gtc2hhZG93OiAwIDVweCA1cHggLTNweCByZ2JhKDAsIDAsIDAsIDAuMiksXHJcbiAgICAwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xyXG59XHJcblxyXG5cclxuLnYtY2FyZCB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4udi1jYXJkID4gOmZpcnN0LWNoaWxkOm5vdCgudi1idG4pOm5vdCgudi1jaGlwKSB7XHJcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcclxufVxyXG5cclxuLnYtY2FyZCA+IDpsYXN0LWNoaWxkOm5vdCgudi1idG4pOm5vdCgudi1jaGlwKSB7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogaW5oZXJpdDtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogaW5oZXJpdDtcclxufVxyXG5cclxuLnYtc2hlZXQge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi52LWRpYWxvZ19fY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuLmVsZXZhdGlvbi0yIHtcclxuICBib3gtc2hhZG93OiAwIDNweCAxcHggLTJweCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAwIDFweCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcblxyXG4uaGVhZGxpbmUge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IG5vcm1hbCAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjRweCAhaW1wb3J0YW50O1xyXG4gIGxpbmUtaGVpZ2h0OiAzMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiAyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICBsaW5lLWhlaWdodDogMSAhaW1wb3J0YW50O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjAyZW0gIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNhcHRpb24ge1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aGVtZS0tbGlnaHQudi1idG4ge1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcblxyXG4udGhlbWUtLWxpZ2h0LnYtYnRuOm5vdCgudi1idG4tLWljb24pOm5vdCgudi1idG4tLWZsYXQpIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY1O1xyXG59XHJcblxyXG4udGhlbWUtLWxpZ2h0IC52LWNhcmQge1xyXG4gIGJveC1zaGFkb3c6IHJnYmEoMCwgMCwgMCwgMC4xMSkgMCAxNXB4IDMwcHggMHB4LFxyXG4gICAgcmdiYSgwLCAwLCAwLCAwLjA4KSAwIDVweCAxNXB4IDAgIWltcG9ydGFudDtcclxufVxyXG5cclxuLnRoZW1lLS1saWdodC5hcHBsaWNhdGlvbiAudi1jYXJkIHtcclxuICBib3gtc2hhZG93OiAwIDE1cHggMzBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMSksXHJcbiAgICAwIDVweCAxNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjA4KSAhaW1wb3J0YW50O1xyXG4gIGNvbG9yOiAjMTAyYzNjICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi50aGVtZS0tbGlnaHQudi1jYXJkLFxyXG4udGhlbWUtLWxpZ2h0LnYtc2hlZXQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgYm9yZGVyLWNvbG9yOiAjZmZmO1xyXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODcpO1xyXG59XHJcblxyXG5hLFxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLndyYXBwZXIge1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG59XHJcblxyXG4uYW5zd2VycyB7XHJcbiAgcGFkZGluZy1sZWZ0OiA2NHB4O1xyXG59XHJcblxyXG4uY29tbWVudCB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxuICBtYXJnaW4tcmlnaHQ6IDE2cHg7XHJcbn1cclxuXHJcbi5jb21tZW50IHAge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxuICBtYXJnaW4tYm90dG9tOiA3cHg7XHJcbn1cclxuXHJcbi5kaXNwbGF5TmFtZSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxNzBweDtcclxufVxyXG4uZGlzcGxheU5hbWUyIHtcclxuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XHJcbn1cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleDogMTtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuXHJcbi5nb29nbGUtc3BhbltkYXRhLXYtMzU4MzhmNTFdIHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XHJcbn1cclxuXHJcbi5nb29nbGUtYnV0dG9uW2RhdGEtdi0zNTgzOGY1MV0ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmhlYWRsaW5lIHtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuLnNpZ24taW4td3JhcHBlciB7XHJcbiAgbWFyZ2luLXRvcDogMTZweDtcclxuICBtYXJnaW4tbGVmdDogMzJweDtcclxufVxyXG5cclxuXHJcbi5lcnJvci1tZXNzYWdlIHtcclxuICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG4gIGNvbG9yOiAjYzQwMDMwO1xyXG59XHJcblxyXG46Oi1tb3otc2VsZWN0aW9uLFxyXG46OnNlbGVjdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2IzZDRmYztcclxuICBjb2xvcjogIzAwMDtcclxuICB0ZXh0LXNoYWRvdzogbm9uZTtcclxufVxyXG5cclxuLmNhcmQsXHJcbi5jYXJkIHtcclxuICBwYWRkaW5nOiAzMnB4IDE2cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMzJweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiBhLFxyXG5bdHlwZT1cImJ1dHRvblwiXSxcclxuYnV0dG9uIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY0MHB4KSB7XHJcbiAgLmNvbW1lbnQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgfVxyXG4gIC5jb21tZW50cyB7XHJcbiAgICBwYWRkaW5nOiAzMnB4O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/components/recipe/recipe.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/recipe/recipe.component.ts ***!
  \*******************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let RecipeComponent = class RecipeComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.foods = [];
        this.Id = this.route.snapshot.paramMap.get("id");
        this.type = this.route.snapshot.url[1].path;
        console.log(this.Id);
    }
    ngOnInit() {
        this.recipe();
    }
    recipe() {
        this.appService.recipePage(this.Id, this.type).subscribe(recipe => this.recipes = recipe);
    }
};
RecipeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'recipe',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./recipe.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/recipe/recipe.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./recipe.component.css */ "./src/app/components/recipe/recipe.component.css")).default]
    })
], RecipeComponent);



/***/ }),

/***/ "./src/app/components/sign-page/sign-page.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/sign-page/sign-page.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://fonts.googleapis.com/css?family=Exo:100,200,400);\r\n@import url(https://fonts.googleapis.com/css?family=Source+Sans+Pro:700,400,300);\r\nbody{\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tbackground: #fff;\r\n\r\n\tcolor: #fff;\r\n\tfont-family: Arial;\r\n\tfont-size: 12px;\r\n}\r\n.body{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground-image: url(https://wallpaperplay.com/walls/full/1/6/2/93324.jpg);\r\n\tbackground-size: cover;\r\n\t-webkit-filter: blur(5px);\r\n\tz-index: 0;\r\n}\r\n.grad{\r\n\tposition: absolute;\r\n\ttop: -20px;\r\n\tleft: -20px;\r\n\tright: -40px;\r\n\tbottom: -40px;\r\n\twidth: auto;\r\n\theight: auto;\r\n\tbackground: -webkit-gradient(linear, left top, left bottom, color-stop(0%,rgba(0,0,0,0)), color-stop(100%,rgba(0,0,0,0.65))); /* Chrome,Safari4+ */\r\n\tz-index: 1;\r\n\topacity: 0.7;\r\n}\r\n.header{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 35px);\r\n\tleft: calc(42% - 255px);\r\n\tz-index: 2;\r\n}\r\n.header div{\r\n\tfloat: left;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 35px;\r\n\tfont-weight: 200;\r\n}\r\n.header div span{\r\n\tcolor: #5379fa !important;\r\n}\r\n.login{\r\n\tposition: absolute;\r\n\ttop: calc(50% - 200px);\r\n\tleft: calc(50% - 50px);\r\n\theight: 150px;\r\n\twidth: 350px;\r\n\tpadding: 10px;\r\n\tz-index: 2;\r\n}\r\n.login input[type=text]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n  padding: 4px;\r\n  margin-top: 10px;\r\n}\r\n.login input[type=password]{\r\n\twidth: 250px;\r\n\theight: 30px;\r\n\tbackground: transparent;\r\n\tborder: 1px solid rgba(255,255,255,0.6);\r\n\tborder-radius: 2px;\r\n\tcolor: #fff;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 4px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]{\r\n\twidth: 250px;\r\n\theight: 35px;\r\n\tbackground: #b32400;\r\n\tborder: 1px solid #b32400;\r\n\tcursor: pointer;\r\n\tborder-radius: 4px;\r\n\tcolor: #eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size: 16px;\r\n\tfont-weight: 400;\r\n\tpadding: 6px;\r\n\tmargin-top: 10px;\r\n}\r\n.login input[type=button]:hover{\r\n\topacity: 0.8;\r\n}\r\n.login input[type=button]:active{\r\n\topacity: 0.6;\r\n}\r\n.login input[type=text]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=password]:focus{\r\n\toutline: none;\r\n\tborder: 1px solid rgba(255,255,255,0.9);\r\n}\r\n.login input[type=button]:focus{\r\n\toutline: none;\r\n}\r\nlabel {\r\n  display: block;\r\n  font-family: 'Exo', sans-serif;\r\n  color: #e5e5e5;\r\n  font-size: 14px;\r\n  margin-top: 5px;\r\n  margin-bottom: 2px;\r\n}\r\n.dropdown {\r\n  position: relative;\r\n  display: inline-block;\r\n  font-family: 'Exo', sans-serif;\r\n  font-size: 12px;\r\n  border: 1px solid #c4c0bf;\r\n  border-radius: 2px;\r\n  width: 80px;\r\n  text-align: center;\r\n  left: -34px;\r\n  top: -2px;\r\n  padding: 6px;\r\n  background-color: #544a47;\r\n  color:#e5e5e5;\r\n  \r\n}\r\n.dropdown > a, .dropdown > span {\r\n  font-family: 'Exo', sans-serif;\r\n  font-size: 13px;\r\n  margin-top: 4px;\r\n  display: inline-block;\r\n  color: #eee3d1;\r\n  text-decoration: none;\r\n  cursor:pointer;\r\n}\r\n.dropdown > a:before, .dropdown > span:before {\r\n  position: absolute;\r\n  right: 25px;\r\n  top: 25px;\r\n  content: ' ';\r\n  border-left: 5px solid transparent;\r\n  border-right: 5px solid transparent;\r\n  border-top: 5px solid #e5e5e5;\r\n}\r\n.dropdown input[type=checkbox] {\r\n  position: absolute;\r\n  display: block;\r\n  top: 0px;\r\n  left: 0px;\r\n  width: 100%;\r\n  height: 100%;\r\n  margin: 0px;\r\n  opacity: 0;\r\n}\r\n.dropdown input[type=checkbox]:checked {\r\n  position: fixed;\r\n  z-index:+0;\r\n  top: 0px; left: 0px; \r\n  right: 0px; bottom: 0px;\r\n}\r\n.dropdown ul {\r\n  text-align: left;\r\n  position: absolute;\r\n  top: 36px;\r\n  border: 1px solid #ccc;\r\n  border-radius: 3px;\r\n  left: 0px;\r\n  list-style: none;\r\n  padding: 4px 0px;\r\n  display: none;\r\n  background-color: white;\r\n  box-shadow: 0 3px 6px rgba(0,0,0,.175);\r\n  width: 60px;\r\n}\r\n.dropdown input[type=checkbox]:checked + ul {\r\n  display: block;\r\n}\r\n.dropdown ul li {\r\n  display: block;\r\n  padding: 0px 10px;\r\n  white-space: nowrap;\r\n  min-width: 60px;\r\n  font-size: 12px;\r\n  color: #464444;\r\n  font-weight: 700;\r\n\r\n}\r\n.dropdown ul li:hover {\r\n  background-color: #bdbdbd;\r\n  cursor: pointer;\r\n  left:0;\r\n}\r\n.dropdown ul li a {\r\n  text-decoration: none;\r\n  display: block;\r\n  color:#bdbdbd;\r\n  width:60px;\r\n}\r\n.dropdown .divider {\r\n  height: 1px;\r\n  margin: 9px 0;\r\n  overflow: hidden;\r\n  background-color: #e5e5e5;\r\n  font-size: 1px;\r\n  padding: 0;\r\n}\r\n.dropdown:hover { \r\n  background-position: right center; \r\n}\r\n[type=\"date\"] {\r\n  background:#fff url(login.jpg)  97% 50% no-repeat ;\r\n}\r\n[type=\"date\"]::-webkit-inner-spin-button {\r\n  display: none;\r\n}\r\n[type=\"date\"]::-webkit-calendar-picker-indicator {\r\n  opacity: 0;\r\n}\r\nbody {\r\n  padding: 4em;\r\n  background: #911c1c;\r\n  font-family: 'Exo', sans-serif;\r\n  font-size: 50px;\r\n}\r\n#dateofbirth{\r\n  display: inline-block;\r\n  color: #e5e5e5;\r\n  margin-top: 5px;\r\n  font-size: 15px;\r\n  \r\n}\r\n#datepicker{\r\n  display: inline-block;\r\n  color: #e5e5e5;\r\n  margin-top: 5px;\r\n  font-size: 15px;\r\n  background-color: #c5583d00;\r\n  border: 1px solid #e5e5e5;\r\n}\r\n#gender{\r\n  display: inline-block;\r\n  color: #e5e5e5;\r\n  margin-top: 5px;\r\n  font-size: 15px;\r\n  margin-left: 25%;\r\n  \r\n}\r\n.back {\r\n\tbackground-color:transparent;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#eee3d1;\r\n\tfont-family: 'Exo', sans-serif;\r\n\tfont-size:14px;\r\n\tpadding:0px 0px;\r\n\tborder: none;\r\n}\r\n.back:hover {\r\n\tbackground-color:transparent;\r\n}\r\n.back:active {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}\r\ninput {\r\n    border: 1px solid #c5583d;\r\n    border-radius: 4px;\r\n    background-color: #c5583d00;\r\n    padding: 3px 5px;\r\n    box-shadow: inset 0 3px 6px rgba(57, 92, 28, 0.1);\r\n    width: 160px;\r\n    margin-right: 44px;\r\n}\r\n::-webkit-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n::-moz-input-placeholder{\r\n   color: rgba(255,255,255,0.6);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaWduLXBhZ2Uvc2lnbi1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFLGdGQUFnRjtBQUVoRjtDQUNDLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsZ0JBQWdCOztDQUVoQixXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLGVBQWU7QUFDaEI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWiwyRUFBMkU7Q0FDM0Usc0JBQXNCO0NBQ3RCLHlCQUF5QjtDQUN6QixVQUFVO0FBQ1g7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixhQUFhO0NBQ2IsV0FBVztDQUNYLFlBQVk7Q0FDWiw0SEFBNEgsRUFBRSxvQkFBb0I7Q0FDbEosVUFBVTtDQUNWLFlBQVk7QUFDYjtBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQix1QkFBdUI7Q0FDdkIsVUFBVTtBQUNYO0FBRUE7Q0FDQyxXQUFXO0NBQ1gsV0FBVztDQUNYLDhCQUE4QjtDQUM5QixlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYixZQUFZO0NBQ1osYUFBYTtDQUNiLFVBQVU7QUFDWDtBQUVBO0NBQ0MsWUFBWTtDQUNaLFlBQVk7Q0FDWix1QkFBdUI7Q0FDdkIsdUNBQXVDO0NBQ3ZDLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLHVCQUF1QjtDQUN2Qix1Q0FBdUM7Q0FDdkMsa0JBQWtCO0NBQ2xCLFdBQVc7Q0FDWCw4QkFBOEI7Q0FDOUIsZUFBZTtDQUNmLGdCQUFnQjtDQUNoQixZQUFZO0NBQ1osZ0JBQWdCO0FBQ2pCO0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLG1CQUFtQjtDQUNuQix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsOEJBQThCO0NBQzlCLGVBQWU7Q0FDZixnQkFBZ0I7Q0FDaEIsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjtBQUVBO0NBQ0MsWUFBWTtBQUNiO0FBRUE7Q0FDQyxZQUFZO0FBQ2I7QUFFQTtDQUNDLGFBQWE7Q0FDYix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLGFBQWE7Q0FDYix1Q0FBdUM7QUFDeEM7QUFFQTtDQUNDLGFBQWE7QUFDZDtBQUNBO0VBQ0UsY0FBYztFQUNkLDhCQUE4QjtFQUM5QixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7RUFDZixrQkFBa0I7QUFDcEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsOEJBQThCO0VBQzlCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLFNBQVM7RUFDVCxZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7O0FBRWY7QUFFQTtFQUNFLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZUFBZTtFQUNmLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsU0FBUztFQUNULFlBQVk7RUFDWixrQ0FBa0M7RUFDbEMsbUNBQW1DO0VBQ25DLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGNBQWM7RUFDZCxRQUFRO0VBQ1IsU0FBUztFQUNULFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFVBQVU7QUFDWjtBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixRQUFRLEVBQUUsU0FBUztFQUNuQixVQUFVLEVBQUUsV0FBVztBQUN6QjtBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1Qsc0JBQXNCO0VBQ3RCLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHNDQUFzQztFQUN0QyxXQUFXO0FBQ2I7QUFFQTtFQUNFLGNBQWM7QUFDaEI7QUFFQTtFQUNFLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixlQUFlO0VBQ2YsY0FBYztFQUNkLGdCQUFnQjs7QUFFbEI7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsTUFBTTtBQUNSO0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGFBQWE7RUFDYixVQUFVO0FBQ1o7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixjQUFjO0VBQ2QsVUFBVTtBQUNaO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFFQTtFQUNFLGtEQUFrRDtBQUNwRDtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxVQUFVO0FBQ1o7QUFFQTtFQUNFLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLGVBQWU7QUFDakI7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2QsZUFBZTtFQUNmLGVBQWU7O0FBRWpCO0FBQ0E7RUFDRSxxQkFBcUI7RUFDckIsY0FBYztFQUNkLGVBQWU7RUFDZixlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZUFBZTtFQUNmLGdCQUFnQjs7QUFFbEI7QUFDQTtDQUNDLDRCQUE0QjtDQUM1QixvQkFBb0I7Q0FDcEIsY0FBYztDQUNkLGFBQWE7Q0FDYiw4QkFBOEI7Q0FDOUIsY0FBYztDQUNkLGVBQWU7Q0FDZixZQUFZO0FBQ2I7QUFDQTtDQUNDLDRCQUE0QjtBQUM3QjtBQUNBO0NBQ0MsaUJBQWlCO0NBQ2pCLE9BQU87QUFDUjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQiwyQkFBMkI7SUFDM0IsZ0JBQWdCO0lBQ2hCLGlEQUFpRDtJQUNqRCxZQUFZO0lBQ1osa0JBQWtCO0FBQ3RCO0FBSUE7R0FDRyw0QkFBNEI7QUFDL0I7QUFFQTtHQUNHLDRCQUE0QjtBQUMvQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2lnbi1wYWdlL3NpZ24tcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUV4bzoxMDAsMjAwLDQwMCk7XHJcbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Tb3VyY2UrU2FucytQcm86NzAwLDQwMCwzMDApO1xyXG5cclxuYm9keXtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRiYWNrZ3JvdW5kOiAjZmZmO1xyXG5cclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogQXJpYWw7XHJcblx0Zm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uYm9keXtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMjBweDtcclxuXHRsZWZ0OiAtMjBweDtcclxuXHRyaWdodDogLTQwcHg7XHJcblx0Ym90dG9tOiAtNDBweDtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vd2FsbHBhcGVycGxheS5jb20vd2FsbHMvZnVsbC8xLzYvMi85MzMyNC5qcGcpO1xyXG5cdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcblx0LXdlYmtpdC1maWx0ZXI6IGJsdXIoNXB4KTtcclxuXHR6LWluZGV4OiAwO1xyXG59XHJcblxyXG4uZ3JhZHtcclxuXHRwb3NpdGlvbjogYWJzb2x1dGU7XHJcblx0dG9wOiAtMjBweDtcclxuXHRsZWZ0OiAtMjBweDtcclxuXHRyaWdodDogLTQwcHg7XHJcblx0Ym90dG9tOiAtNDBweDtcclxuXHR3aWR0aDogYXV0bztcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0YmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgY29sb3Itc3RvcCgwJSxyZ2JhKDAsMCwwLDApKSwgY29sb3Itc3RvcCgxMDAlLHJnYmEoMCwwLDAsMC42NSkpKTsgLyogQ2hyb21lLFNhZmFyaTQrICovXHJcblx0ei1pbmRleDogMTtcclxuXHRvcGFjaXR5OiAwLjc7XHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogY2FsYyg1MCUgLSAzNXB4KTtcclxuXHRsZWZ0OiBjYWxjKDQyJSAtIDI1NXB4KTtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4uaGVhZGVyIGRpdntcclxuXHRmbG9hdDogbGVmdDtcclxuXHRjb2xvcjogI2ZmZjtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOiAzNXB4O1xyXG5cdGZvbnQtd2VpZ2h0OiAyMDA7XHJcbn1cclxuXHJcbi5oZWFkZXIgZGl2IHNwYW57XHJcblx0Y29sb3I6ICM1Mzc5ZmEgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxvZ2lue1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xyXG5cdGxlZnQ6IGNhbGMoNTAlIC0gNTBweCk7XHJcblx0aGVpZ2h0OiAxNTBweDtcclxuXHR3aWR0aDogMzUwcHg7XHJcblx0cGFkZGluZzogMTBweDtcclxuXHR6LWluZGV4OiAyO1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT10ZXh0XXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzMHB4O1xyXG5cdGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxuXHRib3JkZXItcmFkaXVzOiAycHg7XHJcblx0Y29sb3I6ICNmZmY7XHJcblx0Zm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG5cdGZvbnQtc2l6ZTogMTZweDtcclxuXHRmb250LXdlaWdodDogNDAwO1xyXG4gIHBhZGRpbmc6IDRweDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG59XHJcblxyXG4ubG9naW4gaW5wdXRbdHlwZT1wYXNzd29yZF17XHJcblx0d2lkdGg6IDI1MHB4O1xyXG5cdGhlaWdodDogMzBweDtcclxuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuNik7XHJcblx0Ym9yZGVyLXJhZGl1czogMnB4O1xyXG5cdGNvbG9yOiAjZmZmO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA0cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXXtcclxuXHR3aWR0aDogMjUwcHg7XHJcblx0aGVpZ2h0OiAzNXB4O1xyXG5cdGJhY2tncm91bmQ6ICNiMzI0MDA7XHJcblx0Ym9yZGVyOiAxcHggc29saWQgI2IzMjQwMDtcclxuXHRjdXJzb3I6IHBvaW50ZXI7XHJcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xyXG5cdGNvbG9yOiAjZWVlM2QxO1xyXG5cdGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuXHRmb250LXNpemU6IDE2cHg7XHJcblx0Zm9udC13ZWlnaHQ6IDQwMDtcclxuXHRwYWRkaW5nOiA2cHg7XHJcblx0bWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTpob3ZlcntcclxuXHRvcGFjaXR5OiAwLjg7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPWJ1dHRvbl06YWN0aXZle1xyXG5cdG9wYWNpdHk6IDAuNjtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9dGV4dF06Zm9jdXN7XHJcblx0b3V0bGluZTogbm9uZTtcclxuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwyNTUsMjU1LDAuOSk7XHJcbn1cclxuXHJcbi5sb2dpbiBpbnB1dFt0eXBlPXBhc3N3b3JkXTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LDI1NSwyNTUsMC45KTtcclxufVxyXG5cclxuLmxvZ2luIGlucHV0W3R5cGU9YnV0dG9uXTpmb2N1c3tcclxuXHRvdXRsaW5lOiBub25lO1xyXG59XHJcbmxhYmVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcbiAgY29sb3I6ICNlNWU1ZTU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBtYXJnaW4tYm90dG9tOiAycHg7XHJcbn1cclxuXHJcbi5kcm9wZG93biB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxMnB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNjNGMwYmY7XHJcbiAgYm9yZGVyLXJhZGl1czogMnB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBsZWZ0OiAtMzRweDtcclxuICB0b3A6IC0ycHg7XHJcbiAgcGFkZGluZzogNnB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM1NDRhNDc7XHJcbiAgY29sb3I6I2U1ZTVlNTtcclxuICBcclxufVxyXG5cclxuLmRyb3Bkb3duID4gYSwgLmRyb3Bkb3duID4gc3BhbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdFeG8nLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxuICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGNvbG9yOiAjZWVlM2QxO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBjdXJzb3I6cG9pbnRlcjtcclxufVxyXG5cclxuLmRyb3Bkb3duID4gYTpiZWZvcmUsIC5kcm9wZG93biA+IHNwYW46YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgdG9wOiAyNXB4O1xyXG4gIGNvbnRlbnQ6ICcgJztcclxuICBib3JkZXItbGVmdDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci1yaWdodDogNXB4IHNvbGlkIHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlci10b3A6IDVweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4uZHJvcGRvd24gaW5wdXRbdHlwZT1jaGVja2JveF0ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB0b3A6IDBweDtcclxuICBsZWZ0OiAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1hcmdpbjogMHB4O1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbi5kcm9wZG93biBpbnB1dFt0eXBlPWNoZWNrYm94XTpjaGVja2VkIHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDorMDtcclxuICB0b3A6IDBweDsgbGVmdDogMHB4OyBcclxuICByaWdodDogMHB4OyBib3R0b206IDBweDtcclxufVxyXG5cclxuLmRyb3Bkb3duIHVsIHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDM2cHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgbGVmdDogMHB4O1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgcGFkZGluZzogNHB4IDBweDtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLC4xNzUpO1xyXG4gIHdpZHRoOiA2MHB4O1xyXG59XHJcblxyXG4uZHJvcGRvd24gaW5wdXRbdHlwZT1jaGVja2JveF06Y2hlY2tlZCArIHVsIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmRyb3Bkb3duIHVsIGxpIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwcHggMTBweDtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1pbi13aWR0aDogNjBweDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgY29sb3I6ICM0NjQ0NDQ7XHJcbiAgZm9udC13ZWlnaHQ6IDcwMDtcclxuXHJcbn1cclxuXHJcbi5kcm9wZG93biB1bCBsaTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JkYmRiZDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbGVmdDowO1xyXG59XHJcblxyXG4uZHJvcGRvd24gdWwgbGkgYSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGNvbG9yOiNiZGJkYmQ7XHJcbiAgd2lkdGg6NjBweDtcclxufVxyXG4uZHJvcGRvd24gLmRpdmlkZXIge1xyXG4gIGhlaWdodDogMXB4O1xyXG4gIG1hcmdpbjogOXB4IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTVlNWU1O1xyXG4gIGZvbnQtc2l6ZTogMXB4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLmRyb3Bkb3duOmhvdmVyIHsgXHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogcmlnaHQgY2VudGVyOyBcclxufVxyXG5cclxuW3R5cGU9XCJkYXRlXCJdIHtcclxuICBiYWNrZ3JvdW5kOiNmZmYgdXJsKGxvZ2luLmpwZykgIDk3JSA1MCUgbm8tcmVwZWF0IDtcclxufVxyXG5bdHlwZT1cImRhdGVcIl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24ge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuW3R5cGU9XCJkYXRlXCJdOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIHBhZGRpbmc6IDRlbTtcclxuICBiYWNrZ3JvdW5kOiAjOTExYzFjO1xyXG4gIGZvbnQtZmFtaWx5OiAnRXhvJywgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbn1cclxuI2RhdGVvZmJpcnRoe1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2U1ZTVlNTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIFxyXG59XHJcbiNkYXRlcGlja2Vye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2U1ZTVlNTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNjNTU4M2QwMDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZTVlNWU1O1xyXG59XHJcblxyXG4jZ2VuZGVye1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBjb2xvcjogI2U1ZTVlNTtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgZm9udC1zaXplOiAxNXB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgXHJcbn1cclxuLmJhY2sge1xyXG5cdGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XHJcblx0ZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcblx0Y3Vyc29yOnBvaW50ZXI7XHJcblx0Y29sb3I6I2VlZTNkMTtcclxuXHRmb250LWZhbWlseTogJ0V4bycsIHNhbnMtc2VyaWY7XHJcblx0Zm9udC1zaXplOjE0cHg7XHJcblx0cGFkZGluZzowcHggMHB4O1xyXG5cdGJvcmRlcjogbm9uZTtcclxufVxyXG4uYmFjazpob3ZlciB7XHJcblx0YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtcclxufVxyXG4uYmFjazphY3RpdmUge1xyXG5cdHBvc2l0aW9uOnJlbGF0aXZlO1xyXG5cdHRvcDoxcHg7XHJcbn1cclxuaW5wdXQge1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2M1NTgzZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjNTU4M2QwMDtcclxuICAgIHBhZGRpbmc6IDNweCA1cHg7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDNweCA2cHggcmdiYSg1NywgOTIsIDI4LCAwLjEpO1xyXG4gICAgd2lkdGg6IDE2MHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0NHB4O1xyXG59XHJcblxyXG5cclxuXHJcbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcclxuICAgY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC42KTtcclxufVxyXG5cclxuOjotbW96LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICBjb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjYpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/sign-page/sign-page.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/sign-page/sign-page.component.ts ***!
  \*************************************************************/
/*! exports provided: SignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignComponent", function() { return SignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_app_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/app.service */ "./src/app/services/app.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");




let SignComponent = class SignComponent {
    constructor(route, appService, router) {
        this.route = route;
        this.appService = appService;
        this.router = router;
        this.person = [];
    }
    ngOnInit() {
        console.log(this.selected);
    }
    sign() {
        this.person.push({
            'FirstName': this.FirstName,
            'LastName': this.LastName,
            'UserName': this.Username,
            'Password': this.Password,
            'Birthdate': this.Birthdate,
            'Gender': this.Gender,
            'Location': this.Location,
            'Email': this.Email,
            'RecoveryQuestion': this.RecoveryQuestion,
            'RecoveryAnswer': this.RecoveryResult
        });
        this.appService.postPerson(this.person);
    }
    onGenderChange(event) {
        this.Gender = event.target.value;
    }
    login() {
        this.router.navigateByUrl('/login-page');
    }
};
SignComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _services_app_service__WEBPACK_IMPORTED_MODULE_2__["AppService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
SignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sign-page',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./sign-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sign-page/sign-page.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./sign-page.component.css */ "./src/app/components/sign-page/sign-page.component.css")).default]
    })
], SignComponent);



/***/ }),

/***/ "./src/app/services/app.service.ts":
/*!*****************************************!*\
  !*** ./src/app/services/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



const httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
let AppService = class AppService {
    constructor(http) {
        this.http = http;
        this.userUrl = 'http://localhost:5000'; // URL to REST API
    }
    /** GET users from the server */
    getMembers() {
        return this.http.get(this.userUrl + '/login-page');
    }
    getPassword() {
        return this.http.get(this.userUrl + '/new-password');
    }
    postPerson(data) {
        return this.http.post(this.userUrl + '/sign-register', data, httpOptions).subscribe(element => console.log(element));
    }
    foodMenu() {
        return this.http.get(this.userUrl + '/food-menu');
    }
    drinkMenu() {
        return this.http.get(this.userUrl + '/drink-menu');
    }
    dessertMenu() {
        return this.http.get(this.userUrl + '/dessert-menu');
    }
    recipePage(id, type) {
        console.log(id);
        return this.http.get(this.userUrl + '/recipe/' + type + "/" + id);
    }
    getComments() {
        return this.http.get(this.userUrl + '/foods-list');
    }
};
AppService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AppService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], AppService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tunc1\OneDrive\Masaüstü\db-project-latest\itucsdb1941\bss-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map