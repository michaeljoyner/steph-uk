<script lang="ts" setup>
import type { Consultation } from "~/stuff";
type Props = {
  consult: Consultation;
};
const props = defineProps<Props>();
</script>

<template>
  <div
    class="max-w-sm p-6 rounded-lg shadow-lg flex flex-col items-start bg-slate-50 dark:bg-slate-700"
  >
    <div class="flex-1">
      <p class="font-bold">{{ consult.name }}</p>
      <p class="my-4 text-gray-500 dark:text-gray-300 text-sm">
        {{ consult.description }}
      </p>
    </div>

    <p
      class="font-semibold inline-block px-3 py-1 rounded text-lg bg-fuchsia-200 text-fuchsia-500"
    >
      £{{ consult.price }}
    </p>
  </div>
</template>
