import client from '../api/client';

export default {
    incrementStep({commit}) {
        commit('incrementStateStep');
    },
    decreaseStep({commit}) {
        commit('decreaseStateStep');
    },
    paymentCall({state, commit, dispatch}) {
        if(state.name.length > 0 && state.surname.length > 0) {
            client.get()
            .then((result) => {
                Promise.all(
                    [
                        commit('setThankyouResponse', result.data),
                    ]).then(() => {
                    dispatch('incrementStep');
                    state.isLoaded = true;
                });
            })
            .catch(() => {
                dispatch('decreaseStep');
            });
        }
    }
};
