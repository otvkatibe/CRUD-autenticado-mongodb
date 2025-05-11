#!/bin/bash

# Script para listar todos os treinos de um usuário

# Defina o token JWT válido
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEyNGIwZDE4NzlmNjU5ZGQxNTk0MSIsImlhdCI6MTc0NzAwMjU0OX0.L25iyE15iQ9OCh_e3NeLMK6G6O2uwaZPTbbe_00cih4"

# Requisição bem-sucedida para listar treinos
echo "Listando treinos com token válido..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer $TOKEN"

# Requisição sem token
echo -e "\n\nTentativa de listar treinos sem token..."
curl -X GET http://localhost:3000/workouts

# Requisição com token inválido
echo -e "\n\nTentativa de listar treinos com token inválido..."
curl -X GET http://localhost:3000/workouts \
-H "Authorization: Bearer token_invalido"