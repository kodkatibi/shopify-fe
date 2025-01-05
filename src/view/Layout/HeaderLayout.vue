<template>
  <header class="bg-white">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Your Company</span>
          <img class="h-8 w-auto"   src="https://cdn.shopify.com/shopifycloud/shopify_dev/bundles/04b59d3031dab6b17a884b1f2af799c7220adbc7cdd2e0ce62ba4c45ce40d961.svg" alt="" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>
      </div>
      <PopoverGroup class="hidden lg:flex lg:gap-x-12">
        <router-link to="/" class="text-sm/6 font-semibold text-gray-900">Home</router-link>
        <router-link to="/orders" class="text-sm/6 font-semibold text-gray-900">Order</router-link>
        <router-link to="/login" class="text-sm/6 font-semibold text-gray-900">Login</router-link>
      </PopoverGroup>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import {
  PopoverGroup,
} from '@headlessui/vue'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>