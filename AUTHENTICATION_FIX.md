# Event Management System - Authentication Fix

## Issues Fixed

### 1. **Incorrect Role Validation**

Before: Each login page checked for ALL roles (admin, vendor, user) and redirected based on input.

```javascript
// WRONG - Admin login checked for vendor/user too
if (form.email === "admin") { ... }
else if (form.email === "vendor") { ... }
else { ... }
```

After: Each page only handles its own role and calls the backend API.

```javascript
// CORRECT - Admin login only sends "admin" role
const response = await axios.post("http://localhost:5000/api/auth/login", {
  username: form.username,
  password: form.password,
  role: "admin", // Only admin role
});
```

### 2. **No Backend Authentication**

Before: Hardcoded string comparison with user input.
After: Proper JWT-based authentication with backend validation.

### 3. **Insecure Redirects**

Before: Redirects checked localStorage only, no server-side verification.
After: ProtectedRoute now verifies JWT token with backend.

### 4. **Wrong Redirect Paths**

Before: `/login/admin/*` (redirecting to login page)
After: `/admin/*` (actual dashboard routes)

---

## How to Run

### Backend Setup

```bash
cd Backend
npm start
```

Server runs on `http://localhost:5000`

### Frontend Setup

```bash
cd Frontend/EMS
npm run dev
```

Frontend runs on `http://localhost:5173` (or as configured in Vite)

---

## Test Credentials

All test users use password: **`password`**

| Role   | Username | Role Value |
| ------ | -------- | ---------- |
| Admin  | `admin`  | `admin`    |
| Vendor | `vendor` | `vendor`   |
| User   | `user`   | `user`     |

---

## API Endpoints

### POST `/api/auth/login`

Authenticate user and get JWT token.

**Request:**

```json
{
  "username": "admin",
  "password": "password",
  "role": "admin"
}
```

**Response:**

```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

### POST `/api/auth/verify`

Verify JWT token validity.

**Request:**

```json
{
  "token": "jwt_token_here"
}
```

**Response:**

```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "admin",
    "role": "admin"
  }
}
```

---

## Frontend Flow

1. User visits `/` (home page)
2. Selects login type (Admin/Vendor/User)
3. Each login page makes API call to backend with:
   - username
   - password
   - role (admin/vendor/user)
4. Backend validates credentials and returns JWT token
5. Frontend stores token in localStorage
6. User redirected to `/admin`, `/vendor`, or `/user` dashboard
7. ProtectedRoute verifies token before allowing access

---

## Next Steps

1. Replace mock user database with MongoDB
2. Add user registration endpoint
3. Add token refresh mechanism
4. Implement role-based API permissions
5. Add logout functionality
6. Hash passwords with bcrypt on registration
