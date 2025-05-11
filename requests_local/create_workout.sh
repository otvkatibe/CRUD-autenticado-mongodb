#!/bin/bash

# Script para criar um treino com uma requisição bem-sucedida

# Defina a URL da API
API_URL="http://localhost:3000/workouts"

# Defina o token JWT (substitua pelo token gerado após o login)
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEyNGIwZDE4NzlmNjU5ZGQxNTk0MSIsImlhdCI6MTc0NzAwMjU0OX0.L25iyE15iQ9OCh_e3NeLMK6G6O2uwaZPTbbe_00cih4"

# Criação de um novo treino
curl -X POST $API_URL \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino de Força",
    "description": "Treino focado em musculação.",
    "duration": 60
}' 
