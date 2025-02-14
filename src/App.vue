<template>
  <div>
    {{ $t("") }}
    {{ t("") }}
  </div>
</template>

<script setup lang="ts">
import { useTranslation } from 'i18next-vue';

const { t } = useTranslation();
</script>
