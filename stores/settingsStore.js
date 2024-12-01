import { defineStore } from 'pinia';

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    difficulties: {
      addition: [],
      subtraction: [],
      multiplication: [],
      division: []
    },
    gameDuration: 5, // Время игры в минутах, значение по умолчанию
    selectedTaskTime: null,
    selectedLanguage: null,
}),
  actions: {
    toggleDifficulty(category, level) {
      const index = this.difficulties[category].indexOf(level);
      if (index === -1) {
        this.difficulties[category].push(level);
      } else {
        this.difficulties[category].splice(index, 1);
      }
    },
    setGameDuration(duration) {
      this.gameDuration = duration;
    },
  },
});
