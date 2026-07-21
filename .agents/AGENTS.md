# Project Rules & Customizations

## Admin Dashboard Access Control & Security
- The Admin Dashboard is restricted exclusively to authenticated admin sessions (`SerMax`).
- Public website visitors must NOT be able to view, access, or modify administrative features (such as reading contact messages, editing content, or changing credentials) without passing strict JWT authentication (`/api/auth/login`).
- All backend routes modifying or exposing private administrative data must use the `authenticateToken` middleware with 12-round bcrypt password verification.
