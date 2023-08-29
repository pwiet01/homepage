<script lang="ts">
  import Projects from './Projects.svelte';
  import AboutMe from './AboutMe.svelte';
  import HandPointerListItem from '$lib/components/HandPointerListItem.svelte';
  import TechStack from './TechStack.svelte';

  const sectionClass = 'flex flex-row justify-center items-center py-6 md:py-12';
  const sectionInnerClass = 'flex-1 max-w-[80rem] items-center';
  const sectionHeaderClass = 'opacity-70 text-center mb-6';

  const dividerClass = 'flex flex-row justify-center p-0';
  const dividerInnerClass = 'divider flex-1 max-w-[80rem] justify-center';
</script>

<section
  class="{sectionClass} px-[1.5rem] pt-24 md:pt-28 pb-6 md:pb-12 -mt-[--header-height] w-screen -ml-[1.5rem] bg-base-200"
>
  <div class="{sectionInnerClass} flex flex-col-reverse md:flex-row md:justify-between">
    <div class="flex-1">
      <h1 class="text-primary mb-2">Hey!</h1>
      <p class="text-lg">
        Ich bin Patrice, Full Stack Web Developer aus Osnabrück und seit Januar 2023 bei
        <a href="https://www.basecom.de/" target="_blank" class="text-link">basecom</a> beschäftigt.
      </p>
      <p class="text-lg mt-1">
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
      </ul>
    </div>

    <div class="mb-6 md:mb-0 md:ml-10 flex flex-col justify-center items-center">
      <img src="./images/patrice01.jpg" alt="Profilbild" class="max-h-64 rounded-full" />
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
    <TechStack />
  </div>
</section>
