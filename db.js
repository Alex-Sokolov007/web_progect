import  sqlite3  from  'sqlite3' 

const db = new sqlite3.Database("shop.db")

class DB{

  createTable() {
    const sql = `
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        sure_name TEXT NOT NULL,
        phone INTEGER
      );
  `

  db.run(sql, function (err) {
    if (err) {
      console.error("Ошибка создания таблицы:", err.message);
    } else {
      console.log("Таблица создана / уже существует");
    }
  })
}

createTable2() {
  const sql = `
    CREATE TABLE IF NOT EXISTS products (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT(100) NOT NULL,
      prise REAL NOT NULL,
      image TEXT(100)
    );
  `

  db.run(sql, function (err) {
    if (err) {
      console.error("Ошибка создания таблицы:", err.message);
    } else {
      console.log("Таблица создана / уже существует");
    }
  })
}

addQwery(name, sure_name, phone) {
  const sql = `
    INSERT INTO users (name, sure_name, phone)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [name, sure_name, phone], function (err) {
    if (err) {
      console.error("Ошибка при добавлении:", err.message);
    } else {
      console.log(`Пользователь добавлен, ID: ${this.lastID}`);
    }
  });
}

add_producte(name, prise, image) {
  const sql = `
    INSERT INTO products (name, prise, image)
    VALUES (?, ?, ?)
  `;

  db.run(sql, [name, prise, image], function (err) {
    if (err) {
      console.error("Ошибка при добавлении:", err.message);
    } else {
      console.log(`Товар добавлен, ID: ${this.lastID}`);
    }
  });
}

async getAll(table_name = 'users', id = null) {
  return new Promise((resolve, reject) => {
  let sql = ''
  if(id == null){
    sql = `SELECT * FROM ${table_name}`;
  }
  else{
    sql = `SELECT * FROM ${table_name} WHERE id = ${id}`;
  }
    db.all(sql, [], (err, rows) => {
      if (err) {
        console.error("Ошибка выборки:", err.message);
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
}

update_product_name(productId, name) {
  const sql = `
    UPDATE products
    SET name = ?
    WHERE id = ?
  `;

  db.run(sql, [name, productId], function (err) {
    if (err) {
      console.error("Ошибка изменения image:", err.message);
    } else if (this.changes === 0) {
      console.warn(`Товар с id=${productId} не найден`);
    } else {
      console.log(`Изображение товара id=${productId} обновлено`);
    }
  });
}

deleteProduct(productId) {
  const sql = `
    DELETE FROM products
    WHERE id = ?
  `;

  db.run(sql, [productId], function (err) {
    if (err) {
      console.error("Ошибка удаления товара:", err.message);
    } else if (this.changes === 0) {
      console.warn(`Товар с id=${productId} не найден`);
    } else {
      console.log(`Товар с id=${productId} успешно удалён`);
    }
  });
}
}

const d_b = new DB
// createTable2()
// addQwery('Иван', "Золо", 88005553535)
// addQwery2('Рыба прилипала', 480, 'https://media.tenor.com/4MkvKNJCjicAAAAM/fish-sucker.gif')
// addQwery2('рыба', 100.0, 'картинка')

// console.log(await getAll('products'))
// addQwery2("Разработчик при ложения", 100, "https://media.tenor.com/rW2YcU3S83AAAAAM/enbabyfazball-fish.gif")
export default d_b
// update(8, "Рыба трезвеник")
// deleteProduct(9)
// console.log(await getAll('products'))
