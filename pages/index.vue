<template>
  <div class="max-w-6xl mx-auto py-20">
    <div class="flex gap-12 mb-12">
      <div class="flex flex-col items-center">
        <img
          src="/steph_profile.png"
          class="h-64 w-64 object-cover rounded-full"
          alt=""
        />
      </div>
      <div class="max-w-xl">
        <p>
          <span class="text-5xl font-bold">Hello! I am Steph,</span><br />
          <span>and I am so pleased you are here.</span>
        </p>
        <p class="my-6 text-xl">
          I am a Registered Dietician with more than 10 years of experience of
          working with people to help them improve their health.
        </p>
        <p>
          My ability to really listen to someone, empathise with their situation
          and make them feel validated and heard, has served me very well in my
          practice. When someone feels understood and safe enough to be honest
          and accountable, then real progress is made.
        </p>
      </div>
    </div>

    <div class="my-12">
      <p class="text-xl font-semibold mb-6">How I Can Help You</p>

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

      <div>
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

    <div class="my-12">
      <p
        class="text-xl font-semibold underline underline-offset-2 decoration-fuchsia-400 mb-6"
      >
        Book a Virtual Consult
      </p>

      <p class="my-6 max-w-2xl">
        Virtual consults are private, online meetings through Zoom or Google
        Meet.
      </p>

      <div class="flex gap-12">
        <ConsultCard :consult="initialConsult" />
        <ConsultCard :consult="followUp" />
      </div>

      <div class="my-6">
        <p class="my-4 max-w-2xl">
          Get in touch to book your consult. Let me know what days and times
          suit you, and I will get back to you to arrange our consult.
        </p>
        <a
          href=""
          class="bg-fuchsia-500 px-4 py-1 rounded-md shadow text-white inline-block"
          >Get in Touch</a
        >
      </div>
    </div>

    <div class="my-12">
      <p
        class="text-xl font-semibold underline underline-offset-2 decoration-fuchsia-400 mb-6"
      >
        A Little More About Me
      </p>
      <p class="my-4 max-w-2xl">
        I love running while listening to my latest True Crime podcast obsession
        (yes, I am one of those weirdos!), tinkering in the kitchen and diving
        into a gripping book (when my children allow me the time).
      </p>
    </div>

    <div>
      <p>Looking at the whole picture</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { Consultation } from "~/stuff";

const initialConsult: Consultation = {
  name: "Initial Consult",
  description:
    "One hour online video session and will involve me asking you for a lot of information in order to get to know you and your circumstances; and how I can best help you.",
  price: 75,
};
const followUp: Consultation = {
  name: "Follow Up Consult",
  description:
    "Typically a 30 to 45 minute online video session where we assess and discuss your progress.",
  price: 35,
};
</script>
