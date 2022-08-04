type ValidatorType = (value: string) => string | undefined;

export const required: ValidatorType = value => value ? undefined : 'This field is required';

export const maxLength = (max: number): ValidatorType => value => value && value.length > max ? `Must be ${max} characters or less` : undefined;

export const validURL: ValidatorType = value => {
    if (value) {
        return value.match(/[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/ig) ? undefined : 'Please enter a valid URL';
    }
}
