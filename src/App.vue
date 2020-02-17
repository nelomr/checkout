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
                <ThankyouTemplate :content="thankyouContent" v-if="currentStep == 3"></ThankyouTemplate>
                <StepButtons v-if="currentStep < 3"></StepButtons>
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
import ThankyouTemplate from './components/ThankyouTemplate.vue';
import Footer from './components/FooterComponent.vue';

export default {
  name: 'App',
  components: {
    Header,
    StepBar,
    StepButtons,
    StepContnet1,
    StepContnet2,
    ThankyouTemplate,
    Footer
  },
  computed: {
      currentStep() {
          return this.$store.state.step;
      },
      thankyouContent() {
        return this.$store.state.thankyouResponse;
      }
  }
}
</script>
