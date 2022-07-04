<template>
    <ul class="SoundList">
        <slot />
    </ul>
</template>

<script>
export default {
    name: "SoundList",
};
</script>

<style scoped lang="scss">
.SoundList {
    width: 100%;
    max-width: var(--content-width);
    display: flex;
    flex-wrap: wrap;
    padding-top: 1rem;
    padding-bottom: 1rem;
    align-items: center;
    justify-content: center;
    margin: auto;
}
</style>

