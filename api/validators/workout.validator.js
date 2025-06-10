export class WorkoutValidator {
  static validateCreateWorkout(data) {
    const errors = [];
    
    if (!data.title?.trim()) {
      errors.push('Título é obrigatório.');
    }
    
    if (!data.description?.trim()) {
      errors.push('Descrição é obrigatória.');
    }
    
    if (!data.duration || data.duration <= 0) {
      errors.push('Duração deve ser um número positivo.');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }

  static validateUpdateWorkout(data) {
    const errors = [];
    
    if (data.title !== undefined && !data.title?.trim()) {
      errors.push('Título não pode estar vazio.');
    }
    
    if (data.description !== undefined && !data.description?.trim()) {
      errors.push('Descrição não pode estar vazia.');
    }
    
    if (data.duration !== undefined && data.duration <= 0) {
      errors.push('Duração deve ser um número positivo.');
    }
    
    return {
      isValid: errors.length === 0,
      errors
    };
  }
}