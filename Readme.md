
## API Kullanımı

#### User endpoint

  ```http
  GET /Login
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `UserName`      | `string` | **Gerekli**.|
| `Password`      | `string` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- Response: JWT Token.
- kullanıcı girişi gerektiren isteklerde istek başlığına(headers) token eklenmelidir.  

-----------------------------------------------------------------

  ```http
  POST /Register
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `UserName`      | `string` | **Gerekli**.|
| `Email`      | `string` | **Gerekli**.|
| `Password`      | `string` | **Gerekli**.|
| `PasswordAgain`      | `string` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- kayıt olmak için /Register endpointi kullanılmalı.  

-----------------------------------------------------------------

  ```http
  GET /User
```
- Giriş yapan kullanıcının kullanıcı bilgilerini döner. 

-----------------------------------------------------------------

  ```http
  PUT /User
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `UserName`      | `string` | **Gerekli**.|
| `Email`      | `string` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- Giriş yapan kullanıcının kullanıcı bilgilerini güncellemek için bu endpoint kullanılmalı. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.
-----------------------------------------------------------------

  ```http
  PUT /User/UpdatePassword
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `Password`      | `string` | **Gerekli**.|
| `NewPassword`      | `string` | **Gerekli**.|
| `NewPasswordAgain`      | `string` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- Giriş yapan kullanıcınin şifresini değiştirmek için bu istek kullanılmalı. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.


-----------------------------------------------------------------

  ```http
  PUT /User/ProfileImage
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `ProfileImage`      | `File` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- Giriş yapan kullanıcının profil resmini güncellemek için kullanılmalı. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------

  ```http
  DELETE /User/ProfileImage
```

- Giriş yapan kullanıcının profil resmini siler. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------

#### Note endpoint
  
  ```http
  GET /Note
```

- Giriş yapan kullanıcının tüm notlarını döner. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------

  ```http
  GET /Note/{id}
```

- Giriş yapan kullanıcının idye göre notunu döner. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------

  ```http
  DELETE /Note/{id}
```

- Giriş yapan kullanıcının idye göre notunu siler. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------

  ```http
  PUT /Note
```

| Parametre | Tip     | Açıklama                       |
| :-------- | :------- | :---------------------------  |
| `NoteId`      | `string` | **Gerekli**.|
| `Content`      | `string` | **Gerekli**.|

- Parametreler isteğin body kısmına  eklenmelidir.
- var olan notu günceller. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.