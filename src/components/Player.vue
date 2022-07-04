<template>
    <div style="display: none" aria-hidden="true">
        <audio ref="audioTag" @ended="onEnded" @play="onPlay">
            <source
                v-if="fileNameToPlay"
                :src="`media/${fileNameToPlay}.ogg`"
                type="audio/ogg"
            />
            <source
                v-if="fileNameToPlay"
                :src="`media/${fileNameToPlay}.mp3`"
                type="audio/mp3"
            />
            Your browser does not support the audio element.
        </audio>
    </div>
</template>

<script>
import { ref, nextTick } from "vue";
import { useSoundStore, usePlayerStore } from "../store";

export default {
    name: "Player",
    setup() {
        const fileNameToPlay = ref(undefined);
        const audioTag = ref();
        const soundStore = useSoundStore();
        const playerStore = usePlayerStore();

        soundStore.$subscribe(async (_, state) => {
            if (state.soundToPlay === undefined) {
                return;
            }
            fileNameToPlay.value = state.soundToPlay;
            await nextTick();

            audioTag.value.load();
            audioTag.value.play();
        });

        const onEnded = () => {
            playerStore.isPlaying = false;
            soundStore.$reset();
        };

        const onPlay = () => {
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
