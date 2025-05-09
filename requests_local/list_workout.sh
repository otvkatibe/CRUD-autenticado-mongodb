#!/bin/bash

# Script para listar todos os treinos de um usuário

# Defina o token JWT válido
TOKEN="0"

# Requisição bem-sucedida para listar treinos
echo "Listando treinos com token válido..."
curl -X GET 0/workouts \
-H "Authorization: Bearer $TOKEN"

# Requisição sem token
echo -e "\n\nTentativa de listar treinos sem token..."
curl -X GET 0/workouts

# Requisição com token inválido
echo -e "\n\nTentativa de listar treinos com token inválido..."
curl -X GET 0/workouts \
-H "Authorization: Bearer token_invalido"