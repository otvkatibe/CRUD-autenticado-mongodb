#!/bin/bash

# Simulando uma requisição para acessar os treinos de outro usuário
USER_ID="" # ID do usuário que não é o dono do treino
TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MjEyNGIwZDE4NzlmNjU5ZGQxNTk0MSIsImlhdCI6MTc0NzAwMjU0OX0.L25iyE15iQ9OCh_e3NeLMK6G6O2uwaZPTbbe_00cih4" # Substitua por um token válido

# Tentativa de listar treinos de um usuário não autorizado
curl -X GET "http://localhost:3000/workouts" \
     -H "Authorization: $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "userId": "'"$USER_ID"'"
         }'

echo "Caso de erro: Acesso indevido a dados de outro usuário."