#!/bin/bash

# Atualizar um treino existente com uma requisição bem-sucedida
TOKEN="seu_token_jwt_aqui"
WORKOUT_ID="id_do_treino_aqui"

curl -X PUT "http://localhost:3000/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: sem token
echo -e "\n\nCaso de erro: sem token"
curl -X PUT "http://localhost:3000/workouts/$WORKOUT_ID" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: token inválido
echo -e "\n\nCaso de erro: token inválido"
INVALID_TOKEN="token_invalido"
curl -X PUT "http://localhost:3000/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $INVALID_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: acesso indevido a dados de outro usuário
echo -e "\n\nCaso de erro: acesso indevido"
OTHER_USER_TOKEN="token_de_outro_usuario"
curl -X PUT "http://localhost:3000/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $OTHER_USER_TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado",
    "description": "Descrição atualizada do treino.",
    "duration": 60
}'

# Caso de erro: requisição mal formatada
echo -e "\n\nCaso de erro: requisição mal formatada"
curl -X PUT "http://localhost:3000/workouts/$WORKOUT_ID" \
-H "Authorization: Bearer $TOKEN" \
-H "Content-Type: application/json" \
-d '{
    "title": "Treino Atualizado"
    # Falta a descrição e a duração
}'