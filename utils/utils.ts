export const isDocumentDefined: boolean =
 typeof document !== 'undefined'

export const timer = (ms) =>
  new Promise((res) =>
    setTimeout(res, ms)
  )

export const isEmptyString: (string: string) => boolean = (string: string) => string === ''

export const isValidEmail: (email: string) => ({ errorText: string; error: boolean }) = (email: string) => {
  if (
    isEmptyString(email) ||
    !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
    )
  )
    return {
      error: true,
      errorText: 'emailForm:errors.emailInvalid',
    }
  return {
    error: false,
    errorText: '',
  }
}

export const isValidUsername: (username: string) => {
  error: boolean
  errorText: string
} = (username: string) => {
  if (isEmptyString(username))
    return {
      error: false,
      errorText: 'passwordForm:errors.usernameLong',
    }
  if (!/^[a-zA-Z0-9_-]+$/.test(username))
    //if contains invalid characters
    return {
      error: true,
      errorText: 'passwordForm:errors.usernameInvalidChars',
    }
  if (!/^\w{4,14}$/.test(username))
    // if username has invalid long
    return {
      error: true,
      errorText: 'passwordForm:errors.usernameLong',
    }
  return {
    error: false,
    errorText: 'passwordForm:hint.username',
  }
}

export const isValidMessage = (message: string) => {
  if (!/^\w{20,500}$/.test(message))
    return {
      error: true,
      errorText: 'Message must be long',
    }
  return {
    error: false,
    errorText: '',
  }
}
