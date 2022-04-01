<script>
    // Libraries
    import {onMount} from 'svelte'
    import {locale, t} from '$lib/translations'
    import {page} from '$app/stores'

    // Components
    import ColorSchemeSwitcher from '$lib/components/Switcher/ColorSchemeSwitcher.svelte'
    import LocaleSwitcher from '$lib/components/Switcher/LocaleSwitcher.svelte'
    import {colorScheme} from "$lib/shares/js/ClassColorScheme/ClassColorScheme"

    $: ({route, lang} = $page.stuff)
    const colorSchemeMapping = {
        dark: ['navbar-light', 'bg-light'],
        light: ['navbar-dark', 'bg-dark']
    }
    let navBar

    $: curUrl = `/${lang}${route}`

    const checkColorSchemeMode = (val) => {
        if (!navBar) return
        navBar.classList.remove('navbar-dark', 'bg-dark', 'navbar-light', 'bg-light')
        navBar.classList.add(...colorSchemeMapping[val])
    }

    onMount(async () => {
        checkColorSchemeMode(window.document.querySelector('html').dataset.colorScheme)
        colorScheme.subscribe((obj) => {
            checkColorSchemeMode(obj)
        })
    })
</script>

<nav bind:this="{navBar}" class="black nav sticky-top navbar-expand-lg rounded-0 sm" >
    <div class="container-fluid d-flex flex-wrap flex-column flex-lg-row justify-content-start align-items-start inline inline-block" style="background-color: #83674566">
            <div class="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                <i class="fa-solid fa-bars" ></i>
                <!-- <span class="navbar-brand text-muted">
                    {$t('common.menu')}
                </span> -->
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <a class="navbar-brand" href="/{$locale}/">cheburashka os</a>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item">
                    <a class:active="{curUrl === `/${$locale}/`}"
                       class="nav-link" href="/{$locale}/">
                        {$t('menu.home')}
                    </a>
                </li>
                <li class="nav-item">
                    <a class:active="{curUrl === `/${$locale}/about/`}"
                       class="nav-link" href="/{$locale}/about/">
                        {$t('menu.about')}
                    </a>
                </li>
                <li class="nav-item dropdown disabled">
                    <a class="nav-link dropdown-toggle disabled" href="#" id="navbarDropdown" role="button"
                       data-bs-toggle="dropdown" aria-expanded="false">
                        Download
                    </a>
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li><a class="dropdown-item" href="/{$locale}/action/">XFCE Edition</a></li>
                        <li><a class="dropdown-item" href="/{$locale}/action/another">MATE Edition</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="/{$locale}/sth/">I3 edition</a></li>
                    </ul>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="/{$locale}/disabled/" tabindex="-1" aria-disabled="true">Блог</a>
                </li>
                <li class="nav-item d-lg-none">
                    <ColorSchemeSwitcher mode="string" className="colinher nav-link"/>
                </li>
            </ul>
            <div class="flex-wrap flex-row btn nav pl-2 text-white m-2"  style="color:inherit;padding-left:0.6em;">
            <div>
                <ColorSchemeSwitcher/>
            </div>
            <div class="ms-2 text-white">
                <LocaleSwitcher/>
            </div>
        </div>
            <!--
            <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
            -->
        </div>
    </div>
</nav>

<style lang="scss">
  .navbar {
    &-brand,
    &-brand:hover {
      text-decoration: none;
      text-transform: uppercase;
      display: inline-block;
    }
    &-toggler {
      border: 0 none;
      letter-spacing: 0.05rem;
      text-transform: uppercase;
      &:focus {
        box-shadow: none;
      }
    }
  }
</style>
