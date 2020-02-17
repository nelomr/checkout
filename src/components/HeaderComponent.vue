<template>
    <header class="header">
        <div class="container">
            <a href="#" class="header-logo">
                <img src="logo.png" alt="logo">
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
                            <i class="menu--item-icon"><IconPerson></IconPerson></i>
                            Singin
                        </a>
                    </li>
                    <li class="menu--item">
                        <a href="#">
                            Es
                            <i class="menu--item-icon"><IconArrowDown></IconArrowDown></i>
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<script>
import IconBook from "./icons/IconBook";
import IconArrowDown from "./icons/IconArrowDown";
import IconPerson from "./icons/IconPerson";

export default {
    components: {
        IconBook,
        IconPerson,
        IconArrowDown
    }
}
</script>