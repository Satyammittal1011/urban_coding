function validateEmail(email) {
    // regex pattern to match email
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

module.exports = {validateEmail}  