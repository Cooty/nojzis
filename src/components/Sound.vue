<template>
    <li
        class="Sound"
        :class="{ 'Sound--disabled': disabled, 'Sound--playing': playing }"
    >
        <button type="button" class="Sound__button" @click="playSound">
            <span class="Sound__button-content">
                <span>
                    <span class="Sound__icon">
                        {{ icon }}
                    </span>
                    <strong class="Sound__label">
                        {{ name }}
                    </strong>
                </span>
            </span>
        </button>
    </li>
</template>

<script>
import { computed } from "vue";
import { useSoundStore, usePlayerStore } from "../store";

export default {
    name: "Sound",
    props: {
        icon: {
            type: String,
        },
        name: {
            type: String,
        },
        fileName: {
            type: String,
        },
    },
    setup(props) {
        const soundStore = useSoundStore();
        const playerStore = usePlayerStore();
        const playSound = () => {
            if (playerStore.isPlaying) {
                return;
            }
            soundStore.soundToPlay = props.fileName;
        };
        const disabled = computed(
            () =>
                playerStore.isPlaying &&
                props.fileName !== soundStore.soundToPlay
        );

        const playing = computed(
            () =>
                playerStore.isPlaying &&
                props.fileName === soundStore.soundToPlay
        );

        return {
            playSound,
            disabled,
            playing,
        };
    },
};
</script>

<style scoped lang="scss">
@use "sass:math";
@use "../styles/config/breakpoints" as bp;
.Sound {
    max-width: 50%;
    flex: 0 0 50%;
    padding: var(--gutter);

    @media screen and (min-width: #{bp.$sm}) {
        max-width: 33.3333%;
        flex: 0 0 33.3333%;
    }

    &--disabled {
        opacity: 0.5;
    }

    &__button {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-top: #{(math.div(1, 1) * 100)}#{"%"};
        border-radius: 12%;
        cursor: pointer;
        // TODO: Move to theme
        background: #2fb3ff;
        box-shadow: 20px 20px 60px #2898d9, -20px -20px 60px #36ceff;
    }

    &--disabled &__button {
        cursor: not-allowed;
    }

    &--playing &__button-content {
        animation: tilt-shaking 0.25s linear infinite;
    }

    @keyframes tilt-shaking {
        0% {
            transform: rotate(0deg);
        }
        25% {
            transform: rotate(5deg);
        }
        50% {
            transform: rotate(0eg);
        }
        75% {
            transform: rotate(-5deg);
        }
        100% {
            transform: rotate(0deg);
        }
    }

    &__button-content {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    &__icon {
        line-height: 0;
        font-size: 2.4rem;
        display: block;
        margin-bottom: 2rem;
    }

    &__label {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-weight: bold;
        font-size: 1.6rem;
        // TODO: Move to theme
        color: white;
    }
}
</style>
