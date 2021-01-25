const App = {
  data() {
    return {
      userInput: "",
      showMessage: false,
    };
  },
  methods: {
    getUserInput(e) {
      this.userInput = e.target.value;
    },
    showInput() {
      this.showMessage = true;
    },
  },
};

Vue.createApp(App).mount("#container");
