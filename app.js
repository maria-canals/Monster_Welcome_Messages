const App = {
  data() {
    return {
      userInput: "",
      messageConfirmed: "",
    };
  },
  methods: {
    showInput() {
      this.messageConfirmed = this.userInput;
    },
  },
};

Vue.createApp(App).mount("#container");
