# Login Admin

**Difficulty**: :star2::star2:

**Description**: Log in with the administrator's user account.

**Category**: Injection

**Tags**: `Good for Demos`, `Tutorial`

**Solution**:

With the email format from Emma's account (Visual Geo Stalking), I think the admin account should have the same email format: `admin@juice-sh.op`. So I tried SQL Injection with user email: `admin@juice-sh.op'--` and password is anything characters:

![SQL injection](https://user-images.githubusercontent.com/64480713/179964994-c524ca74-5ebe-49ab-9b5d-264743dc6e23.png)

And finally, I can log in using admin account:

![successfully logged in](https://user-images.githubusercontent.com/64480713/179965513-163a76fe-2944-4db7-bd70-1af54c841112.png)

