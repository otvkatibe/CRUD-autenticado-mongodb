#!/bin/bash

# Script para criar um treino com uma requisição bem-sucedida

# Defina a URL da API
API_URL="https://crud-autenticado-mongodb.vercel.app/workouts"

# Defina o token JWT (substitua pelo token gerado após o login)
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c"

# Criação de um novo treino
curl -X POST $API_URL \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino de Força",
    "description": "Treino focado em musculação.",
    "duration": 60
}' 
