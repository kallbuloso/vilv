// 👉 IsEmpty
export const isEmpty = (value) => {
  if (value === null || value === undefined || value === '') return true

  return !!(Array.isArray(value) && value.length === 0)
}

export const isNotEmpty = (value) => {
  return !isEmpty(value)
}

// 👉 IsNullOrUndefined
export const isNullOrUndefined = (value) => {
  return value === null || value === undefined
}

// 👉 IsEmptyArray
export const isEmptyArray = (arr) => {
  return Array.isArray(arr) && arr.length === 0
}

export const isArrayOfObjects = (arr) => {
  return Array.isArray(arr) && arr.length > 0 && arr.every((item) => isObject(item))
}

// 👉 IsObject
export const isObject = (obj) => obj !== null && !!obj && typeof obj === 'object' && !Array.isArray(obj)

// 👉 IsToday
export const isToday = (date) => {
  const today = new Date()

  return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear()
}

// 👉 Sleep
// export const sleep = (seconds) => {
//   return new Promise((res) => setTimeout(res, seconds * 1000))
// }

export const onLoading = () => {
  const state = ref(false)
  router.on('start', () => (state.value = true))
  router.on('finish', () => (state.value = false))
  return state.value
}
