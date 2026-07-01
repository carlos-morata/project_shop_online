-- CREACIÓN DE TABLAS -> USUARIOS PEDIDOS PRODUCTOS 
-- TABLA USUARIOS
-- CREATE TABLE users (
--  	user_id SERIAL PRIMARY KEY,
--  	username VARCHAR(20) NOT NULL,
--  	email VARCHAR(255) UNIQUE NOT NULL,
--  	password VARCHAR(100) NOT NULL,
--  	rol VARCHAR(50) NOT NULL DEFAULT 'user' CHECK (rol IN ('user', 'admin'))
--  );

-- TABLA CARRITO DE COMPRA
-- CREATE TABLE cart (
--     cart_id SERIAL PRIMARY KEY,
--     user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,
--     product_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
--     size VARCHAR(10) NOT NULL,
--     quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
--     added_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    
    -- 🌟 REGLA DE ORO PRO: Evitar filas duplicadas
--     UNIQUE (user_id, product_id, size)
-- );

-- TABLA PEDIDOS
-- CREATE TABLE orders (      
--   order_id SERIAL PRIMARY KEY,   
--   user_id INT NOT NULL REFERENCES users(user_id) ON DELETE CASCADE,   
--   discount_id INT REFERENCES discounts(discount_id) ON DELETE CASCADE,           
--   total_price DECIMAL(10, 2) NOT NULL,   
--   state VARCHAR(200) NOT NULL DEFAULT 'pending' CHECK (state IN ('pending', 'in process', 'sent', 'delivered', 'canceled', 'returned', 'payment_failed'))  
--  );

-- CREATE TYPE gender_type AS ENUM ('hombre', 'mujer');
-- TABLA PRODUCTOS
-- CREATE TABLE products (
--     product_id SERIAL PRIMARY KEY,
--     url_image VARCHAR(300),
--     name VARCHAR(100) NOT NULL,
--     price DECIMAL(10, 2) NOT NULL,
--     description VARCHAR(250),
--     sizes VARCHAR(30),
--     category VARCHAR(50),
--     gender gender_type NOT NULL,
--     stock INT NOT NULL DEFAULT 0
-- );

-- ÍNDICE COMPUESTO 
-- CREATE INDEX idx_products_gender_category_lower
-- ON products (LOWER(gender), LOWER(category));

-- TABLA
-- CREATE TABLE order_items (
--   order_item_id SERIAL PRIMARY KEY,
--   order_id INT NOT NULL REFERENCES orders(order_id) ON DELETE CASCADE,
--   product_id INT NOT NULL REFERENCES products(product_id) ON DELETE CASCADE,
--   quantity INT NOT NULL DEFAULT 1 CHECK (quantity > 0),
--   price DECIMAL(10, 2) NOT NULL
--   );

-- TABLA DISCOUNTS
-- CREATE TABLE discounts (      
--   discount_id SERIAL PRIMARY KEY,     
--   name VARCHAR(150),     
--   value DECIMAL NOT NULL,     
--   type VARCHAR(15) NOT NULL CHECK (type IN (' percentage ', ' fixed ')),     
--   min_purchase DECIMAL(10, 2),     
--   expiration_date TIMESTAMP NOT NULL CHECK (expiration_date > CURRENT_TIMESTAMP), 
--   active BOOLEAN NOT NULL  
-- );