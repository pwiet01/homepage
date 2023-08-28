<script lang="ts">
  import PageWithPadding from '$lib/layout/PageWithPadding.svelte';
  import Projects from './Projects.svelte';
  import AboutMe from './AboutMe.svelte';
  import { loremIpsum } from 'lorem-ipsum';

  const sectionClass = 'flex flex-row justify-center items-center';
  const sectionInnerClass = 'flex-1 max-w-[80rem] items-center';
  const sectionHeaderClass = 'opacity-70 text-center mb-4';

  const dividerClass = 'flex flex-row justify-center p-0 my-6 md:my-12';
  const dividerInnerClass = 'divider flex-1 max-w-[80rem] justify-center';
</script>

<PageWithPadding>
  <section class="{sectionClass} card bg-base-200">
    <div
      class="{sectionInnerClass} card-body px-0 flex flex-col-reverse md:flex-row md:justify-between"
    >
      <div class="flex-1">
        <h1 class="text-primary mb-2">Hey!</h1>
        <p class="text-lg">
          Ich bin Patrice, Full Stack Web Developer aus Osnabrück und seit Januar 2023 bei
          <a href="https://www.basecom.de/" target="_blank" class="text-link">basecom</a> beschäftigt.
        </p>
        <p class="text-lg mt-1">
          Auf dieser Website möchte ich mich und einige meiner Projekte vorstellen.
        </p>
        <ul class="mt-5 list-disc list-inside text-lg">
          <li><a href="#projects" class="text-link">Meine Projekte</a></li>
          <li><a href="#about-me" class="text-link">Über mich</a></li>
          <li><a href="#tech-stack" class="text-link">Technologien</a></li>
          <li><a href="#contact" class="text-link">Kontaktformular</a></li>
        </ul>
      </div>

      <div class="mb-6 md:mb-0 md:ml-10 flex flex-col justify-center items-center">
        <img src="./images/patrice01.jpg" alt="Profilbild" class="max-h-64 rounded-full" />
      </div>
    </div>
  </section>

  <section id="projects" class="{sectionClass} px-0 mt-8 sm:mt-14">
    <div class="{sectionInnerClass} px-0">
      <h3 class={sectionHeaderClass}>Projekte auf GitHub</h3>
      <p>{loremIpsum({ count: 5 })}</p>

      <h3 class="{sectionHeaderClass} mt-10">Auf dieser Website</h3>
      <Projects />
    </div>
  </section>

  <div class={dividerClass}>
    <div class={dividerInnerClass} />
  </div>

  <section id="about-me" class={sectionClass}>
    <div class={sectionInnerClass}>
      <h3 class={sectionHeaderClass}>Über mich</h3>
      <AboutMe />
    </div>
  </section>

  <div class={dividerClass}>
    <div class={dividerInnerClass} />
  </div>

  <section id="tech-stack" class={sectionClass}>
    <div class={sectionInnerClass}>
      <h3 class={sectionHeaderClass}>Technologien</h3>
      <p>{loremIpsum({ count: 5 })}</p>
    </div>
  </section>

  <div class={dividerClass}>
    <div class={dividerInnerClass} />
  </div>

  <section id="contact" class={sectionClass}>
    <div class={sectionInnerClass}>
      <h3 class={sectionHeaderClass}>Kontakt</h3>
      <p>{loremIpsum({ count: 5 })}</p>
    </div>
  </section>
</PageWithPadding>
