<template>
  <div class="app" id="app">
    <Header></Header>
    <div class="main">
        <div class="container">
            <StepBar></StepBar>
            <div class="main-content">
              <div class="main-content--container">
                <StepContnet1 v-if="currentStep == 1"></StepContnet1>
                <StepContnet2 v-if="currentStep == 2"></StepContnet2>
                <StepButtons></StepButtons>
              </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/HeaderComponent.vue';
import StepBar from './components/StepBar.vue';
import StepButtons from './components/StepButtons.vue';
import StepContnet1 from './components/StepContent1.vue';
import StepContnet2 from './components/StepContent2.vue';
import Footer from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
    StepBar,
    StepButtons,
    StepContnet1,
    StepContnet2,
    Footer
  },
  data: function() {
        return {
            state: 1
        }
    },
    computed: {
        currentStep() {
            return this.state;
        }
    }
}
</script>
