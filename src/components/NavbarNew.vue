<template>
    <Disclosure as="nav" class="bg-gray-800 sticky top-0 z-50" v-slot="{ open }">
        <!-- Desktop & Mobile Top Bar -->
        <div class="mx-2 max-w-7xl px-2 sm:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                <!-- Mobile Bottom -->
                <div class="fixed inset-x-0 bottom-0 z-40 border-t border-gray-700 bg-gray-800 md:hidden">
                    <div class="flex h-16 items-center justify-around">
                        <RouterLink v-for="item in navigation" :key="item.name"
                            class="flex flex-col items-center space-y-1" :class="[
                                isCurrent(item)
                                    ? 'bg-gray-900 text-white'
                                    : 'text-white hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-md font-medium flex items-center gap-1',
                            ]">
                            <component :is="getMobileIcon(item.name)" class="size-6"
                                :class="isCurrent(item) ? 'text-white' : 'text-gray-400'" />
                            <span class="text-xs text-gray-400" :class="item.current ? 'text-white' : 'text-gray-400'">
                                {{ item.name }}
                            </span>
                        </RouterLink>
                    </div>
                </div>

                <div class="flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div class="stroke-[40px] ml-4 mb-2 drop-shadow-xl">
                        <RouterLink to="/">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true" class="w-24 h-20"
                                viewBox="0 0 2 2">
                                <path fill="#3636e0"
                                    d="M.892 1.548H.678v-.296q0-.034-.008-.047t-.027-.013q-.036 0-.036.061v.296H.394v-.296q0-.034-.008-.047t-.027-.014q-.036 0-.036.061v.296H.11V1.21q0-.092.064-.157T.331.988q.095 0 .17.077Q.585.988.669.988q.107 0 .172.075.051.058.051.17zM1.374.8h.214v.458q0 .126-.069.205-.04.046-.1.073t-.125.027q-.128 0-.215-.083t-.088-.202q0-.116.087-.201t.206-.085l.057.003v.227q-.026-.02-.053-.02-.033 0-.057.023t-.024.056q0 .032.024.055t.059.023q.082 0 .082-.11zm.578.199v.549h-.214V.999zM1.926.786q-.032-.03-.075-.03t-.075.03-.032.07q0 .014.003.026l.006.016q.007.016.021.028.03.028.077.028c.047 0 .057-.009.077-.028q.014-.013.021-.029l.002-.005q.006-.017.006-.037 0-.04-.032-.07m.065.016Q1.973.754 1.928.729T1.834.717q-.046.011-.068.048L1.763.77l-.001.002q.02-.036.066-.045.048-.01.092.014t.064.069q.017.042.001.077.021-.04.004-.087m.043-.02Q2.011.722 1.955.692c-.056-.03-.076-.025-.116-.015q-.056.014-.083.058l-.004.006-.001.002Q1.775.7 1.832.689q.058-.012.114.018t.078.085q.021.051.002.094.025-.049.004-.106" />
                            </svg>
                        </RouterLink>
                    </div>

                    <div class="hidden sm:ml-6 sm:block">
                        <div class="flex space-x-4 items-center h-full">
                            <template v-for="item in navigation" :key="item.name">
                                <Menu v-if="item.children" as="div" class="relative">
                                    <MenuButton :class="[
                                        isCurrent(item)
                                            ? 'bg-gray-900 text-white'
                                            : 'text-white hover:bg-gray-700 hover:text-white',
                                        'rounded-md px-3 py-2 text-md font-medium flex items-center gap-1',
                                    ]">
                                        {{ item.name }}
                                        <ChevronDownIcon class="size-4" />
                                    </MenuButton>
                                    <transition enter-active-class="transition ease-out duration-100"
                                        enter-from-class="transform opacity-0 scale-95"
                                        enter-to-class="transform opacity-100 scale-100"
                                        leave-active-class="transition ease-in duration-75"
                                        leave-from-class="transform opacity-100 scale-100"
                                        leave-to-class="transform opacity-0 scale-95">
                                        <MenuItems
                                            class="absolute left-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                            <MenuItem v-for="child in item.children" :key="child.name"
                                                v-slot="{ active }">
                                            <Menu v-if="child.children" as="div" class="relative">
                                                <MenuButton :class="[
                                                    isCurrent(child) || active ? 'bg-gray-100' : '',
                                                    'px-4 py-2 text-sm text-gray-700 flex items-center gap-1',
                                                ]">
                                                    {{ child.name }}
                                                    <ChevronDownIcon class="size-4" />
                                                </MenuButton>
                                                <transition enter-active-class="transition ease-out duration-100"
                                                    enter-from-class="transform opacity-0 scale-95"
                                                    enter-to-class="transform opacity-100 scale-100"
                                                    leave-active-class="transition ease-in duration-75"
                                                    leave-from-class="transform opacity-100 scale-100"
                                                    leave-to-class="transform opacity-0 scale-95">
                                                    <MenuItems
                                                        class="absolute left-full top-0 z-10 mt-2 w-48 origin-top-left rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                                        <MenuItem v-for="subChild in child.children"
                                                            :key="subChild.name" v-slot="{ active }">
                                                        <RouterLink :to="subChild.href" :class="[
                                                            active ? 'bg-gray-100' : '',
                                                            'block px-4 py-2 text-sm text-gray-700',
                                                        ]">
                                                            {{ subChild.name }}
                                                        </RouterLink>
                                                        </MenuItem>
                                                    </MenuItems>
                                                </transition>
                                            </Menu>
                                            <RouterLink v-else :to="child.href" :class="[
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700',
                                            ]">
                                                {{ child.name }}
                                            </RouterLink>
                                            </MenuItem>
                                        </MenuItems>
                                    </transition>
                                </Menu>
                                <RouterLink v-else :to="item.href" :class="[
                                    isCurrent(item)
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'rounded-md px-3 py-2 text-sm font-medium',
                                ]">
                                    {{ item.name }}
                                </RouterLink>
                            </template>
                        </div>
                    </div>
                </div>

                <div v-if="user?.name" class="relative ml-3">
                    <Menu as="div">
                        <div>
                            <MenuButton
                                class="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                <span class="absolute -inset-1.5" />
                                <span class="sr-only">Open user menu</span>
                                <img class="size-8 rounded-full"
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="" />
                            </MenuButton>
                        </div>
                        <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                                class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/profile" :class="[
                                    active ? 'bg-gray-100 outline-none' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Your Profile
                                </RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <RouterLink to="/settings" :class="[
                                    active ? 'bg-gray-100 outline-none' : '',
                                    'block px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Settings
                                </RouterLink>
                                </MenuItem>
                                <MenuItem v-slot="{ active }">
                                <button @click="logout" type="button" :class="[
                                    active ? 'bg-gray-100 outline-none' : '',
                                    'block w-full text-left px-4 py-2 text-sm text-gray-700',
                                ]">
                                    Sign out
                                </button>
                                </MenuItem>
                            </MenuItems>
                        </transition>
                    </Menu>
                </div>
            </div>
        </div>

        <DisclosurePanel class="sm:hidden">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <template v-for="item in navigation" :key="item.name">
                    <Disclosure v-if="item.children" v-slot="{ open: childOpen }">
                        <DisclosureButton :class="[
                            isCurrent(item)
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                            'flex w-full justify-between rounded-md px-3 py-2 text-base font-medium',
                        ]">
                            {{ item.name }}
                            <ChevronDownIcon :class="[childOpen ? 'rotate-180' : '', 'size-5 transform transition']" />
                        </DisclosureButton>
                        <DisclosurePanel class="ml-4 space-y-1">
                            <template v-for="child in item.children" :key="child.name">
                                <Disclosure v-if="child.children" v-slot="{ open: subOpen }">
                                    <DisclosureButton :class="[
                                        isCurrent(item) ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700',
                                        'flex w-full justify-between px-3 py-2 text-left rounded-md text-base font-medium'
                                    ]">
                                        {{ child.name }}
                                        <ChevronDownIcon
                                            :class="[subOpen ? 'rotate-180' : '', 'size-4 transform transition']" />
                                    </DisclosureButton>
                                    <DisclosurePanel class="ml-4">
                                        <RouterLink v-for="subChild in child.children" :key="subChild.name"
                                            :to="subChild.href" :class="[
                                                isCurrent(subChild) ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700',
                                                'block rounded-md px-3 py-2 text-base'
                                            ]">
                                            {{ subChild.name }}
                                        </RouterLink>
                                    </DisclosurePanel>
                                </Disclosure>
                                <RouterLink v-else :to="child.href" :class="[
                                    isCurrent(child) ? 'bg-gray-900 text-white' : 'text-white hover:bg-gray-700',
                                    'block rounded-md px-3 py-2 text-base'
                                ]">
                                    {{ child.name }}
                                </RouterLink>
                            </template>
                        </DisclosurePanel>
                    </Disclosure>
                    <RouterLink v-else :to="item.href" :class="[
                        isCurrent(item)
                            ? 'bg-gray-900 text-white'
                            : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                        'block rounded-md px-3 py-2 text-base font-medium',
                    ]">
                        {{ item.name }}
                    </RouterLink>
                </template>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/vue'
