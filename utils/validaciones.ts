export const isValidEmail = (correo: string): boolean => {
  
    const match = String(correo)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
  
      return !!match;
  };
  
  export const isEmail = (correo: string): string | undefined => {
    return isValidEmail(correo) 
      ? undefined
      : 'El correo no es válido';
  }