const debounce = (cb: Function, delay = 250) => {
  /* 
    This function adds a delay on a specified action/callback.
      Args:
          cb (function): callback to delay
          delay (int): delay to apply - defaults to 250ms
      Returns:
          Delayed function in a timeout
   */
    let timeout: ReturnType<typeof setTimeout>

    return (...args: Parameters<() => void>) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            cb(...args)
        }, delay)
    }
}

export default debounce