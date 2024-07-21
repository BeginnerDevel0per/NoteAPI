
## API Kullanımı

#### Jwt Token için

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
  REMOVE /User/ProfileImage
```

- Giriş yapan kullanıcının profil resmini siler. 
- Bu istek için İSTEĞİN headers kısmına JWT token eklenmelidir.

-----------------------------------------------------------------


  