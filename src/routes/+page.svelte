<script lang="ts">
  import Projects from './_components/Projects.svelte';
  import AboutMe from './_components/AboutMe.svelte';
  import HandPointerListItem from '$lib/components/HandPointerListItem.svelte';
  import TechStack from './_components/TechStack.svelte';
  import Contact from './_components/Contact.svelte';
  import { base } from '$app/paths';

  const sectionClass = 'flex flex-row justify-center items-center py-6 md:py-12';
  const sectionInnerClass = 'flex-1 max-w-[80rem] items-center';
  const sectionHeaderClass = 'opacity-70 text-center mb-6 text-2xl';

  const dividerClass = 'flex flex-row justify-center p-0';
  const dividerInnerClass = 'divider flex-1 max-w-[80rem] justify-center';

  export let form;
  const age = calculateAge();

  function calculateAge() {
    const birthday = new Date(2001, 3, 18);
    const ageDifMs = Date.now() - birthday.getTime();
    const ageDate = new Date(ageDifMs);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
</script>

<section
  class="{sectionClass} body-full-width-section pt-24 md:pt-28 pb-6 md:pb-12 -mt-[--header-height] bg-base-200"
>
  <div class="{sectionInnerClass} flex flex-col-reverse md:flex-row md:justify-between">
    <div class="flex-1 text-justify">
      <h1 class="text-primary mb-2 text-4xl">Hey!</h1>
      <p class="text-lg">
        Ich bin Patrice ({age}), Fullstack Web Developer aus Osnabrück und seit Januar 2023 bei
        <a href="https://www.basecom.de/" target="_blank" class="text-link">basecom</a> beschäftigt.
        <br />

        Auf dieser Website möchte ich mich und einige meiner Projekte vorstellen.
      </p>
      <ul class="fa-ul ml-0 mt-5 text-lg">
        <HandPointerListItem
          ><a href="#projects" class="text-link text-teal-500 before:bg-teal-500">Meine Projekte</a
          ></HandPointerListItem
        >
        <HandPointerListItem
          ><a href="#about-me" class="text-link text-teal-500 before:bg-teal-500">Über mich</a
          ></HandPointerListItem
        >
        <HandPointerListItem
          ><a href="#tech-stack" class="text-link text-teal-500 before:bg-teal-500">Technologien</a
          ></HandPointerListItem
        >
        <HandPointerListItem
          ><a href="#contact" class="text-link text-teal-500 before:bg-teal-500">Kontaktformular</a
          ></HandPointerListItem
        >
      </ul>
    </div>

    <div class="mb-6 md:mb-0 md:ml-10 flex flex-col justify-center items-center">
      <img src="{base}/images/patrice01.jpg" alt="Profilbild" class="max-h-64 rounded-full" />
    </div>
  </div>
</section>

<section id="projects" class="{sectionClass} px-0 mt-[1.5rem]">
  <div class="{sectionInnerClass} px-0">
    <Projects {sectionHeaderClass} />
  </div>
</section>

<div class={dividerClass}>
  <div class={dividerInnerClass} />
</div>

<section id="about-me" class={sectionClass}>
  <div class={sectionInnerClass}>
    <h1 class={sectionHeaderClass}>Über mich</h1>
    <AboutMe />
  </div>
</section>

<div class={dividerClass}>
  <div class={dividerInnerClass} />
</div>

<section id="tech-stack" class={sectionClass}>
  <div class={sectionInnerClass}>
    <h1 class={sectionHeaderClass}>Technologien</h1>
    <TechStack />
  </div>
</section>

<div class={dividerClass}>
  <div class={dividerInnerClass} />
</div>

<section id="contact" class={sectionClass}>
  <div class={sectionInnerClass}>
    <h1 class={sectionHeaderClass}>Kontakt</h1>
    <Contact form={form?.contactForm} />
  </div>
</section>
