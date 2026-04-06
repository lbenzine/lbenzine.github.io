<template>
  <div class="page">
    <!-- Print Button (web only) -->
    <div class="print-bar no-print">
      <button @click="print">[ Print / Save PDF ]</button>
    </div>

    <!-- Resume -->
    <div class="resume">
      <!-- Header -->
      <header class="resume-header">
        <h1>{{ resume.name }}</h1>
        <div class="contacts">
          <span>{{ resume.location }}</span>
          <span>·</span>
          <span>{{ resume.phone }}</span>
          <span>·</span>
          <a :href="`mailto:${resume.email}`">{{ resume.email }}</a>
          <span>·</span>
          <a :href="resume.linkedin" target="_blank">LinkedIn</a>
        </div>
      </header>

      <!-- Summary -->
      <section>
        <h2>Summary</h2>
        <p>{{ summary }}</p>
      </section>

      <!-- Experience -->
      <section>
        <h2>Work Experience</h2>
        <div v-for="job in resume.experience" :key="job.company" class="entry">
          <div class="entry-header">
            <span class="entry-title">{{ job.position }} | {{ job.company }}</span>
            <span class="entry-date">{{ job.start }} – {{ job.end }}</span>
          </div>
          <div class="entry-sub">{{ job.location }}</div>
          <div v-if="job.roles" class="entry-roles">{{ job.roles.join(' · ') }}</div>
          <ul class="bullets">
            <li v-for="bullet in job.bullets" :key="bullet">{{ bullet }}</li>
          </ul>
        </div>
      </section>

      <!-- Education -->
      <section>
        <h2>Education</h2>
        <div v-for="edu in resume.education" :key="edu.institution" class="entry">
          <div class="entry-header">
            <span class="entry-title">{{ edu.degree }}</span>
            <span class="entry-date">{{ edu.start }} – {{ edu.end }}</span>
          </div>
          <div class="entry-sub">{{ edu.institution }}</div>
        </div>
      </section>

      <!-- Skills -->
      <section>
        <h2>Additional Information</h2>
        <div v-for="group in resume.skills" :key="group.category" class="skill-row">
          <span class="skill-category">{{ group.category }}:</span>
          <span class="skill-items">{{ group.items.join(', ') }}</span>
        </div>
      </section>

      <!-- Certificates -->
      <section>
        <h2>Certificates</h2>
        <div v-for="cert in resume.certificates" :key="cert.name" class="entry">
          <div class="entry-header">
            <div class="entry-title-group">
              <img v-if="cert.badge" :src="cert.badge" :alt="cert.name" class="cert-badge" />
              <div v-else class="cert-badge-placeholder"></div>
              <a v-if="cert.url" :href="cert.url" target="_blank" class="entry-title">{{
                cert.name
              }}</a>
              <span v-else class="entry-title">{{ cert.name }}</span>
            </div>
            <span class="entry-date">{{ cert.date }}</span>
          </div>
        </div>
      </section>
      <div class="last-updated">Last updated: {{ buildDate }}</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { resume } from './data/resume.js'

function print() {
  window.print()
}

const totalYears = computed(() => {
  let totalMonths = 0

  for (const job of resume.experience) {
    if (!job.startISO) continue
    const start = new Date(job.startISO)
    const end = job.endISO === 'present' ? new Date() : new Date(job.endISO)
    let months =
      (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth())
    if (end.getDate() >= start.getDate()) months += 1
    totalMonths += months
  }

  const years = Math.floor(totalMonths / 12)
  return `${years}+ years`
})

const summary = computed(() => resume.summary.replace('{years}', totalYears.value))

const buildDate = new Date(__BUILD_DATE__).toLocaleString('th-TH', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  hour: '2-digit',
  minute: '2-digit',
})
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  background: #f0f0f0;
  color: #222;
}

.print-bar {
  text-align: center;
  padding: 12px;
  background: #222;
}

.print-bar button {
  background: none;
  border: 1px solid #fff;
  color: #fff;
  padding: 6px 16px;
  cursor: pointer;
  font-size: 14px;
  letter-spacing: 1px;
}

.print-bar button:hover {
  background: #fff;
  color: #222;
}

.page {
  min-height: 100vh;
}

.resume {
  max-width: 780px;
  margin: 32px auto;
  background: #fff;
  padding: 48px 56px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.1);
}

.resume-header {
  text-align: center;
  margin-bottom: 32px;
  padding-bottom: 24px;
  border-bottom: 2px solid #222;
}

.resume-header h1 {
  font-size: 2rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 8px;
}

.contacts {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 13px;
  color: #444;
}

.contacts a {
  color: #444;
}

section {
  margin-bottom: 28px;
}

section h2 {
  font-size: 0.75rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: #888;
  border-bottom: 1px solid #ddd;
  padding-bottom: 4px;
  margin-bottom: 14px;
}

.entry {
  margin-bottom: 14px;
}

.entry-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
}

.entry-title-group {
  display: flex;
  align-items: center;
  gap: 8px;
}

.cert-badge {
  height: 36px;
  width: 36px;
  object-fit: contain;
  flex-shrink: 0;
}

.cert-badge-placeholder {
  height: 36px;
  width: 36px;
  flex-shrink: 0;
}

.entry-title {
  font-weight: bold;
  color: #222;
  text-decoration: none;
  cursor: default;
}

a.entry-title {
  cursor: pointer;
}

a.entry-title:hover {
  text-decoration: underline;
}

.entry-date {
  font-size: 12px;
  color: #888;
  white-space: nowrap;
  flex-shrink: 0;
}

.entry-sub {
  font-size: 13px;
  color: #555;
  margin-top: 2px;
}

.entry-roles {
  font-size: 12px;
  color: #888;
  margin-top: 2px;
}

.bullets {
  margin-top: 6px;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.bullets li {
  font-size: 13px;
  color: #333;
  line-height: 1.5;
}

.skill-row {
  font-size: 13px;
  margin-bottom: 5px;
  line-height: 1.5;
  display: grid;
  grid-template-columns: 180px 1fr;
}

.skill-category {
  font-weight: bold;
  color: #222;
}

.skill-items {
  color: #444;
}

.tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tag {
  background: #f4f4f4;
  border: 1px solid #ddd;
  padding: 3px 10px;
  font-size: 12px;
  border-radius: 2px;
}

.last-updated {
  text-align: center;
  font-size: 11px;
  color: #bbb;
  margin-top: 24px;
}

/* Mobile styles */
@media (max-width: 600px) {
  .resume {
    margin: 0;
    padding: 24px 20px;
    box-shadow: none;
  }

  .resume-header h1 {
    font-size: 1.4rem;
  }

  .entry-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 2px;
  }

  .skill-row {
    grid-template-columns: 1fr;
  }

  .skill-category {
    margin-bottom: 2px;
  }
}

/* Print styles */
@media print {
  .no-print {
    display: none;
  }

  body {
    background: #fff;
  }

  .resume {
    margin: 0;
    padding: 24px 32px;
    box-shadow: none;
    max-width: 100%;
  }

  /* Reset mobile overrides when printing */
  .resume-header h1 {
    font-size: 2rem;
  }

  .entry-header {
    flex-direction: row;
    align-items: center;
    gap: 8px;
  }

  .skill-row {
    grid-template-columns: 180px 1fr;
  }

  .skill-category {
    margin-bottom: 0;
  }
}
</style>
