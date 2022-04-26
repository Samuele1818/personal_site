export const isDocumentDefined: boolean =
 typeof document !== 'undefined'

export const timer = (ms: number) =>
 new Promise((res) => setTimeout(res, ms))

export const isEmptyString: (
 string: string
) => boolean = (string: string) => string === ''

// Check if email is correctly spelled and respect the standard criteria
export const isValidEmail: (email: string) => {
 text: string
 error: boolean
} = (email: string) => {
 if (
  isEmptyString(email) ||
  !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
   email
  )
 )
  return {
   error: true,
   text: 'emailForm:errors.emailInvalid',
  }
 return {
  error: false,
  text: '',
 }
}

// Check if username respect the specific criteria
export const isValidUsername: (
 username: string
) => {
 error: boolean
 text: string
} = (username: string) => {
 if (isEmptyString(username))
  return {
   error: false,
   text: 'passwordForm:errors.usernameLong',
  }
 if (!/^[a-zA-Z0-9_-]+$/.test(username))
  //if contains invalid characters
  return {
   error: true,
   text:
    'passwordForm:errors.usernameInvalidChars',
  }
 if (!/^\w{4,14}$/.test(username))
  // if username has invalid long
  return {
   error: true,
   text: 'passwordForm:errors.usernameLong',
  }
 return {
  error: false,
  text: 'passwordForm:hint.username',
 }
}

// Check if the message is valid
export const isValidMessage = (
 message: string
) => {
 if (!/^\w{20,500}$/.test(message))
  return {
   error: true,
   text: 'Message must be long',
  }
 return {
  error: false,
  text: '',
 }
}
