<script setup lang="ts">

  // Import Components
  import FooterComponent from './components/FooterComponent.vue'
  import HeaderComponent from './components/HeaderComponent.vue'

  // Import Depdencies
  import { onMounted, onUnmounted, ref  } from 'vue'

  // Declared Variables
  const loading = ref<boolean>(true)
  const scrollTop = ref<boolean>(false)
  const mobileNav = ref<boolean>(false)
  const bodyClasses = ref<Array<string>>(["d-flex", "flex-column", "min-vh-100"])
  const toggledDropdown = ref<boolean>(false)
  const section = ref<string>("home")
  const sections = ref<Array<string>>(["hero", "about", "clients", "cards", "services", "call-to-action", "portfolio", "pricing", "faq", "team", "contact"])

  const setHomeSection = (val:string) => {
     section.value = val
  }

  const handleScroll = () => {

    const position = window.scrollY + 200;

    for (const id of sections.value) {
      const sectionEl = document.getElementById(id) as HTMLElement | null
      if (!sectionEl) continue

      if (
        position >= sectionEl.offsetTop &&
        position <= sectionEl.offsetTop + sectionEl.offsetHeight
      ) {
        section.value = id
        break
      }
    }

    const scrolled = window.scrollY > 100
    scrollTop.value = scrolled
    if(scrolled){
      bodyClasses.value.push("scrolled")
      bodyClasses.value = [...new Set(bodyClasses.value)]
    }else{
      bodyClasses.value = bodyClasses.value.filter(item => item !== "scrolled")
    }
  }

  const loadComponent = () => {
     if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash) as HTMLElement | null
          if(section){
            let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
            window.scrollTo({
              top: section.offsetTop - parseInt(scrollMarginTop),
              behavior: 'smooth'
            });
          }
        }, 100);
      }
    }

    window.addEventListener('scroll', handleScroll)
  }

  const mobileNavToogle = (event: MouseEvent) => {
     event.preventDefault()
     const toggled = !mobileNav.value
     mobileNav.value = toggled
     if(toggled){
      bodyClasses.value.push("mobile-nav-active")
      bodyClasses.value = [...new Set(bodyClasses.value)]
    }else{
      bodyClasses.value = bodyClasses.value.filter(item => item !== "mobile-nav-active")
    }
  }

  const scrollToTop = (event: MouseEvent) => {
     event.preventDefault()
     window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  const toggledDropdownHandle = (event: MouseEvent) => {
     event.preventDefault()
     toggledDropdown.value = !toggledDropdown.value
  }

  onMounted(() => {
    setTimeout(() => {
        loadComponent()
        loading.value = false
    }, 1500)
  })

  onUnmounted(() => {
     window.removeEventListener('scroll', handleScroll)
  })

</script>

<template>

  <div :class="bodyClasses.join(' ')">

    <header id="header" class="header d-flex align-items-center sticky-top">
      <HeaderComponent 
        @toggledDropdown="toggledDropdownHandle" 
        @mobileNavToogle="mobileNavToogle" 
        :section="section"  
        :toggledDropdown="toggledDropdown" 
        :mobileNav="mobileNav" 
        :setHomeSection="setHomeSection"
      />
    </header>

    <main class="main">
       <router-view />
    </main>

    <footer id="footer" class="footer dark-background mt-auto">
      <FooterComponent />
    </footer>

    <!-- Scroll Top -->
    <a href="#" id="scroll-top" @click.prevent="scrollToTop" :class="scrollTop ? 'scroll-top d-flex align-items-center justify-content-center active' : 'scroll-top d-flex align-items-center justify-content-center'"><i class="bi bi-arrow-up-short"></i></a>

    <div id="preloader" :class="loading ? 'd-block' : 'd-none'"></div>

  </div>

 
</template>

<style scoped>
/* Optional: your custom styles */
</style>
