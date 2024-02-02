<script setup lang="ts"></script>

<template>
  <header class="header">
    <a class="header__link" href="/" aria-label="Home">
      <svg class="header__logo" width="84" height="25" aria-hidden="true">
        <use href="@/assets/images/icons.svg#logo"></use>
      </svg>
    </a>
    <div class="header__right">
      <nav class="navbar" aria-label="Main menu">
        <ul class="navbar__list">
          <li class="navbar__item">
            <a href="#" class="navbar__link">Works</a>
          </li>
          <li class="navbar__item">
            <a href="#" class="navbar__link">About</a>
          </li>
        </ul>
      </nav>
      <div class="header__toolbar">
        <button
          class="header__lang-select"
          aria-label="Select your language preference"
          type="button"
        >
          <svg class="header__icon" width="24" height="24" aria-hidden="true">
            <use href="@/assets/images/icons.svg#flag-uk"></use>
          </svg>
        </button>
        <button class="header__btn-toolbar btn" type="button">Let's work</button>
      </div>
    </div>
  </header>
</template>

<style>
.header {
  padding: 25px 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.header__right {
  display: flex;
  align-items: center;
  column-gap: 90px;
}

.navbar__list {
  display: flex;
  column-gap: 48px;
  font-size: 20px;
  list-style: none;
}

.navbar__link:hover {
  text-decoration: underline;
}

.header__toolbar {
  display: flex;
  column-gap: 16px;
}

.header__lang-select {
  width: 52px;
  height: 52px;
  background-color: transparent;
  border-radius: 9999px;
  border: 2px solid rgba(0, 0, 0, 0.1);
}

.header__icon {
  margin: auto;
  display: block;
}

.header__btn-toolbar {
  padding: 10px 32px;
}
</style>
