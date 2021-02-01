export const mapHttpErrorCodeToMessage = (errorCode: number) => {
  switch (errorCode) {
    case 400:
      return "There was something wrong with the way your request was formatted to the server. Please try again."
    case 401:
      return "There was a problem with the login credentials you provided. Please try again."
    case 403:
      // - TODO: -> Come up with a better message for a 403 response than this.
      return "There was a problem with authorizing this request to the server."
    default: return "Unknown error occured"
  }
}
