<template>
    <li class="Sound">
        <button type="button" class="Sound__button">
            <span class="Sound__button-content">
                <span>
                    <span class="Sound__icon">
                        {{icon}}
                    </span>
                    <strong class="Sound__label">
                        {{name}}
                    </strong>
                </span>
            </span>
        </button>
    </li>
</template>

<script>
export default {
    name: "Sound",
    props: {
        icon: {
            type: String,
        },
        name: {
            type: String,
        }
    }
}
</script>

<style scoped lang="scss">


.Sound {
    max-width: 50%;
    flex: 0 0 50%;
    padding: 0.8rem;

    @media screen and (min-width: 540px) {
        max-width: 33.3333%;
        flex: 0 0 33.3333%;
    }

    &__button {
        display: block;
        position: relative;
        width: 100%;
        overflow: hidden;
        height: 0;
        padding-top: #{((1 / 1) * 100)}#{'%'};
        border-radius: 12%;
        cursor: pointer;
        // TODO: Move to theme
        background: #2fb3ff;
        box-shadow:  20px 20px 60px #2898d9,
                    -20px -20px 60px #36ceff;
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
