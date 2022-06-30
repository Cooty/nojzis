import { defineStore } from "pinia";

export const useSoundStore = defineStore("sound", {
    state: () => ({
        soundToPlay: undefined,
    }),
});

export const usePlayerStore = defineStore("player", {
    state: () => ({
        isPlaying: false,
    }),
    actions: {
        toggle() {
            this.isPlaying = !this.isPlaying;
        },
    },
});
