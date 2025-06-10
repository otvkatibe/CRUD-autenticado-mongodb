export class UserValidator {
  static validateRegisterUser(data) {
    const errors = [];
    
    if (!data.name?.trim()) {
      errors.push('Nome é obrigatório.');
    }
    
    if (!data.email?.trim()) {
      errors.push('Email é obrigatório.');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.push('Formato de email inválido.');
      }
    }
    
    if (!data.password) {
      errors.push('Senha é obrigatória.');
    } else if (data.password.length < 8) {
      errors.push('A senha deve ter pelo menos 8 caracteres.');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateLoginUser(data) {
    const errors = [];
    
    if (!data.email?.trim()) {
      errors.push('Email é obrigatório.');
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(data.email)) {
        errors.push('Formato de email inválido.');
      }
    }
    
    if (!data.password) {
      errors.push('Senha é obrigatória.');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}