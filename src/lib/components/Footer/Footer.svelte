<script>
    // Libraries
    import {browser} from '$app/env'
    import {t} from '$lib/translations'

    // Components
    import ColorSchemeSwitcher from '$lib/components/Switcher/ColorSchemeSwitcher.svelte'
    import LocaleSwitcher from '$lib/components/Switcher/LocaleSwitcher.svelte'
</script>

{#if browser}
    <footer class="z-5 p-5 text-center">
                {$t(`common.copyright`, {
                    crYear: new Date().getFullYear()
                })}
    </footer>
{/if}

<style lang="scss">
  footer {
    width: 100%;
    display: block;
    font-size: calc(var(--bs-body-font-size) * 0.75);
    margin-bottom: 0;
    position: fixed;
    background: inherit;
    z-index: -100;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 10em;
  }
  .agray{
    background-color: gray;
    padding: 4em;
  }
</style>
