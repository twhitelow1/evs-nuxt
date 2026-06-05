// Local store for rates — persists across navigation via localStorage.
// TODO: swap load/save for Firestore reads/writes once Firebase is enabled.

export interface RatesData {
  babysitting: {
    child1: number
    child2: number
    child3: number
    child4: number
    bookingFeePerDay: number
    minimumHours: number
    lastMinuteFee: number
    creditCardFeePercent: number
  }
  petSitting: {
    hourlyRate: number
    overnightRate: number
  }
}

export const DEFAULT_RATES: RatesData = {
  babysitting: {
    child1: 45,
    child2: 48,
    child3: 51,
    child4: 54,
    bookingFeePerDay: 15,
    minimumHours: 4,
    lastMinuteFee: 20,
    creditCardFeePercent: 3,
  },
  petSitting: {
    hourlyRate: 40,
    overnightRate: 145,
  },
}

const STORAGE_KEY = 'evs_rates'

const loadFromStorage = (): RatesData => {
  if (import.meta.server) return JSON.parse(JSON.stringify(DEFAULT_RATES))
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : JSON.parse(JSON.stringify(DEFAULT_RATES))
  } catch {
    return JSON.parse(JSON.stringify(DEFAULT_RATES))
  }
}

export const useRates = () => {
  const rates = useState<RatesData>('rates', () => loadFromStorage())
  const saving = ref(false)

  const fetchRates = () => {
    if (import.meta.client) {
      rates.value = loadFromStorage()
    }
    // TODO: replace with Firestore getDoc when Firebase is enabled
  }

  const saveRates = (data: RatesData) => {
    saving.value = true
    rates.value = JSON.parse(JSON.stringify(data))
    if (import.meta.client) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
      window.dispatchEvent(new CustomEvent('evs:rates-updated'))
    }
    saving.value = false
    // TODO: replace with Firestore setDoc when Firebase is enabled
  }

  return { rates, saving, fetchRates, saveRates }
}
