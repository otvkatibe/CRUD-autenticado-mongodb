#!/bin/bash

# Script para simular uma requisição sem token, resultando em erro.

echo "Tentando acessar a rota de listagem de treinos sem fornecer um token..."

curl -X GET 0/workouts -H "Content-Type: application/json"

echo -e "\nEsperado: 401 Unauthorized"