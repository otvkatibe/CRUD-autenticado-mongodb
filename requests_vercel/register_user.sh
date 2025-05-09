curl -X POST https://crud-autenticado-mongodb.vercel.app/register \
-H "Content-Type: application/json" \
-d '{
  "name": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}'