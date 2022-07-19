# Security Policy

**Difficulty**: :star2::star2:

**Description**: Behave like any "white-hat" should before getting into the action.

**Category**: Miscellaneous

**Tags**: `Good Practice`

**Solution**:

After some research, I found that there is a file `security.txt` for security researchers to easily report security vulnerabilities on [Wikipedia](https://en.wikipedia.org/wiki/Security.txt):

![security.txt wiki](https://user-images.githubusercontent.com/64480713/179762265-fa24a5c3-835f-41f5-a960-c24fd9ac67f7.png)

Then I tried to access route: `/security.txt` or `/.well-known/security.txt` and `/.well-known/security.txt` is the **correct** one:

![result](https://user-images.githubusercontent.com/64480713/179762975-7e50464d-8b70-44f6-b815-a3f44d70e1fa.png)

