<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <p class="footer__caption">Is there a project?</p>
    <div class="footer__columns">
      <h2 class="footer__title">Let&#8217;s work together</h2>
      <address class="footer__address">
        <div>
          For all questions<br />
          <a href="tel:+79999999999">+7 (999) 999-99-99</a><br />
          <a href="mailto:joe@example.com">joe@example.com</a>
        </div>
        <div>
          Office in Russia<br />
          139 Ruben Station Lake Drew, NM 52678<br />
          <a href="#" class="footer__btn-address btn" aria-label="Contacts">
            <svg width="12" height="12" aria-hidden="true">
              <use href="@/assets/images/icons.svg#location"></use>
            </svg>
          </a>
        </div>
        <div>
          Office in Dubai<br />
          139 Ruben Station Lake Drew, NM 52678<br />
          <a href="#" class="footer__btn-address btn" aria-label="Contacts">
            <svg width="12" height="12" aria-hidden="true">
              <use href="@/assets/images/icons.svg#location"></use>
            </svg>
          </a>
        </div>
      </address>
    </div>
    <address class="footer__contacts">
      <div class="footer__contacts-column">
        <a href="#" class="footer__link">Facebook</a>
        <a href="#" class="footer__link">Instagram</a>
        <a href="#" class="footer__link">Telegram</a>
      </div>
      <div class="footer__contacts-column">
        <a href="#" class="footer__link">Behance</a>
        <a href="#" class="footer__link">Linkedn</a>
        <a href="#" class="footer__link">Privacy Policy</a>
      </div>
    </address>
    <button class="footer__btn-go btn" type="button">Go</button>
  </footer>
</template>

<style>
.footer {
  position: relative;
  padding-top: 140px;
  padding-bottom: 30px;
  padding-left: 112px;
  padding-right: 112px;
  background-color: var(--color-mauve);
  overflow: hidden;
}

.footer__columns {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 273px;
}

.footer__title {
  max-width: 464px;
  font-size: 112px;
  font-weight: 400;
  letter-spacing: 0.01em;
  cursor: pointer;
  text-decoration: underline;
  text-decoration-thickness: 1px;
  transition: all 0.3s ease-in-out;
}

.footer__title:hover {
  color: var(--color-purple);
}

.footer__caption {
  margin-bottom: 56px;
  letter-spacing: 0.01em;
}

.footer__address {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.footer__btn-address {
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.footer__contacts {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.footer__contacts-column {
  display: flex;
  gap: 32px;
}

.footer__link {
  text-decoration: underline;
  transition: all 0.3s ease-in-out;
}

.footer__link:hover {
  color: var(--color-light);
}

.footer__btn-go {
  padding: 122px 160px 192px 160px;
  position: absolute;
  inset: 620px auto auto 50%;
  transform: translateX(-50%);
  width: 358px;
  height: 358px;
  font-size: 32px;
}

/* FIXME: Убрать грязный прием с наращиванием специфичности  */
.footer__btn-go:hover.footer__btn-go:hover {
  background-color: #000;
  transform: translateX(-50%) scale(1.25);
}
</style>
