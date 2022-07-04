<template>
    <main class="App theme-bg">
        <player />
        <app-header />
        <sound-list>
            <sound
                v-for="(sound, index) in sounds"
                :key="index"
                :icon="sound.icon"
                :name="sound.name"
                :file-name="sound.fileName"
            />
        </sound-list>
    </main>
</template>

<script>
import SoundList from "./SoundList.vue";
import Sound from "./Sound.vue";
import Player from "./Player.vue";
import AppHeader from "./Header.vue";

export default {
    name: "App",
    data: () => {
        return {
            sounds: window.__INITIAL_DATA__.sounds || [],
        };
    },
    components: {
        SoundList,
        Sound,
        Player,
        AppHeader,
    },
};
</script>

<style scoped lang="scss">
//https://neumorphism.io/#2fb3ff

.App {
    // TODO: Move to theme
    background: #2fb3ff;
    width: 100%;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>
