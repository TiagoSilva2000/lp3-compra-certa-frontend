export const validateEmail = (email: string): boolean => {
  const re = /\S+@\S+\.\S+/
  return re.test(email)
}
export const validateTelephone = (phoneNumber: string): boolean => {
  const re = /^\(?( ?\d{2}|0\d{2}) ?\)? ?(\d{5}|\d{4})[ .-]?(\d{4})$/
  return re.test(phoneNumber)
}

export const validateCpf = (cpf: string): boolean => {
  const re = /[0-9]{3}[.]?[0-9]{3}[.]?[0-9]{3}[-]?[0-9]{2}/
  return re.test(cpf)
}

export const validateJustLetters = (name: string): boolean => {
  const re = /^[a-zA-z ]+$/
  return re.test(name)
}

export const validateCep = (cep: string): boolean => {
  const re = /^\d{8}$/
  return re.test(cep)
}

export const validateCvv = (cvv: string): boolean => {
  const re = /^\d{3}$/
  return re.test(cvv)
}

export const validateJustNumbers = (number: string): boolean => {
  const re = /^\d+$/
  return re.test(number)
}

export const validateExpiringDate = (expiringDate: string): boolean => {
  const re = /^[01]\d\/\d{4}$/
  return re.test(expiringDate)
}

export const isEmpty = (object: any): boolean => {
  // REFATORAR ISSO
  const emptyFields = Object.keys(object).filter(value => {
    return value.length === 0
  })

  return emptyFields.length < 1
}
