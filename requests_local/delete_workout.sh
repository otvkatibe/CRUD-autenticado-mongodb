#!/bin/bash

# Deletar um treino existente com uma requisição bem-sucedida
echo "Deletando um treino existente com token válido.../n"
curl -X DELETE http://localhost:3000/workouts/682124ecd1879f659dd15945 \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEyNGIwZDE4NzlmNjU5ZGQxNTk0MSIsImlhdCI6MTc0NzAwMjU0OX0.L25iyE15iQ9OCh_e3NeLMK6G6O2uwaZPTbbe_00cih4" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino sem token
echo "Tentativa de deletar um treino sem token.../n"
curl -X DELETE http://localhost:3000/workouts/ \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com token inválido
echo "Tentativa de deletar um treino com token inválido.../n"
curl -X DELETE http://localhost:3000/workouts/ \
-H "Authorization: Bearer <INVALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino de outro usuário
echo "Tentativa de deletar um treino de outro usuário.../n"
curl -X DELETE http://localhost:3000/workouts/ \
-H "Authorization: Bearer " \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com ID mal formatado
echo "Tentativa de deletar um treino com ID mal formatado.../n"
curl -X DELETE http://localhost:3000/INVALID_ID \
-H "Authorization: Bearer " \
-H "Content-Type: application/json"