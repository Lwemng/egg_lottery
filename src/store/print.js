
// initial state
const state = {
    all: {
        id: '',
        name: '',
        img:'',
        type:''
    }
}

// mutations
const mutations = {
    setPrint(state, all) {
        state.all = all;
    }
}

export default {
    namespaced: true,
    state,
    mutations
}