#!/bin/bash

# Script para criar um treino com uma requisição bem-sucedida

# Defina a URL da API
API_URL="http://localhost:3000/workouts"

# Defina o token JWT (substitua pelo token gerado após o login)
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2MWIwZTEwYjc3YWQ3M2ZmYmY0OSIsImlhdCI6MTc0NjgyMTU1Nn0.IfJuLtiViKNCZMwIxk6RnrVERP45LihITS-FhocLf7c"

# Criação de um novo treino
curl -X POST $API_URL \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino de Força",
    "description": "Treino focado em musculação.",
    "duration": 60
}' 
