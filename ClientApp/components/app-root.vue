<template>
    <div id="app" class="pusher">
        <div class="ui grid">
            <div class="three wide column">
                <nav-menu params="route: route"></nav-menu>
            </div>
            <div class="nine wide column">
                <div class="ui vertical stripe segment">
                    <router-view></router-view>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import Vue from 'vue'
import CounterExample from './counter-example'
import FetchData from './fetch-data'
import HomePage from './home-page'
import NavMenu from './nav-menu'

Vue.component('counter-example', CounterExample);
Vue.component('fetch-data', FetchData);
Vue.component('home-page', HomePage);
Vue.component('nav-menu', NavMenu);

export default {
    data() {
        return {
        }
    }
}
</script>

<style>
</style>