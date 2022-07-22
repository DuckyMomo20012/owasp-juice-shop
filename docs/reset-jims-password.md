# Reset Jim's Password

**Difficulty**: :star2::star2::star2:

**Description**: Reset Jim's password via the [Forgot Password](http://localhost:3000/#/forgot-password) mechanism with the original answer to his security question.

**Category**: Broken Authentication

**Tags**: `OSINT`

**Solution**:

Go to `Forgot Password`, use jim@juice-sh.op as email, and optionally enter the answer. This will throw `Wrong answer to security question.`
![image](https://user-images.githubusercontent.com/70436051/180383859-f342e91d-a762-4105-abec-c566eb590cb8.png)

Open `Burp Suite` &#8594; `Proxy` &#8594; `HTTP History` and find `POST /rest/user/reset-password`, send it to `repeater`
![image](https://user-images.githubusercontent.com/70436051/180384352-a3ad7d89-4806-4188-8ed9-605085aaebbc.png)

Send it to `intruder`, click `clear §`, add `§` to value off `answer:`
![image](https://user-images.githubusercontent.com/70436051/180385574-334eb660-66c1-4a7a-b683-d0bd439737b1.png)

Go to `payload`, search Google for a list of common names and load that list to `payload options`
![image](https://user-images.githubusercontent.com/70436051/180386271-3ef3a336-db0a-433c-bdfc-03c246b32489.png)

Go to `options` &#8594; `Grep - Extract` and Add `Wrong answer to security question.`
![image](https://user-images.githubusercontent.com/70436051/180386628-46303b88-89f3-4a61-871d-77e66bfd195b.png)

Click `start attack` and wait for the successful attack, find the status 200
![image](https://user-images.githubusercontent.com/70436051/180386961-ce8dbfc0-d9d0-45d6-aaa1-a60c0d1d817e.png)

Yeh his middle name is Samuel, use it to reset the password, we got this challenge


