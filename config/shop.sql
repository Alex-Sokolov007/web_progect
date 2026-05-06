/* Таблица пользователей */
CREATE TABLE IF NOT EXISTS "Users" (
	"id_user" INTEGER NOT NULL,
	"name" VARCHAR,
	"fam" VARCHAR,
	"otc" VARCHAR,
	"email" VARCHAR,
	"phone" VARCHAR,
	"login" VARCHAR,
	"password" VARCHAR,
	"id_role" INTEGER,
	PRIMARY KEY("id_user"),
	FOREIGN KEY ("id_user") REFERENCES "User_busket"("id_user")
	ON UPDATE NO ACTION ON DELETE NO ACTION,
	FOREIGN KEY ("id_user") REFERENCES "User_favorite"("id_user")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "product" (
	"id_product" INTEGER NOT NULL,
	"name" VARCHAR,
	"prise" INTEGER,
	"img" VARCHAR,
	"Coment" VARCHAR,
	"id_company" INTEGER,
	PRIMARY KEY("id_product"),
	FOREIGN KEY ("id_product") REFERENCES "User_busket"("id_product")
	ON UPDATE NO ACTION ON DELETE NO ACTION,
	FOREIGN KEY ("id_product") REFERENCES "User_favorite"("id_product")
	ON UPDATE NO ACTION ON DELETE NO ACTION,
	FOREIGN KEY ("id_product") REFERENCES "categoryes_product"("id_product")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "Coutry_creater" (
	"id_coutry" INTEGER NOT NULL,
	"country" VARCHAR,
	PRIMARY KEY("id_coutry"),
	FOREIGN KEY ("id_coutry") REFERENCES "Company_creater"("id_country")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "Company_creater" (
	"id_company" INTEGER NOT NULL,
	"company_name" VARCHAR,
	"id_country" INTEGER,
	PRIMARY KEY("id_company"),
	FOREIGN KEY ("id_company") REFERENCES "product"("id_company")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "roles" (
	"id_role" INTEGER NOT NULL,
	"role`" VARCHAR,
	PRIMARY KEY("id_role"),
	FOREIGN KEY ("id_role") REFERENCES "Users"("id_role")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "User_busket" (
	"id_busket" INTEGER NOT NULL,
	"id_user" INTEGER,
	"id_product" INTEGER,
	-- Кол-во конкретного продукта
	"number_produxt" INTEGER DEFAULT 1,
	PRIMARY KEY("id_busket")
);

CREATE TABLE IF NOT EXISTS "User_favorite" (
	"id_favorite" INTEGER NOT NULL,
	"id_user" INTEGER,
	"id_product" INTEGER,
	PRIMARY KEY("id_favorite")
);

CREATE TABLE IF NOT EXISTS "category" (
	"id_category" INTEGER NOT NULL,
	"category" VARCHAR,
	PRIMARY KEY("id_category"),
	FOREIGN KEY ("id_category") REFERENCES "categoryes_product"("id_category")
	ON UPDATE NO ACTION ON DELETE NO ACTION
);

CREATE TABLE IF NOT EXISTS "categoryes_product" (
	"id_categoryes_product" INTEGER NOT NULL,
	"id_category" INTEGER,
	"id_product" INTEGER,
	PRIMARY KEY("id_categoryes_product")
);
