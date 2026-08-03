<script setup lang="ts">
import { useGallery } from './composables/useGallery';

const { files, getFiles } = useGallery();

getFiles();
</script>

<template>
	<div>hiii</div>
</template>
