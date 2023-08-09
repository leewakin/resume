<template>
  <div class="w-full p-5">
    <AppHeader />
    <div class="max-w-5xl m-auto pt-24">
      <div id="about">
        <About />
      </div>

      <Projects />

      <div id="contact" class="my-52">
        <HomeTitle label="联系方式" />
        <Contacts />
      </div>
    </div>

    <AppFooter />
  </div>
</template>

<style lang="postcss">
@import 'assets/css/theme.css';
</style>
