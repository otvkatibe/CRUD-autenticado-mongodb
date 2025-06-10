export class ResponseHandler {
  static success(res, data, message = 'Operação realizada com sucesso', statusCode = 200) {
    return res.status(statusCode).json({
      success: true,
      message,
      data
    });
  }

  static error(res, message = 'Erro interno do servidor', statusCode = 500, errors = []) {
    return res.status(statusCode).json({
      success: false,
      message,
      errors
    });
  }

  static notFound(res, message = 'Recurso não encontrado') {
    return this.error(res, message, 404);
  }

  static badRequest(res, message = 'Dados inválidos', errors = []) {
    return this.error(res, message, 400, errors);
  }

  static unauthorized(res, message = 'Não autorizado') {
    return this.error(res, message, 401);
  }

  static created(res, data, message = 'Recurso criado com sucesso') {
    return this.success(res, data, message, 201);
  }
}