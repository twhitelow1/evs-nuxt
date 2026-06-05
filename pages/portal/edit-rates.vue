<template>
  <div>
    <h1>Edit Rates</h1>
    <p class="subtitle">Changes save to the live site immediately.</p>

    <form @submit.prevent="handleSave">

      <!-- Babysitting -->
      <section class="rate-section">
        <h2>Babysitting Rates <span class="per-hour">/ Hour</span></h2>
        <div class="rate-grid">
          <div class="rate-field">
            <label>1 Child</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.child1" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>2 Children</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.child2" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>3 Children</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.child3" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>4 Children</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.child4" type="number" min="0" step="1" required />
            </div>
          </div>
        </div>

        <h2 class="mt">Booking Fees &amp; Terms</h2>
        <div class="rate-grid">
          <div class="rate-field">
            <label>Booking Fee (per day)</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.bookingFeePerDay" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>Minimum Booking (hours)</label>
            <div class="input-wrap"><span>#</span>
              <input v-model.number="form.babysitting.minimumHours" type="number" min="1" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>Last Minute Fee (&lt;24hrs)</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.babysitting.lastMinuteFee" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>Credit Card Fee</label>
            <div class="input-wrap"><span>%</span>
              <input v-model.number="form.babysitting.creditCardFeePercent" type="number" min="0" step="0.1" required />
            </div>
          </div>
        </div>
      </section>

      <!-- Pet Sitting -->
      <section class="rate-section">
        <h2>Pet Sitting Rates</h2>
        <div class="rate-grid">
          <div class="rate-field">
            <label>Hourly Rate</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.petSitting.hourlyRate" type="number" min="0" step="1" required />
            </div>
          </div>
          <div class="rate-field">
            <label>Overnight Rate</label>
            <div class="input-wrap"><span>$</span>
              <input v-model.number="form.petSitting.overnightRate" type="number" min="0" step="1" required />
            </div>
          </div>
        </div>
      </section>

      <div class="form-footer">
        <p v-if="saved" class="success-msg">✓ Rates saved successfully!</p>
        <p v-if="error" class="error-msg">{{ error }}</p>
        <NuxtLink v-if="saved" to="/" class="view-site-btn">← View Site</NuxtLink>
        <button type="submit" class="save-btn" :disabled="saving">
          {{ saving ? 'Saving...' : 'Save Rates' }}
        </button>
      </div>

    </form>
  </div>
</template>

<script setup lang="ts">
import { DEFAULT_RATES, type RatesData } from '~/composables/useRates'

definePageMeta({ layout: 'portal', middleware: 'portal-auth' })

const { rates, saving, fetchRates, saveRates } = useRates()
const saved = ref(false)

const form = ref<RatesData>(JSON.parse(JSON.stringify(rates.value)))

onMounted(() => {
  fetchRates()
  form.value = JSON.parse(JSON.stringify(rates.value))
})

const handleSave = () => {
  saveRates(form.value)
  saved.value = true
  setTimeout(() => { saved.value = false }, 3000)
}
</script>

<style scoped>
h1 { font-size: 1.8rem; color: #333; margin-bottom: 6px; }
.subtitle { color: #888; margin-bottom: 32px; }

.rate-section {
  background: white;
  border-radius: 12px;
  padding: 28px;
  margin-bottom: 24px;
  box-shadow: 0 2px 12px rgba(0,0,0,0.07);
}

h2 {
  font-size: 1.1rem;
  color: #444;
  margin-bottom: 18px;
  padding-bottom: 10px;
  border-bottom: 1px solid #f0f0f0;
}

h2.mt { margin-top: 28px; }

.per-hour {
  font-size: 0.85rem;
  color: #aaa;
  font-weight: 400;
}

.rate-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 20px;
}

.rate-field label {
  display: block;
  font-size: 0.85rem;
  color: #666;
  margin-bottom: 6px;
  font-weight: 500;
}

.input-wrap {
  display: flex;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 6px;
  overflow: hidden;
}

.input-wrap span {
  padding: 8px 10px;
  background: #f8f8f8;
  color: #888;
  font-size: 0.9rem;
  border-right: 1px solid #ddd;
}

.input-wrap input {
  border: none;
  outline: none;
  padding: 8px 12px;
  font-size: 1rem;
  width: 100%;
}

.form-footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 16px;
  margin-top: 8px;
}

.save-btn {
  background: #66bfc7;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 12px 32px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.save-btn:hover:not(:disabled) { background: #4aa8b0; }
.save-btn:disabled { opacity: 0.6; cursor: not-allowed; }

.view-site-btn {
  background: white;
  border: 1px solid #66bfc7;
  border-radius: 8px;
  padding: 12px 24px;
  font-size: 1rem;
  font-weight: 600;
  color: #66bfc7;
  text-decoration: none;
  transition: background 0.2s;
}
.view-site-btn:hover { background: #f0fafb; }

.success-msg { color: #43a047; font-weight: 500; }
.error-msg { color: #e53935; }
.loading { color: #888; }
</style>
