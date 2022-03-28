// Validate phone number
const validatePhoneNumber = (phoneNumber: string): boolean => {
  const regexpPhone = /^\+?[1-9]\d{1,14}$/;
  return regexpPhone.test(phoneNumber);
};

export default validatePhoneNumber;
