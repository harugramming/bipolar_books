import './bootstrap'
import $ from 'jquery'
import './tabs'
import Vue from 'vue'
import ArticleLike from './components/ArticleLike'
import FollowButton from './components/FollowButton'


const app = new Vue({
  el: '#app',
  components: {
    ArticleLike,
    FollowButton,
  }
})
