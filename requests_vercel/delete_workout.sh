#!/bin/bash

# Deletar um treino existente com uma requisição bem-sucedida
echo "Deletando um treino existente com token válido.../n"
curl -X DELETE https://crud-autenticado-mongodb.vercel.app/workouts/ \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino sem token
echo "Tentativa de deletar um treino sem token.../n"
curl -X DELETE https://crud-autenticado-mongodb.vercel.app/workouts/681e6716e2f752c8d5cdaacc \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com token inválido
echo "Tentativa de deletar um treino com token inválido.../n"
curl -X DELETE https://crud-autenticado-mongodb.vercel.app/workouts/681e6716e2f752c8d5cdaacc \
-H "Authorization: Bearer <INVALID_TOKEN>" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino de outro usuário
echo "Tentativa de deletar um treino de outro usuário.../n"
curl -X DELETE https://crud-autenticado-mongodb.vercel.app/workouts/<OTHER_USER_WORKOUT_ID> \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c" \
-H "Content-Type: application/json"

# Tentativa de deletar um treino com ID mal formatado
echo "Tentativa de deletar um treino com ID mal formatado.../n"
curl -X DELETE https://crud-autenticado-mongodb.vercel.app/INVALID_ID \
-H "Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c" \
-H "Content-Type: application/json"