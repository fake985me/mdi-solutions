<template>
  <section class="bg-blue-50 dark:bg-slate-800" id="contact">
    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div class="mb-4">
        <div class="mb-6 max-w-3xl text-center sm:text-center md:mx-auto md:mb-12">
          <p class="text-base font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-200">
            Contact
          </p>
          <h2 class="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
            Get in Touch
          </h2>
        </div>
      </div>

      <div class="flex items-stretch justify-center">
        <!-- grid utama: 1 kolom -> 2 kolom di md, tambah gap -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          <!-- Kiri: info -->
          <div class="h-full pr-0 md:pr-6">
            <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
              Provide your network connectivity solutions Trusted distributor and Experienced technical
              support for DASAN equipment in Indonesia Offers something that is beyond your reach
            </p>

            <ul class="mb-6 md:mb-0 space-y-6">
              <!-- Address -->
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 flex-shrink-0">
                  <!-- MapPin (ikon valid) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M19.5 10.5c0 7.5-7.5 10.5-7.5 10.5S4.5 18 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>
                    <path d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
                  </svg>
                </div>
                <div class="ml-4 mb-0">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address</h3>
                  <p class="text-gray-600 dark:text-slate-400">Gedung Tifa Arum Realty</p>
                  <p class="text-gray-600 dark:text-slate-400">3th Floor Suite 301</p>
                  <p class="text-gray-600 dark:text-slate-400">Kuningan Barat Jakarta Selatan 12710</p>
                </div>
              </li>

              <!-- Contact -->
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 flex-shrink-0">
                  <!-- Phone-call (ikon valid) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5-2.5l5 2v4a2 2 0 0 1-2 2a16 16 0 0 1-15-15a2 2 0 0 1 2-2"/>
                    <path d="M15 7a2 2 0 0 1 2 2"/>
                    <path d="M15 3a6 6 0 0 1 6 6"/>
                  </svg>
                </div>
                <div class="ml-4 mb-0 w-full">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact</h3>
                  <p class="text-gray-600 dark:text-slate-400">Office : +62 21 2930-6714</p>
                  <!-- Susunan email responsif: kolom di mobile, baris di md -->
                  <ul class="mt-2 md:items-center gap-y-2 md:gap-x-10 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <strong class="mr-2 space-y-2">Mail :</strong>
                      <a href="mailto:support@mdi-solutions.com" class="text-blue-600 hover:underline">
                        <span>support@mdi-solutions.com</span>
                      </a>
                    </li>
                  </ul>
                  <ul class="mt-2 md:items-center gap-y-2 md:gap-x-10 text-sm text-gray-700 dark:text-gray-400">
                    <li>
                      <strong class="mr-2 space-y-2">Mail :</strong>
                      <a href="mailto:info@mdi-solutions.com" class="text-blue-600 hover:underline">
                        <span>info@mdi-solutions.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </li>

              <!-- Sales & Marketing -->
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50 flex-shrink-0">
                  <!-- Clock (ikon valid) -->
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6"
                       viewBox="0 0 24 24" fill="none" stroke="currentColor"
                       stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                    <circle cx="12" cy="12" r="9"/>
                    <path d="M12 7v5l3 3"/>
                  </svg>
                </div>
                <div class="ml-4 mb-0">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Sales and Marketing</h3>
                  <p class="text-gray-600 dark:text-slate-400">Eko Wibowo : +62 857-1623-9555</p>
                  <p class="text-gray-600 dark:text-slate-400">Hadi : +62 887-0978-7005</p>
                  <p class="text-gray-600 dark:text-slate-400">Karma Satrianak : +62 877-8900-8833</p>
                </div>
              </li>
            </ul>
          </div>

          <!-- Kanan: form -->
          <div class="card h-fit w-full p-5 md:p-12" id="form">
            <h2 class="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
            <form id="contactForm" @submit.prevent="handleSubmit" novalidate>
              <!-- Name -->
              <div class="mb-4">
                <label for="name" class="block text-sm dark:text-gray-100 font-medium">Name</label>
                <input
                  id="name"
                  v-model="form.name"
                  required
                  placeholder="Your name"
                  autocomplete="name"
                  class="w-full mt-1 border rounded-md p-2 bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                />
              </div>

              <!-- Email -->
              <div class="mb-4">
                <label for="email" class="block text-sm dark:text-gray-100 font-medium">Email</label>
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="Your email address"
                  autocomplete="email"
                  class="w-full mt-1 border rounded-md p-2 bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                />
              </div>

              <!-- Message -->
              <div class="mb-4">
                <label for="message" class="block text-sm dark:text-gray-100 font-medium">Message</label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  placeholder="Your message..."
                  rows="5"
                  class="w-full mt-1 border rounded-md p-2 bg-white dark:bg-slate-900 dark:border-slate-700 dark:text-slate-100"
                ></textarea>
              </div>

              <!-- Button -->
              <button type="submit" class="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      <!-- Map: full width di bawah grid, tetap sederhana (tanpa mengubah gaya warna), responsif tinggi -->
      <div class="mt-10 w-full">
        <div class="w-full h-64 sm:h-80 md:h-96 rounded overflow-hidden">
          <iframe
            title="Our Location - Gedung Tifa Arum Realty"
            src="https://www.google.com/maps?q=Gedung%20Tifa%20Arum%20Realty%2C%20Jakarta%20Selatan%2012710&output=embed"
            class="w-full h-full border-0"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ContactForm",
  data() {
    return {
      form: {
        name: "",
        email: "",
        message: ""
      }
    };
  },
  methods: {
    handleSubmit() {
      const { name, email, message } = this.form;
      const subject = encodeURIComponent(`Message from ${name}`);
      const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
      const recipient = "info@mdi-solutions.com";

      const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${recipient}&su=${subject}&body=${body}`;
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      const newTab = window.open(gmailUrl, "_blank");
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        window.location.href = mailtoUrl;
      } else {
        setTimeout(() => {
          if (newTab.closed) {
            window.location.href = mailtoUrl;
          }
        }, 1500);
      }
    }
  }
};
</script>
