//Imports Libs
import angular from 'angular'
import UiRouter from 'angular-ui-router'
import AngularAria from 'angular-aria'
import AngularAnimate from 'angular-animate'

// Modules imports
import Home from './modules/home/home'

//Imports Configs
import Routers from './routers'

angular.module('app', [
     UiRouter
    ,AngularAria
    ,AngularAnimate
    ,Home
  ])
  .config(Routers)
