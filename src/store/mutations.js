export default {
    incrementStateStep(state) {
        state.step +=1;
    },
    decreaseStateStep(state) {
        state.step -=1;
    },
    updateName(state, value) {
        state.name = value;
    },
    updateSurname(state, value) {
        state.surname = value;
    },
    setThankyouResponse(state, value) {
        state.thankyouResponse = value;
    }
};
