#!/bin/bash

# Deletar um treino existente com uma requisição bem-sucedida
echo "Deletando um treino existente com token válido.../n"
curl -X DELETE 0/workouts/ \
-H "Authorization: Bearer 0" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino sem token
echo "Tentativa de deletar um treino sem token.../n"
curl -X DELETE 0/workouts/681e6716e2f752c8d5cdaacc \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com token inválido
echo "Tentativa de deletar um treino com token inválido.../n"
curl -X DELETE 0/workouts/681e6716e2f752c8d5cdaacc \
-H "Authorization: Bearer <INVALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino de outro usuário
echo "Tentativa de deletar um treino de outro usuário.../n"
curl -X DELETE 0/workouts/<OTHER_USER_WORKOUT_ID> \
-H "Authorization: Bearer 0" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com ID mal formatado
echo "Tentativa de deletar um treino com ID mal formatado.../n"
curl -X DELETE 0/INVALID_ID \
-H "Authorization: Bearer 0" \
-H "Content-Type: application/json"