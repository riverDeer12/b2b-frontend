import {
    FormControl,
    ValidatorFn
  } from '@angular/forms';

export const websiteValidator: ValidatorFn = (control: FormControl) => {
    let  url: URL;

    if (control.value === ''){
      return null;
    }

    try {
      url = new URL(control.value);
    } catch (error) {
      return {
          website: true
      };
    }

    if (url.protocol === 'http:' || url.protocol === 'https:'){
        return null;
    } else {
        return {
            website: true
        };
    }

  };
