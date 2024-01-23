<template>
  <div>
    <nav class="w-full flex items-center justify-end shadow px-8 py-3">
      <a
        class="px-4 py-2 bg-fuchsia-400 rounded-lg shadow-md text-sm font-display font-semibold text-white hover:bg-fuchsia-500"
        href="#contact"
        >Book a Consult</a
      >
    </nav>
  </div>
  <div class="max-w-4xl mx-auto py-20 px-6">
    <div class="flex flex-col md:flex-row gap-12 mb-12">
      <div class="flex flex-col items-center">
        <div class="w-32 md:h-64 h-32 md:w-64 shrink-0">
          <img
            src="/steph_headshot.jpg"
            class="rounded-full w-full h-full object-cover"
            alt=""
          />
        </div>
      </div>
      <div class="max-w-xl">
        <p>
          <span class="font-display text-5xl font-black"
            >Hello! I am Steph,</span
          ><br />
          <span>and I am so pleased you are here.</span>
        </p>
        <p class="my-6 text-xl">
          I am a
          <span
            class="underline decoration-fuchsia-400 underline-offset-2 decoration-wavy"
            >Registered Dietician</span
          >
          with more than 10 years of experience of working with people to help
          them improve their health.
        </p>
        <p class="font-thin text-lg">
          My ability to really listen to someone, empathise with their situation
          and make them feel validated and heard, has served me very well in my
          practice. When someone feels understood and safe enough to be honest
          and accountable, then real progress is made.
        </p>
      </div>
    </div>
    <hr class="border-b border-fuchsia-300 max-w-xl mx-auto" />

    <div class="mt-20">
      <p
        class="text-xl font-semibold underline underline-offset-2 decoration-fuchsia-400 mb-6 decoration-wavy"
      >
        How I Can Help You
      </p>

      <div class="max-w-2xl">
        <p class="my-4">
          One of my strengths is being able to take the science behind nutrition
          and wellness and help someone to translate it into practical and
          sustainable habits that allow them to make life-long positive changes.
        </p>
        <p class="my-4">
          A balanced lifestyle involves more than just consuming a nutritious
          diet. While nutrition plays a crucial role in promoting overall
          health, it is just one piece of the intricate puzzle that defines our
          well-being. It is vital to also consider the roles of physical
          activity, mental well-being, stress management and healthy sleeping
          habits. It is of utmost importance to me to address all of these
          issues when working with someone, and I highly value the importance of
          referring someone to a fellow health care professional should the need
          arise.
        </p>
      </div>

      <div class="">
        <p class="font-semibold underline">Areas I can assist with:</p>
        <p></p>
        <ul class="list-disc list-inside">
          <li>Weight management</li>
          <li>
            Chronic illness (Type 2 Diabetes, hypertension, cardiovascular
            disease, kidney, liver disease etc.)
          </li>
          <li>Type 1 Diabetes</li>
          <li>
            Gut disorders (irritable bowel syndrome, Chrones disease,
            diverticulosis/diverticulitis etc.)
          </li>
          <li>
            Sports nutrition (from professional athletes to weekend warriors)
          </li>
          <li>Eating Disorder management</li>
        </ul>
      </div>
    </div>
    <ul class="mt-12 border-b border-fuchsia-300 max-w-xl mx-auto"></ul>

    <div class="my-20 scroll-mt-12" id="contact">
      <p
        class="text-xl font-semibold underline underline-offset-2 decoration-wavy decoration-fuchsia-400 mb-6"
      >
        Book a Virtual Consult
      </p>

      <p class="my-6 max-w-2xl">
        Virtual consults are private, online video calls through Zoom or Google
        Meet.
      </p>

      <div class="flex flex-col md:flex-row gap-12">
        <ConsultCard :consult="initialConsult" />
        <ConsultCard :consult="followUp" />
      </div>

      <div class="my-6">
        <p class="my-4 max-w-2xl">
          Send me a message to book your consult. Let me know what days and
          times suit you, and I will get back to you to arrange our consult.
        </p>
        <div class="my-8 flex justify-center md:justify-start">
          <a
            href="mailto:stephjoyner18@gmail.com"
            class="px-4 py-2 bg-fuchsia-400 rounded-lg shadow-md text-sm font-display font-semibold text-white hover:bg-fuchsia-500 inline-flex items-center gap-4"
          >
            <span class="">Get in Touch</span>
            <div class="border-r-2 border-fuchsia-300 h-4"></div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2.5"
              stroke="currentColor"
              class="w-4 h-4 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
    <hr class="border-b-.5 border-fuchsia-300 max-w-xl mx-auto" />

    <div class="mt-20">
      <p
        class="text-xl font-semibold underline underline-offset-2 decoration-fuchsia-400 mb-6 decoration-wavy"
      >
        A Little More About Me
      </p>
      <p class="my-4 max-w-2xl">
        I love running while listening to my latest True Crime podcast obsession
        (yes, I am one of those weirdos!), tinkering in the kitchen and diving
        into a gripping book (when my children allow me the time).
      </p>
    </div>
  </div>
  <footer class="h-4 bg-fuchsia-500">
    <span></span>
  </footer>
</template>

<script lang="ts" setup>
import type { Consultation } from "~/stuff";

useSeoMeta({
  title: "Steph | Registered Dietitian",
  ogTitle: "Steph | Registered Dietitian",
  description:
    "I am a Registered Dietician with more than 10 years of experience of working with people to help them improve their health.",
  ogDescription:
    "I am a Registered Dietician with more than 10 years of experience of working with people to help them improve their health.",
  ogImage: "https://dietitiansteph.co.uk",
  twitterCard: "summary_large_image",
});

const initialConsult: Consultation = {
  name: "Initial Consult",
  description:
    "One hour online video session and will involve me asking you for a lot of information in order to get to know you and your circumstances; and how I can best help you.",
  price: 90,
};
const followUp: Consultation = {
  name: "Follow Up Consult",
  description:
    "Typically a 30 to 45 minute online video session where we assess and discuss your progress.",
  price: 50,
};
</script>
