<script setup lang="ts">

    import { useRoute } from 'vue-router'
   

    const route = useRoute()
    const currentPath = route.path
    const emit = defineEmits<{
      (e: 'toggledDropdown', event: MouseEvent): void, 
      (e: 'mobileNavToogle', event: MouseEvent): void,
      (e: 'setHomeSection', val: string): void
    }>()
    const props = defineProps<{ toggledDropdown: boolean, mobileNav: boolean, section: string }>()

    const toggledDropdownHandle = (event: MouseEvent) => {
        emit('toggledDropdown', event)
    }

    const mobileNavToogle = (event: MouseEvent) => {
        emit('mobileNavToogle', event)
    }

    const handleClickMenu = (event: MouseEvent) => {
        event.preventDefault()

        const element = event.target as HTMLElement;
        const href = element.getAttribute('href');
        
        if (element.classList.contains('mobile-nav-active')) {
          mobileNavToogle(event);
        }

        if(href){

          const target = document.querySelector(href);

          if(target){
            const sectionHome = href.replace(/#/g, "");
            emit('setHomeSection', sectionHome)
            target?.scrollIntoView({ behavior: 'smooth' });
          }

        }

    }


</script>

<template>
    <div class="container-fluid container-xl position-relative d-flex align-items-center justify-content-between">

        <router-link class="logo d-flex align-items-center" to="/">
          <!-- Uncomment the line below if you also wish to use an image logo -->
          <!-- <img src="assets/img/logo.png" alt=""> -->
          <h1 class="sitename">Amoeba </h1>
        </router-link>

        <nav id="navmenu" class="navmenu">
          <ul>
            <template v-if="currentPath === '/'">
                <li><a @click.prevent="handleClickMenu" href="#hero" :class="section === 'home' || section === 'hero' ? 'active' : ''">Home</a></li>
                <li><a @click.prevent="handleClickMenu" href="#about" :class="section === 'about' ? 'active' : ''">About</a></li>
                <li><a @click.prevent="handleClickMenu" href="#services" :class="section === 'services' ? 'active' : ''">Services</a></li>
                <li><a @click.prevent="handleClickMenu" href="#portfolio" :class="section === 'portfolio' ? 'active' : ''">Portfolio</a></li>
                <li><a @click.prevent="handleClickMenu" href="#team" :class="section === 'team' ? 'active' : ''">Team</a></li>
                <li><a @click.prevent="handleClickMenu" href="#contact" :class="section === 'contact' ? 'active' : ''">Contact</a></li>
            </template>
            <template v-else>
                <li><router-link to="/">Home</router-link></li>
                <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/service">Services</router-link></li>
                <li><router-link to="/portfolio">Portfolio</router-link></li>
                <li><router-link to="/team">Team</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li>
            </template>
            <li :class="toggledDropdown ? 'dropdown active' : 'dropdown'"><a href="#" @click.prevent="toggledDropdownHandle"><span>Authentication</span> <i class="bi bi-chevron-down toggle-dropdown"></i></a>
              <ul :class="toggledDropdown ? 'dropdown-active' : ''">
                <li><router-link to="/auth/login">Sign In</router-link></li>
                <li><router-link to="/auth/register">Sign Up</router-link></li>
                <li><router-link to="/auth/email/forgot">Forgot Password</router-link></li>
                <li><router-link to="/auth/email/reset/9ec296eb-2984-4511-b281-038d3dc1597f">Reset Password</router-link></li>
              </ul>
            </li>
          </ul>
          <i @click.prevent="mobileNavToogle" :class="mobileNav ? 'mobile-nav-toggle d-xl-none bi bi-list bi-x' : 'mobile-nav-toggle d-xl-none bi bi-list'"></i>
        </nav>

    </div>
</template>