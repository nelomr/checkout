<template>
    <header class="header">
        <div class="container">
            <a href="#" class="hedaer-logo">
                <IconLogo></IconLogo>
            </a>
            <nav class="menu">
                <ul class="menu--list">
                    <li class="menu--item">
                        <a href="#">
                            <i class="menu--item-icon"><IconBook></IconBook></i>Ayuda
                        </a>
                    </li>
                    <li class="menu--item">
                        <a href="#">
                            Singin
                        </a>
                    </li>
                    <li class="menu--item"><a href="#">Es</a></li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import IconLogo from "./icons/IconLogo";
import IconBook from "./icons/IconBook";
export default {
    components: {
        IconLogo,
        IconBook
    }
}
</script>