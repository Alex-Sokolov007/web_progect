import  sqlite3  from  'sqlite3' 

const db = new sqlite3.Database("shop.db")

function createTable() {
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

function createTable2() {
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

function addQwery(name, sure_name, phone) {
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

function addQwery2(name, prise, image) {
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

async function getAll(table_name = 'users', id = null) {
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

function update(productId, imageUrl) {
  const sql = `
    UPDATE products
    SET image = ?
    WHERE id = ?
  `;

  db.run(sql, [imageUrl, productId], function (err) {
    if (err) {
      console.error("Ошибка изменения image:", err.message);
    } else if (this.changes === 0) {
      console.warn(`Товар с id=${productId} не найден`);
    } else {
      console.log(`Изображение товара id=${productId} обновлено`);
    }
  });
}

// createTable2()
// addQwery('Иван', "Золо", 88005553535)
// addQwery2('Рыба прилипала', 480, 'https://media.tenor.com/4MkvKNJCjicAAAAM/fish-sucker.gif')
// addQwery2('рыба', 100.0, 'картинка')

// console.log(await getAll('products'))
// addQwery2("Рыба студент", 10500, "https://c.tenor.com/KotUIP7Y4FsAAAAd/tenor.gif")
export default getAll
// update(2, "https://media.tenor.com/6m3I1g_WiokAAAAM/fish-spin-sha.gif")
// console.log(await getAll('products'))
