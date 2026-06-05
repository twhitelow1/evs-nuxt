import { doc, getDoc, setDoc, getFirestore } from 'firebase/firestore'
import { getApps } from 'firebase/app'

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

const getDb = () => getFirestore(getApps()[0])

export const useRates = () => {
  const rates = useState<RatesData>('rates', () => JSON.parse(JSON.stringify(DEFAULT_RATES)))
  const saving = ref(false)

  const fetchRates = async () => {
    if (import.meta.server) return
    try {
      const snap = await getDoc(doc(getDb(), 'content', 'rates'))
      if (snap.exists()) rates.value = snap.data() as RatesData
    } catch {
      // Fall back to defaults silently
    }
  }

  const saveRates = (data: RatesData) => {
    const { success, error } = useToast()
    rates.value = JSON.parse(JSON.stringify(data))
    if (import.meta.client) {
      window.dispatchEvent(new CustomEvent('evs:rates-updated'))
      setDoc(doc(getDb(), 'content', 'rates'), data)
        .then(() => success('Rates saved!'))
        .catch((e) => error('Rates saved locally. Changes will sync when connection is restored.', e?.message))
    }
  }

  return { rates, saving, fetchRates, saveRates }
}