import { HomeIcon, ServerIcon, FolderIcon, CalendarIcon } from '@heroicons/vue/24/outline'
import { RouterLink, useRoute } from 'vue-router'

// Ambil route saat ini
const route = useRoute()

// Cek apakah link aktif berdasarkan path
const isCurrent = (item) => {
    return item.href === route.path
}

// Fungsi aman untuk ambil ikon mobile
const getMobileIcon = (name = '') => {
    switch (name.toLowerCase()) {
        case 'home':
            return HomeIcon
        case 'product':
            return ServerIcon
        case 'service & solutions':
            return FolderIcon
        case 'our projects':
            return FolderIcon
        case 'contact':
            return CalendarIcon
        default:
            return FolderIcon
    }
}

// Daftar menu navigasi
const navigation = [
    {
        name: 'Home',
        href: '/',
    },
    {
        name: 'product',
        href: '/product',
        children: [
            {
                name: 'XGSPON',
                href: '/product?category=XGSPON',
                children: [
                    { name: 'OLT', href: '/product?category=XGSPON&sub=OLT' },
                    { name: 'ONT', href: '/product?category=XGSPON&sub=ONT' },
                    { name: 'ONU', href: '/product?category=XGSPON&sub=ONU' },
                    { name: 'XGSPON Stick', href: '/product?category=XGSPON&sub=XGSPON+STICK' },
                ],
            },
            {
                name: 'GPON',
                href: '/product?category=GPON',
                children: [
                    { name: 'OLT', href: '/product?category=GPON&sub=OLT' },
                    { name: 'ONT', href: '/product?category=GPON&sub=ONT' },
                    { name: 'ONU', href: '/product?category=GPON&sub=ONU' },
                    { name: 'ONU PoE', href: '/product?category=GPON&sub=ONUPoE' },
                    { name: 'GPON Stick', href: '/product?category=GPON&sub=GPONStick' },
                ],
            },
            {
                name: 'Switch',
                href: '/product?category=Switch',
                children: [
                    { name: 'Core Switch', href: '/product?category=SWITCH&sub=BACKBONE' },
                    { name: 'L3 Switch', href: '/product?category=SWITCH&sub=L3Switch' },
                    { name: 'L2 Switch', href: '/product?category=SWITCH&sub=L2Switch' },
                    { name: 'PoE Switch', href: '/product?category=SWITCH&sub=PoESwitch' },
                ],
            },
            {
                name: 'WI-FI',
                href: '/product?category=WIRELESS',
                children: [
                    { name: 'Accees Point', href: '/product?category=WIRELESS&sub=AP' },
                    { name: 'Controller', href: '/product?category=WI-FI&sub=OutdoorAP' },
                ],
            },
        ],
    },
    {
        name: 'Service & Solutions',
        href: '/solutions',
    },
    {
        name: 'Our Projects',
        href: '/projects',
    },
    {
        name: 'Contact',
        href: '/contact',
    },
]
</script>
