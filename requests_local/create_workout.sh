#!/bin/bash

# Script para criar um treino com uma requisição bem-sucedida

# Defina a URL da API
API_URL=""

# Defina o token JWT (substitua pelo token gerado após o login)
TOKEN=""

# Criação de um novo treino
curl -X POST $API_URL \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino de Força",
    "description": "Treino focado em musculação.",
    "duration": 60
}' 
