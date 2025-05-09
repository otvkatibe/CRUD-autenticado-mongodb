#!/bin/bash

# Script para listar todos os treinos de um usuário

# Defina o token JWT válido
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MWU2NGY1ZTJmNzUyYzhkNWNkYWFiOSIsImlhdCI6MTc0NjgyMjQzMH0.w2VCHcNrFIYpBLEixin-wZU1e9LfpoupwEZ6eHxBA6c"

# Requisição bem-sucedida para listar treinos
echo "Listando treinos com token válido..."
curl -X GET https://crud-autenticado-mongodb.vercel.app/workouts \
-H "Authorization: Bearer $TOKEN"

# Requisição sem token
echo -e "\n\nTentativa de listar treinos sem token..."
curl -X GET https://crud-autenticado-mongodb.vercel.app/workouts

# Requisição com token inválido
echo -e "\n\nTentativa de listar treinos com token inválido..."
curl -X GET https://crud-autenticado-mongodb.vercel.app/workouts \
-H "Authorization: Bearer token_invalido"