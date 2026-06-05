import { doc, getDoc, setDoc } from 'firebase/firestore'

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

export const useRates = () => {
  const { $db } = useNuxtApp()
  const rates = useState<RatesData>('rates', () => DEFAULT_RATES)
  const loading = ref(false)
  const saving = ref(false)
  const error = ref('')

  const fetchRates = async () => {
    loading.value = true
    try {
      const snap = await getDoc(doc($db, 'content', 'rates'))
      if (snap.exists()) {
        rates.value = snap.data() as RatesData
      }
    } catch (e) {
      // Firestore not yet enabled or offline — fall back to defaults silently
      console.warn('Could not load rates from Firestore, using defaults.')
    } finally {
      loading.value = false
    }
  }

  const saveRates = async (data: RatesData) => {
    saving.value = true
    error.value = ''
    try {
      await setDoc(doc($db, 'content', 'rates'), data)
      rates.value = data
    } catch (e: any) {
      error.value = 'Failed to save. Please try again.'
      throw e
    } finally {
      saving.value = false
    }
  }

  return { rates, loading, saving, error, fetchRates, saveRates }
}
