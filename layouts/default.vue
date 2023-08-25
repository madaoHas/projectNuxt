<template>
  <div>
    <nav
      class="navbar header has-shadow is-primary"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-brand">
        <NuxtLink
          class="navbar-item"
          to="/news"
        >
          <img
            src="~assets/buefy.png"
            alt="Buefy"
            height="28"
          >
        </NuxtLink>
      </div>
    </nav>
    <nuxt />

  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          title: 'Home',
          icon: 'home',
          to: { name: 'index' }
        },
      ]
    }
  }
}
</script>
