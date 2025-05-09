#!/bin/bash

# Deletar um treino existente com uma requisição bem-sucedida
echo "Deletando um treino existente com token válido..."
curl -X DELETE http://localhost:3000/workouts/<WORKOUT_ID> \
-H "Authorization: Bearer <VALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino sem token
echo "Tentativa de deletar um treino sem token..."
curl -X DELETE http://localhost:3000/workouts/<WORKOUT_ID> \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com token inválido
echo "Tentativa de deletar um treino com token inválido..."
curl -X DELETE http://localhost:3000/workouts/<WORKOUT_ID> \
-H "Authorization: Bearer <INVALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino de outro usuário
echo "Tentativa de deletar um treino de outro usuário..."
curl -X DELETE http://localhost:3000/workouts/<OTHER_USER_WORKOUT_ID> \
-H "Authorization: Bearer <VALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com ID mal formatado
echo "Tentativa de deletar um treino com ID mal formatado..."
curl -X DELETE http://localhost:3000/workouts/INVALID_ID \
-H "Authorization: Bearer <VALID_TOKEN>" \
-H "Content-Type: application/json"