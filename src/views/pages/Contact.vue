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
          <!-- <p class="mx-auto mt-4 max-w-3xl text-xl text-gray-600 dark:text-slate-400">In hac habitasse platea
            dictumst
          </p> -->
        </div>
      </div>
      <div class="flex items-stretch justify-center">
        <div class="grid md:grid-cols-2">
          <div class="h-full pr-6">
            <p class="mt-3 mb-12 text-lg text-gray-600 dark:text-slate-400">
              Provide your network connectivity solutions Trusted distributor and Experienced technical
              support for DASAN equipment in Indonesia Offers something that is beyond your reach
            </p>
            <ul class="mb-6 md:mb-0">
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6">
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z">
                    </path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Our Address
                  </h3>
                  <p class="text-gray-600 dark:text-slate-400">Gedung Tifa Arum Realty</p>
                  <p class="text-gray-600 dark:text-slate-400">3th Floor Suite 301 </p>
                </div>
              </li>
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6">
                    <path
                      d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2">
                    </path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Contact
                  </h3>
                  <ul class="space-y-2 space-x-10 text-sm text-gray-700 dark:text-gray-400">
                    <li><strong>Office :</strong>
                      <a href="mailto:support@mdi-solutions.com" class="text-blue-600 text-lg hover:underline">
                        <span class="md:inline">021 2930-6714
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="space-y-2 space-x-10 text-sm text-gray-700 dark:text-gray-400">
                    <li><strong>Mail : </strong>
                      <a href="mailto:support@mdi-solutions.com" class="text-blue-600 hover:underline">
                        <span class="md:inline">support@mdi-solutions.com
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="mailto:info@mdi-solutions.com" class="text-blue-600 hover:underline">
                        <span class="md:inline">info@mdi-solutions.com
                        </span>
                      </a>
                    </li>
                  </ul>

                </div>
              </li>
              <li class="flex">
                <div class="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                    stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="h-6 w-6">
                    <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                    <path d="M12 7v5l3 3"></path>
                  </svg>
                </div>
                <div class="ml-4 mb-4">
                  <h3 class="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">Sales and Marketing</h3>
                  <p class="text-gray-600 dark:text-slate-400">Eko Wibowo : +62 857-1623-9555</p>
                  <p class="text-gray-600 dark:text-slate-400">Hadi : +62 887-0978-7005</p>
                  <p class="text-gray-600 dark:text-slate-400">Karma : +62 877-8900-8833</p>
                </div>
              </li>
            </ul>
          </div>
          <div class="card h-fit max-w-6xl p-5 md:p-12" id="form">
            <h2 class="mb-4 text-2xl font-bold dark:text-white">Ready to Get Started?</h2>
            <form id="contactForm" @submit.prevent="handleSubmit">
              <!-- Name -->
              <div class="mb-4">
                <label for="name" class="block text-sm dark:text-gray-100 font-medium">Name</label>
                <input id="name" v-model="form.name" required placeholder="Your name"
                  class="w-full mt-1 border rounded-md p-2" />
              </div>

              <!-- Email -->
              <div class="mb-4">
                <label for="email" class="block text-sm dark:text-gray-100  font-medium">Email</label>
                <input id="email" v-model="form.email" type="email" required placeholder="Your email address"
                  class="w-full mt-1 border rounded-md p-2" />
              </div>

              <!-- Message -->
              <div class="mb-4">
                <label for="message" class="block text-sm dark:text-gray-100  font-medium">Message</label>
                <textarea id="message" v-model="form.message" required placeholder="Your message..." rows="5"
                  class="w-full mt-1 border rounded-md p-2"></textarea>
              </div>

              <!-- Button -->
              <button type="submit" class="w-full bg-blue-700 text-white p-3 rounded-md hover:bg-blue-800">
                Send Message
              </button>
            </form>
          </div>
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

      // Buka Gmail di tab baru
      const newTab = window.open(gmailUrl, "_blank");

      // Jika browser memblokir tab, langsung fallback
      if (!newTab || newTab.closed || typeof newTab.closed === "undefined") {
        window.location.href = mailtoUrl;
      } else {
        // Tunggu 1.5 detik, jika user menutup tab terlalu cepat, fallback
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
