#!/bin/bash

# Simulando uma requisição para acessar os treinos de outro usuário
USER_ID="5f50d5b5b5b5b5b5b5b5b5b5" # ID do usuário que não é o dono do treino
TOKEN="0" # Substitua por um token válido

# Tentativa de listar treinos de um usuário não autorizado
curl -X GET "0/workouts" \
     -H "Authorization: $TOKEN" \
     -H "Content-Type: application/json" \
     -d '{
           "userId": "'"$USER_ID"'"
         }'

echo "Caso de erro: Acesso indevido a dados de outro usuário."