<template>
    <div style="display: none" aria-hidden="true">
        <audio ref="audioTag" @ended="onEnded" @play="onPlay">
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
import { ref } from "vue";
import { useSoundStore, usePlayerStore } from "../store";

export default {
    name: "Player",
    setup() {
        const fileNameToPlay = ref(undefined);
        const audioTag = ref();
        const soundStore = useSoundStore();
        const playerStore = usePlayerStore();

        soundStore.$subscribe(async (mutation, state) => {
            console.log("sound in store has changed");
            console.log(mutation);
            console.log(state);
            if (state.soundToPlay === undefined) {
                return;
            }
            audioTag.value.src = `media/${state.soundToPlay}.ogg`;
            audioTag.value.type = "audio/ogg";
            audioTag.value.load();
            audioTag.value.play();
        });

        const onEnded = () => {
            console.log("play has ended");
            // audioTag.value.pause();
            playerStore.isPlaying = false;
            soundStore.$reset();
        };

        const onPlay = () => {
            console.log("playing");
            playerStore.isPlaying = true;
        };

        return {
            fileNameToPlay,
            audioTag,
            onEnded,
            onPlay,
        };
    },
};
</script>
