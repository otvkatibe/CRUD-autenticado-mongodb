curl -X POST http://localhost:3000/register \
-H "Content-Type: application/json" \
-d '{
  "name": "testuser",
  "email": "testuser@example.com",
  "password": "password123"
}'