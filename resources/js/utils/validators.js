import { isEmpty, isEmptyArray, isNullOrUndefined } from './helpers'

// 👉 Required Validator
export const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) return 'Este campo é obrigatório'

  return !!String(value).trim().length || 'Este campo é obrigatório'
}

// 👉 Email Validator
export const emailValidator = (value) => {
  if (isEmpty(value)) return true
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  if (Array.isArray(value)) return value.every((val) => re.test(String(val))) || 'O campo Email deve ser um email válido'

  return re.test(String(value)) || 'O campo Email deve ser um email válido'
}

// 👉 Password Validator
export const passwordValidator = (password) => {
  const regExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%&*()]).{8,}/
  const validPassword = regExp.test(password)

  return validPassword || 'A senha deve conter pelo menos um caractere especial, maiúsculo, minúsculo e um dígito com no mínimo 8 caracteres'
}

// 👉 Confirm Password Validator
export const confirmedValidator = (value, target) => value === target || 'A confirmação do campo Confirmar Senha não corresponde'

// 👉 Between Validator
export const betweenValidator = (value, min, max) => {
  const valueAsNumber = Number(value)

  return (Number(min) <= valueAsNumber && Number(max) >= valueAsNumber) || `Insira um número entre ${min} e ${max}`
}

// 👉 Integer Validator
export const integerValidator = (value) => {
  if (isEmpty(value)) return true
  if (Array.isArray(value)) return value.every((val) => /^-?[0-9]+$/.test(String(val))) || 'Este campo deve ter somente números'

  return /^-?[0-9]+$/.test(String(value)) || 'Este campo deve ter somente números'
}

// 👉 Char Validator
export const isValidLength = (val, min, max) => {
  if (val.length >= min && val.length <= max) {
    return true
  } else {
    return false
  }
}

// 👉 Regex Validator
export const regexValidator = (value, regex) => {
  if (isEmpty(value)) return true
  let regeX = regex
  if (typeof regeX === 'string') regeX = new RegExp(regeX)
  if (Array.isArray(value)) return value.every((val) => regexValidator(val, regeX))

  return regeX.test(String(value)) || 'O formato do campo Regex é inválido'
}

// 👉 Alpha Validator
export const alphaValidator = (value) => {
  if (isEmpty(value)) return true

  return /^[A-Z]*$/i.test(String(value)) || 'Este campo só pode conter caracteres alfabéticos'
}

// 👉 URL Validator
export const urlValidator = (value) => {
  if (isEmpty(value)) return true
  const re = /^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/

  return re.test(String(value)) || 'O URL é inválido'
}

// 👉 Length Validator
export const lengthValidator = (value, length) => {
  if (isEmpty(value)) return true

  return String(value).length === length || `Este campo deve ter pelo menos ${length} caracteres`
}

// 👉 Alpha-dash Validator
export const alphaDashValidator = (value) => {
  if (isEmpty(value)) return true
  const valueAsString = String(value)

  return /^[0-9A-Z_-]*$/i.test(valueAsString) || 'Todos os caracteres não são válidos'
}

// 👉 CNPJ validator
export const cnpjValidator = (value) => {
  if (isEmpty(value)) return true
  const cnpj = value.replace(/[^\d]+/g, '')

  if (cnpj === '') return 'O CNPJ é inválido'

  if (cnpj.length !== 14) return 'O CNPJ é inválido'

  if (/^(\d)\1+$/.test(cnpj)) return 'O CNPJ é inválido'

  let size = cnpj.length - 2
  let numbers = cnpj.substring(0, size)
  const digits = cnpj.substring(size)
  let sum = 0
  let pos = size - 7

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--
    if (pos < 2) pos = 9
  }

  let result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number(digits.charAt(0))) return 'O CNPJ é inválido'

  size = size + 1
  numbers = cnpj.substring(0, size)
  sum = 0
  pos = size - 7

  for (let i = size; i >= 1; i--) {
    sum += numbers.charAt(size - i) * pos--
    if (pos < 2) pos = 9
  }

  result = sum % 11 < 2 ? 0 : 11 - (sum % 11)
  if (result !== Number(digits.charAt(1))) return 'O CNPJ é inválido'

  return true
}

// 👉 CPF validator
export const cpfValidator = (value) => {
  if (isEmpty(value)) return true
  const cpf = value.replace(/[^\d]+/g, '')

  if (cpf === '') return 'O CPF é inválido'

  if (cpf.length !== 11) return 'O CPF é inválido'

  if (/^(\d)\1+$/.test(cpf)) return 'O CPF é inválido'

  let result = true
  ;[9, 10].forEach((j) => {
    let sum = 0
    let r = 0

    for (let i = 1; i <= j; i++) sum = sum + parseInt(cpf.substring(i - 1, i)) * (j + 2 - i)

    r = sum % 11
    r = r < 2 ? 0 : 11 - r
    if (r !== parseInt(cpf.substring(j, j + 1))) result = false
  })

  return result || 'O CPF é inválido'
}

// 👉 Phone validator
export const phoneValidator = (value) => {
  if (isEmpty(value)) return true
  const phone = value.replace(/[^\d]+/g, '')

  return phone.length >= 10 || 'O número de telefone é inválido'
}

// 👉 Date validator
export const dateValidator = (value) => {
  if (isEmpty(value)) return true
  const date = new Date(value)

  return (date instanceof Date && !isNaN(date)) || 'A data é inválida'
}

// 👉 CEP validator
export const cepValidator = (value) => {
  if (isEmpty(value)) return true
  const cep = value.replace(/[^\d]+/g, '')

  return cep.length === 8 || 'O CEP é inválido'
}
