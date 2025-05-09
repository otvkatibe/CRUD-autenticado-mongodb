curl -X POST https://crud-autenticado-mongodb.vercel.app/login \
-H "Content-Type: application/json" \
-d '{
  "email": "testuser@example.com",
  "password": "password123"
}'