export const phonePreg = (phone: string) => {
    const pattern = /^((\+91|91|0)[\- ]{0,1})?[456789]\d{9}$/;
    return pattern.test(phone);
};

export const validateLocationCoordinates = (location:string) => {
    const pattern = /^-?([1-8]?[1-9]|[1-9]0)\.{1}\d{1,6}/;
    return pattern.test(location);
};

export const validateEmailAddress = (email: string) => {
    const pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(email);
};