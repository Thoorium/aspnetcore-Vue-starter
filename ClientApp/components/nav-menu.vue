<template>
    <div class="ui container">
        <div class="ui vertical inverted sidebar menu left uncover visible">
            <div class="ui large secondary inverted pointing menu">
                <a class="toc item" v-on:click="toggleCollapsed">
                    <i class="sidebar icon"></i>
                </a>
                <a class="active item" href="/">Vue2Spa</a>
            </div>
            <div class="clearfix"></div>
            <transition name="slide">
                <div class="" v-show="!collapsed">
                    <!-- TODO: highlight active link -->
                    <router-link v-for="route in routes" :to="route.path" class="item">
                        <i :class="route.style"></i> {{ route.display }}
                    </router-link>
                </div>
            </transition>
        </div>
    </div>
</template>

<script>
import { routes } from '../routes'

export default {
    data() {
        return {
            routes,
            collapsed : true
        }
    },
    methods: {
        toggleCollapsed: function(event){
            this.collapsed = !this.collapsed;
        }
    }
}
</script>

<style>
.slide-enter-active, .slide-leave-active {
  transition: max-height .35s
}
.slide-enter, .slide-leave-to {
  max-height: 0px;
}

.slide-enter-to, .slide-leave {
  max-height: 20em;
}
</style>