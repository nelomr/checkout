<template>
  <div id="app">
    <Header></Header>
    <div class="main">
        <div class="container">
            <StepBar></StepBar>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
import StepBar from './components/StepBar.vue'
import Footer from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
    StepBar,
    Footer
  }
}
</script>
