<script setup lang="ts">
  const { data: page } = await useAsyncData('index', () =>
    queryContent('/').findOne()
  );

  const domains = JSON.parse(useRuntimeConfig().public.domains);

  useSeoMeta({
    titleTemplate: '',
    title: page.value.title,
    ogTitle: page.value.title,
    description: page.value.description,
    ogDescription: page.value.description
  });
</script>

<template>
  <div class="flex flex-col items-center gap-4">
    <ULandingHero
      v-if="page.hero"
      v-bind="page.hero">
      <template #headline>
        <UBadge
          v-if="page.hero.headline"
          variant="subtle"
          size="lg"
          class="relative rounded-full font-semibold">
          <NuxtLink
            :to="page.hero.headline.to"
            target="_blank"
            class="focus:outline-none"
            tabindex="-1">
            <span
              class="absolute inset-0"
              aria-hidden="true" />
          </NuxtLink>

          {{ page.hero.headline.label }}

          <UIcon
            v-if="page.hero.headline.icon"
            :name="page.hero.headline.icon"
            class="pointer-events-none ml-1 h-4 w-4" />
        </UBadge>
      </template>

      <template #title>
        <MDC :value="page.hero.title" />
      </template>

      <!-- <img
        src="/public/un-512.png"
        alt=""
        class="h-64 w-full rounded-lg object-cover" /> -->
    </ULandingHero>
    <div class="flex w-full max-w-prose flex-col gap-4">
      <span>
        The legal documents within this site only apply to services and
        applications provided by Unproprietary Corporation under the following
        domains:
      </span>
      <div class="flex flex-row flex-wrap gap-4">
        <template
          v-for="(domain, index) in domains"
          :key="index">
          <div class="rounded-md bg-gray-800 px-2 py-1">
            <span class="font-mono">
              {{ domain }}
            </span>
          </div>
        </template>
      </div>
      <span>
        Any services on domains not listed above are not covered by these
        documents, and are considered 3rd party instances of Unproprietary
        Corporation's open source code.
      </span>
    </div>
    <ULandingSection
      :title="page.features.title"
      :links="page.features.links">
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of page.features.items"
          :key="index"
          v-bind="item" />
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
