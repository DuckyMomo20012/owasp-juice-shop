# Privacy Policy Inspection

**Difficulty**: :star2::star2::star2:

**Description**: Prove that you actually read our privacy policy.

**Category**: Security through Obscurity

**Tags**: `Shenanigans`, `Good for Demos`

**Solution**:

<!-- Please include screenshots for each step. Remember that the screenshot includes a clock to indicate the time solved. -->

Open http://localhost:3000/#/privacy-security/privacy-policy
While reading and moving the cursor along paragraphs, I noticed the special effect when the cursor hovers on some text, So I use DevTools to inspect it

![image](https://user-images.githubusercontent.com/63692190/180631150-2c6d083f-c66d-416b-8f3f-59bf9739d807.png)

Note down all text inside `<span class="hot"></span>` tags, which are `http://localhost`, `We may also`, `instruct you`, `to refuse all`, `reasonably necessary` and `responsibility`

Combine those into URL http://localhost:3000/we/may/also/instruct/you/to/refuse/all/reasonably/necessary/responsibility and visit it

![image](https://user-images.githubusercontent.com/63692190/180631340-b81fed87-df66-4375-91fa-e76e67e26283.png)

It's 404 error, but the challenge is solved

![image](https://user-images.githubusercontent.com/63692190/180631353-cf7486f7-14ef-446e-a51c-2d153c95a9a0.png)
