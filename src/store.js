import { defineStore } from 'pinia';

export const useQuestionStore = defineStore('question', {
  state: () => ({
    randomQuestion: [],
  }),
  actions: {
    setRandomQuestion(question) {
      this.randomQuestion = question;
    },
  },
});
